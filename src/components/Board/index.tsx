"use client";

import { Card } from "@/components/Card";
import { Typography } from "@/components/Typography";
import { SortableContext } from "@dnd-kit/sortable";
import { Draggable } from "@/components/Dnd/Draggable";
import { CardProps } from "@/components/Card/types";
import { useMemo } from "react";

type BoardProps = {
  id: number;
  title: string;
  cards: CardProps[];
};

export const Board = ({ id, title, cards }: BoardProps) => {
  const cardsID = useMemo(() => cards.map((card) => card.id), [cards]);

  return (
    <div className="rounded border border-light-grey p-4 hover:bg-light-grey active:bg-light-grey">
      <div className="flex flex-col gap-4">
        <Typography variant="primary">{title}</Typography>
        <SortableContext items={cardsID}>
          {cards.map((card) => (
            <Draggable key={card.id} id={card.id} card={card} type="Card">
              <Card key={card.title + card.id} {...card}></Card>
            </Draggable>
          ))}
        </SortableContext>
      </div>
    </div>
  );
};
