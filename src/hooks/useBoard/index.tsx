import { shallow } from "zustand/shallow";
import { useBoardState } from "@/stores/useBoardState";
import type { DragTypes } from "@/types/board";
import {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { ChangeEventHandler, useMemo, useState } from "react";

export const useBoard = () => {
  const {
    columns,
    setColumns,
    cards,
    setCards,
    activeColumn,
    setActiveColumn,
    activeCard,
    setActiveCard,
  } = useBoardState(
    (state) => ({
      columns: state.columns,
      setColumns: state.setColumns,
      cards: state.cards,
      setCards: state.setCards,
      activeColumn: state.activeColumn,
      setActiveColumn: state.setActiveColumn,
      activeCard: state.activeCard,
      setActiveCard: state.setActiveCard,
    }),
    shallow
  );

  const [filter, setFilter] = useState<string>();

  const columnsID = useMemo(() => columns?.map((col) => col.id), [columns]);

  const filteredCards = useMemo(
    () =>
      filter && cards
        ? cards.filter((card) =>
            card.title.toLowerCase().includes(filter.toLowerCase())
          )
        : cards,
    [filter, cards]
  );

  const filterCards: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  const onDragStart = (event: DragStartEvent) => {
    console.log("DRAG START _______");
    console.log(event);
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current?.column);
      return;
    }
    if (event.active.data.current?.type === "Card") {
      setActiveCard(event.active.data.current?.card);
      return;
    }
  };

  const onDragOver = (event: DragOverEvent) => {
    console.log("DRAG OVER", event);
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    const isCardActive = (active.data.current?.type as DragTypes) === "Card";
    const isCardOver = (over.data.current?.type as DragTypes) === "Card";

    if (!isCardActive) return;
    if (!cards) return;

    //DROP CARD OVER A CARD
    if (isCardActive && isCardOver) {
      const activeIndex = cards.findIndex((card) => card.id === active.id);
      const overIndex = cards.findIndex((card) => card.id === over.id);

      // DROP CARD OVER A CARD IN ANOTHER COLUMN
      if (cards[activeIndex].columnID != cards[overIndex]?.columnID) {
        cards[activeIndex].columnID = cards[overIndex].columnID;
        const updatedArray = arrayMove(cards, activeIndex, overIndex - 1);
        setCards(updatedArray);
      }

      const updatedArray = arrayMove(cards, activeIndex, overIndex);
      setCards(updatedArray);
    }

    const isColumnOver = (over.data.current?.type as DragTypes) === "Column";

    // DROP CARD OVER A COLUMN
    if (isCardActive && isColumnOver) {
      const activeIndex = cards.findIndex((card) => card.id === active.id);

      cards[activeIndex].columnID = over.id.toString();

      console.log("DROPPING CARD OVER COLUMN", { activeIndex });

      const updatedArray = arrayMove(cards, activeIndex, activeIndex);
      setCards(updatedArray);
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    setActiveColumn(null);
    setActiveCard(null);

    console.log("DRAG END __________");
    console.log(event);
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    const isColumnDragging =
      (active.data.current?.type as DragTypes) === "Column";

    if (!isColumnDragging) return;

    if (!columns) return;

    const oldIndex = columns.findIndex((column) => column.id === active.id);
    const newIndex = columns.findIndex((column) => column.id === over?.id);
    const updatedArray = arrayMove(columns, oldIndex, newIndex);
    setColumns(updatedArray);
  };

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor, pointerSensor);

  return {
    onDragStart,
    onDragEnd,
    onDragOver,
    cards: filteredCards,
    activeColumn,
    activeCard,
    columnsID,
    columns,
    sensors,
    filterCards,
  };
};
