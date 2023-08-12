import type { Card as CardType, Column, DragTypes } from "@/types/board";
import { useSortable } from "@dnd-kit/sortable";
import { ReactNode } from "react";

type DraggableProps = {
  children: ReactNode;
  id: number | string;
  type: DragTypes;
  card?: CardType;
  column?: Column;
};

export const Draggable = ({
  children,
  id,
  type,
  card,
  column,
}: DraggableProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      id,
      type,
      card,
      column,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        cursor: "grab",
        touchAction: "none",
        transition,
      }
    : undefined;

  if (isDragging && type === "Card" && card) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex h-40 w-72 flex-col gap-2 rounded border border-dark-grey bg-light-grey p-2"
      ></div>
    );
  }

  if (isDragging && type === "Column" && column) {
    return (
      <div
        ref={setNodeRef}
        className="rounded border border-dark-grey bg-light-grey "
        style={{
          ...style,
          width: "20rem",
        }}
      ></div>
    );
  }

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};
