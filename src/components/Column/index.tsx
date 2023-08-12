"use client";

import { Card } from "@/components/Card";
import { Typography } from "@/components/Typography";
import { SortableContext } from "@dnd-kit/sortable";
import { Draggable } from "@/components/Dnd/Draggable";
import { useMemo } from "react";
import { BoardProps } from "./types";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Column = ({ id, title, cards }: BoardProps) => {
  const cardsID = useMemo(() => cards?.map((card) => card.id), [cards]);

  return (
    <Draggable
      key={id}
      id={id}
      column={{
        id,
        title,
      }}
      type="Column"
    >
      <div className="rounded border border-light-grey p-4 hover:bg-light-grey active:bg-light-grey">
        <div className="flex flex-col gap-4">
          <Typography variant="primary">{title}</Typography>
          {cards && cardsID && (
            <SortableContext items={cardsID}>
              {cards.map((card) => (
                <Draggable key={card.id} id={card.id} card={card} type="Card">
                  <Card key={card.title + card.id} {...card}></Card>
                </Draggable>
              ))}
            </SortableContext>
          )}
          <button className="flex items-center justify-center gap-1 rounded border border-dark-grey text-lg text-text-primary hover:bg-feedback-green hover:text-dark-grey">
            <AiOutlinePlusCircle width={24} height={24}></AiOutlinePlusCircle>
            Add task
          </button>
        </div>
      </div>
    </Draggable>
  );
};
