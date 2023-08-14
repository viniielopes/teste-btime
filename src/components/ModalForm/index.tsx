"use client";

import DatePicker from "react-datepicker";
import {
  BsCardHeading,
  BsFillTagsFill,
  BsBodyText,
  BsCalendarDate,
} from "react-icons/bs";
import { FiAlertTriangle, FiExternalLink } from "react-icons/fi";
import { MdOutlineAttachFile } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useModal } from "@/stores/useModal";
import { Typography } from "../Typography";
import { ChangeEventHandler, useState } from "react";
import { Tag } from "../Tag";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Card, File, Priority, TagType } from "@/types/board";
import { ChipPriority } from "../ChipPriority";
import { useBoardState } from "@/stores/useBoardState";

export const ModalForm = () => {
  const [showTags, setShowTags] = useState(false);

  const tags: TagType[] = ["design", "devops", "backend", "mobile", "web"];
  const priorities: Priority[] = ["low", "medium", "high"];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Card>({
    defaultValues: {
      priority: "low",
      endDate: new Date().getTime(),
      tags: [],
      files: [],
      title: "Titulo editavel",
      description: "Descrição editavel",
    },
  });

  const [watchTags, watchPriority, watchFiles] = watch([
    "tags",
    "priority",
    "files",
  ]);

  const { activeColumn, toggleShowModal } = useModal((state) => ({
    toggleShowModal: state.toggleShow,
    activeColumn: state.data.activeColumn,
  }));

  const { cards, setCards } = useBoardState((state) => ({
    cards: state.cards,
    setCards: state.setCards,
  }));

  const onSubmit: SubmitHandler<Card> = (data) => {
    const updateCards = cards ? cards : [];

    updateCards.push({
      ...data,
      id: data.endDate + Math.floor(Math.random() * 10001),
      columnID: activeColumn.id,
    });

    setCards(updateCards);

    toggleShowModal({
      activeColumn: {
        id: 0,
        title: "",
      },
    });
  };

  const uploadFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.files);
    const files = e.target.files;

    if (!files) return;

    const upFiles: File[] = [];
    for (const file of files) {
      upFiles.push({ name: file.name, link: URL.createObjectURL(file) });
    }

    setValue("files", upFiles);
  };

  const openFile = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div
      onClick={() =>
        toggleShowModal({
          activeColumn: {
            id: 0,
            title: "",
          },
        })
      }
      id="defaultModal"
      aria-hidden="true"
      className="backdrop-modal fixed left-0 right-0 top-0 z-50 flex max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
    >
      <div
        className="relative max-h-full w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/*         <!-- Modal content --> */}
        <div className="relative rounded-lg bg-white shadow">
          {/*             <!-- Modal header --> */}
          <div className="flex items-center justify-between rounded-t border-b border-light-grey p-4">
            <div className="flex items-center gap-2">
              <BsCardHeading
                className="text-text-primary"
                size={24}
              ></BsCardHeading>
              <input
                role="textbox"
                className="w-96 resize-none rounded border bg-white p-1 text-xl font-semibold text-text-primary"
                maxLength={30}
                {...register("title")}
              ></input>
            </div>
            <button
              onClick={() =>
                toggleShowModal({
                  activeColumn: {
                    id: 0,
                    title: "",
                  },
                })
              }
              type="button"
              className="text-text-primary "
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/*             <!-- Modal body --> */}
          <div className="space-y-6 p-6">
            <div className="flex items-center gap-3">
              <FiAlertTriangle
                size={24}
                className="text-text-primary"
              ></FiAlertTriangle>
              <Typography variant="title">Prioridade</Typography>
            </div>

            <div className="flex gap-1">
              {priorities.map((priority) => (
                <div
                  className="cursor-pointer"
                  onClick={() => setValue("priority", priority)}
                >
                  <ChipPriority
                    key={priority}
                    priority={priority}
                    disabled={watchPriority !== priority}
                  ></ChipPriority>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <BsFillTagsFill
                size={24}
                className="text-text-primary"
              ></BsFillTagsFill>
              <Typography variant="title">Labels</Typography>
            </div>

            <div className="relative">
              <div className="flex items-center gap-1">
                {watchTags.map((tag) => (
                  <Tag key={tag} type={tag}></Tag>
                ))}
                <AiOutlinePlusCircle
                  onClick={() => setShowTags(true)}
                  size={24}
                  className="h-8 w-10 cursor-pointer rounded bg-light-grey p-1 text-text-primary "
                ></AiOutlinePlusCircle>
              </div>

              {showTags && (
                <>
                  <div
                    className="fixed left-0 top-0 h-full w-full"
                    onClick={() => setShowTags(false)}
                  ></div>

                  <div className="absolute left-0 top-12 rounded-lg bg-white p-4 text-text-primary shadow">
                    <div className="flex items-center gap-3">
                      <Controller
                        control={control}
                        name="tags"
                        render={({ field }) => (
                          <>
                            {tags.map((tag) => (
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  const stateUpdate = field.value;

                                  if (field.value.includes(tag)) {
                                    field.onChange(
                                      stateUpdate.filter(
                                        (tagState) => tagState !== tag
                                      )
                                    );
                                    return;
                                  }

                                  stateUpdate.push(tag);
                                  field.onChange(stateUpdate);
                                }}
                              >
                                <Tag
                                  key={tag}
                                  type={tag}
                                  disabled={!field.value.includes(tag)}
                                ></Tag>
                              </div>
                            ))}
                          </>
                        )}
                      ></Controller>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center gap-3">
              <BsBodyText size={24} className="text-text-primary"></BsBodyText>
              <Typography variant="title">Descrição</Typography>
            </div>
            <textarea
              rows={4}
              className="block max-h-40 w-full resize-none overflow-auto rounded border bg-white p-1 text-xl font-semibold text-text-primary"
              {...register("description")}
            ></textarea>
            <div className="flex items-center gap-3">
              <MdOutlineAttachFile
                size={24}
                className="text-text-primary"
              ></MdOutlineAttachFile>
              <Typography variant="title">Arquivos</Typography>
            </div>
            <div className="flex gap-2">
              {watchFiles.map((file) => (
                <button
                  onClick={() => openFile(file.link)}
                  className="flex items-center gap-2 rounded bg-light-grey p-2 text-text-primary"
                >
                  {file.name}
                  <FiExternalLink
                    size={14}
                    className="text-text-primary"
                  ></FiExternalLink>
                </button>
              ))}
            </div>

            <input
              multiple
              type="file"
              id="file"
              name="file"
              accept="image/png, image/jpeg, .pdf"
              onChange={uploadFile}
            />

            <div className="flex items-center gap-3">
              <BsCalendarDate
                size={24}
                className="text-text-primary"
              ></BsCalendarDate>
              <Typography variant="title">Data de término</Typography>
            </div>

            <Controller
              control={control}
              name="endDate"
              render={({ field }) => (
                <DatePicker
                  selected={new Date(field.value)}
                  onChange={(date) => field.onChange(date?.getTime())}
                  dateFormat={"dd/MM/yyyy"}
                  placeholderText="dd/MM/yyyy"
                  className="bg-white text-text-secondary"
                />
              )}
            />
          </div>
          {/*             <!-- Modal footer --> */}
          <div className="border-gray-200 flex items-center justify-end space-x-2 rounded-b border-t border-light-grey p-6">
            <button
              onClick={handleSubmit(onSubmit)}
              className="justify-center rounded border border-dark-grey bg-feedback-green px-4 py-2 text-lg text-text-primary"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
