"use client";

import { Card } from "@/components/Card";
import { Typography } from "@/components/Typography";
import { SortableContext } from "@dnd-kit/sortable";
import { Draggable } from "@/components/Dnd/Draggable";
import { useMemo } from "react";
import { BoardProps } from "./types";
import { useTranslations } from "next-intl";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { useModal } from "@/stores/useModal";
import { shallow } from "zustand/shallow";

export const Column = ({ column, cards }: BoardProps) => {
  const t = useTranslations("Board.button");
  const { id, title } = column;

  const cardsID = useMemo(() => cards?.map((card) => card.id), [cards]);

  const { toggleShowModal } = useModal(
    (state) => ({
      toggleShowModal: state.toggleShow,
    }),
    shallow
  );

  const openModalForm = () => {
    toggleShowModal({
      activeColumn: {
        id: id,
        title: title,
      },
    });
  };

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
      <div
        style={{
          width: "21rem",
          height: "80vh",
        }}
        className="rounded border border-light-grey p-4 hover:bg-light-grey active:bg-light-grey"
      >
        <div className="flex h-full flex-col gap-4">
          <Typography variant="primary">{title}</Typography>
          <div className="flex flex-1 flex-col items-center gap-4 overflow-auto ">
            {cards && cardsID && (
              <SortableContext items={cardsID}>
                {cards.map((card) => (
                  <Draggable key={card.id} id={card.id} card={card} type="Card">
                    <Card
                      column={column}
                      key={card.title + card.id}
                      card={card}
                    ></Card>
                  </Draggable>
                ))}
              </SortableContext>
            )}
          </div>
          <button
            onClick={openModalForm}
            className="flex items-center justify-center gap-1 rounded border border-dark-grey text-lg text-text-primary hover:bg-feedback-green hover:text-dark-grey dark:text-white"
          >
            <AiOutlinePlusCircle width={24} height={24}></AiOutlinePlusCircle>
            {t("text")}
          </button>
        </div>
      </div>
    </Draggable>
  );
};
