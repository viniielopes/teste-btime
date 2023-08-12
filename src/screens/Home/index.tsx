"use client";

import { Board } from "@/components/Board";
import { Card } from "@/components/Card";
import { Draggable } from "@/components/Dnd/Draggable";
import { Portal } from "@/components/Portal";
import { mockBoards, mockCards } from "@/mock";
import type { Card as CardType, Column, DragTypes } from "@/types/board";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";

export default function HomeScreen() {
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  const [cards, setCards] = useState(mockCards);
  const [columns, setColumns] = useState(mockBoards);

  const columnsID = useMemo(() => columns.map((col) => col.id), [columns]);

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

    //DROP CARD OVER A CARD
    if (isCardActive && isCardOver) {
      setCards((cards) => {
        const activeIndex = cards.findIndex((card) => card.id === active.id);
        const overIndex = cards.findIndex((card) => card.id === over.id);

        // DROP CARD OVER A CARD IN ANOTHER COLUMN
        if (cards[activeIndex].columnID != cards[overIndex]?.columnID) {
          cards[activeIndex].columnID = cards[overIndex].columnID;
          return arrayMove(cards, activeIndex, overIndex - 1);
        }

        return arrayMove(cards, activeIndex, overIndex);
      });
    }

    const isColumnOver = (over.data.current?.type as DragTypes) === "Column";

    // DROP CARD OVER A COLUMN
    if (isCardActive && isColumnOver) {
      setCards((cards) => {
        const activeIndex = cards.findIndex((card) => card.id === active.id);

        cards[activeIndex].columnID = over.id;

        console.log("DROPPING CARD OVER COLUMN", { activeIndex });

        return arrayMove(cards, activeIndex, activeIndex);
      });
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

    setColumns((columns) => {
      const oldIndex = columns.findIndex((column) => column.id === active.id);
      const newIndex = columns.findIndex((column) => column.id === over?.id);
      return arrayMove(columns, oldIndex, newIndex);
    });
  };

  return (
    <DndContext
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      sensors={sensors}
    >
      <SortableContext items={columnsID}>
        {columns.map((board) => (
          <Draggable
            key={board.id + board.title}
            id={board.id}
            type="Column"
            column={board}
          >
            <Board
              key={board.id}
              id={board.id}
              title={board.title}
              cards={cards.filter((card) => card.columnID === board.id)}
            ></Board>
          </Draggable>
        ))}
      </SortableContext>

      <Portal>
        <DragOverlay>
          {activeColumn && (
            <div
              style={{
                width: "20rem",
              }}
            >
              <Board
                id={activeColumn.id}
                key={activeColumn.id}
                title={activeColumn?.title}
                cards={cards.filter((c) => c.columnID === activeColumn?.id)}
              ></Board>
            </div>
          )}

          {activeCard && <Card {...activeCard}></Card>}
        </DragOverlay>
      </Portal>
    </DndContext>
  );
}
