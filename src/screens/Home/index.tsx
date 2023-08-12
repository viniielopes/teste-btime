"use client";

import { Board } from "@/components/Board";
import { Card } from "@/components/Card";
import { Draggable } from "@/components/Dnd/Draggable";
import { Portal } from "@/components/Portal";
import { useBoard } from "@/hooks/useBoard";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import "react-toastify/dist/ReactToastify.min.css";

export default function HomeScreen() {
  const {
    columns,
    columnsID,
    activeCard,
    activeColumn,
    cards,
    onDragOver,
    onDragStart,
    onDragEnd,
    sensors,
  } = useBoard();

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
