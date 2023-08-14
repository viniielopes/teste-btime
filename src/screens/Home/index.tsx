"use client";

import { Column } from "@/components/Column";
import { Card } from "@/components/Card";
import { Portal } from "@/components/Portal";
import { useBoard } from "@/hooks/useBoard";
import { DndContext, DragOverlay, pointerWithin } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import "react-toastify/dist/ReactToastify.min.css";
import { ModalForm } from "@/components/ModalForm";
import { useModal } from "@/stores/useModal";

export default function HomeScreen() {
  const { show } = useModal((state) => ({ show: state.show }));

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
      collisionDetection={pointerWithin}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      sensors={sensors}
    >
      {columns && columnsID && (
        <SortableContext items={columnsID}>
          {columns.map((board) => (
            <Column
              key={board.id}
              id={board.id}
              title={board.title}
              cards={
                cards && cards.filter((card) => card.columnID === board.id)
              }
            />
          ))}
        </SortableContext>
      )}

      <Portal>
        <DragOverlay>
          {activeColumn && (
            <div
              style={{
                width: "20rem",
                cursor: "grabbing",
              }}
            >
              <Column
                id={activeColumn.id}
                key={activeColumn.id}
                title={activeColumn?.title}
                cards={
                  cards && cards.filter((c) => c.columnID === activeColumn?.id)
                }
              />
            </div>
          )}

          {activeCard && (
            <div
              style={{
                cursor: "grabbing",
              }}
            >
              <Card {...activeCard}></Card>
            </div>
          )}
        </DragOverlay>
        {show && <ModalForm />}
      </Portal>
    </DndContext>
  );
}
