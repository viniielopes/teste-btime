import { useModal } from "@/stores/useModal";
import { ChangeEventHandler, useEffect, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { File, Priority, TagType } from "@/types/board";
import { useBoardState } from "@/stores/useBoardState";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalFormSchema } from "@/schemas/form";
import { ModalCardForm } from "./types";

export const useModalForm = () => {
  const priorities: Priority[] = ["low", "medium", "high"];
  const tags: TagType[] = ["design", "devops", "backend", "mobile", "web"];

  const [showTags, setShowTags] = useState(false);

  const { activeCard, activeColumn, toggleShowModal } = useModal((state) => ({
    toggleShowModal: state.toggleShow,
    activeColumn: state.data.activeColumn,
    activeCard: state.data.card,
  }));

  const { cards, setCards } = useBoardState((state) => ({
    cards: state.cards,
    setCards: state.setCards,
  }));

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ModalCardForm>({
    resolver: yupResolver(modalFormSchema) as Resolver<ModalCardForm, any>,
    defaultValues: {
      priority: "low",
      endDate: new Date(),
      tags: [],
      files: [],
      title: "Titulo editavel",
      description: "Descrição editavel",
    },
  });

  useEffect(() => {
    if (activeCard) {
      reset({
        ...activeCard,
        endDate: new Date(activeCard.endDate),
      });
    }
  }, [activeCard]);

  const [watchTags, watchPriority, watchFiles] = watch([
    "tags",
    "priority",
    "files",
  ]);
  const onSubmit: SubmitHandler<ModalCardForm> = (data) => {
    const updateCards = cards ? cards : [];

    // update card
    if (data.id) {
      const indexPatchCard = updateCards.findIndex(
        (card) => card.id === data.id
      );

      updateCards[indexPatchCard] = {
        ...data,
        endDate: data.endDate.getTime(),
        id: data.endDate.getTime() + Math.floor(Math.random() * 10001),
        columnID: activeColumn.id,
      };

      setCards(updateCards);
      toggleShowModal();

      return;
    }

    // new card
    updateCards.push({
      ...data,
      endDate: data.endDate.getTime(),
      id: data.endDate.getTime() + Math.floor(Math.random() * 10001),
      columnID: activeColumn.id,
    });

    setCards(updateCards);

    toggleShowModal();
  };

  const uploadFile: ChangeEventHandler<HTMLInputElement> = (e) => {
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

  const closeModal = () => {
    toggleShowModal();
  };

  const setPriority = (priority: Priority) => {
    setValue("priority", priority);
  };

  const columnTitle = activeColumn.title;

  return {
    setPriority,
    columnTitle,
    closeModal,
    control,
    openFile,
    uploadFile,
    onSubmit: handleSubmit(onSubmit),
    showTags,
    setShowTags,
    errors,
    register,
    tags,
    priorities,
    watchTags,
    watchPriority,
    watchFiles,
  };
};
