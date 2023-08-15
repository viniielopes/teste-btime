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
import { Typography } from "@/components/Typography";
import { useTranslations } from "next-intl";

export default function HomeScreen() {
  const t = useTranslations("Search");

  const { show } = useModal((state) => ({ show: state.show }));

  const {
    columns,
    columnsID,
    activeCard,
    activeColumn,
    cards,
    sensors,
    onDragOver,
    onDragStart,
    onDragEnd,
    filterCards,
  } = useBoard();

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Typography variant="title">{t("text")}</Typography>
        <input
          type="text"
          className="w-72 resize-none rounded border bg-bgwhite p-1 text-xl font-semibold text-text-primary"
          onChange={filterCards}
        />
      </div>
      <div
        className="mt-5 flex justify-center gap-6 px-14"
        style={{
          gap: "1.5rem",
        }}
      >
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
                  column={board}
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
                    key={activeColumn.id}
                    column={activeColumn}
                    cards={
                      cards &&
                      cards.filter((c) => c.columnID === activeColumn?.id)
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
                  <Card
                    card={activeCard}
                    column={{
                      id: "0",
                      title: "",
                    }}
                  ></Card>
                </div>
              )}
            </DragOverlay>
            {show && <ModalForm />}
          </Portal>
        </DndContext>
      </div>
    </>
  );
}
