import { format } from "date-fns";
import { ChipPriority } from "../ChipPriority";
import { Tag } from "../Tag";
import { Typography } from "../Typography";
import { UserImage } from "../UserImage";
import { CardProps } from "./types";
import { MdOutlineAttachFile } from "react-icons/md";
import { useModal } from "@/stores/useModal";

export const Card = ({ card, column }: CardProps) => {
  const { tags, endDate, priority, title, files } = card;

  console.log(card);

  const { toggleShowModal } = useModal((state) => ({
    toggleShowModal: state.toggleShow,
  }));

  const openModalForm = () => {
    toggleShowModal({
      card: card,
      activeColumn: column,
    });
  };

  return (
    <div
      onClick={openModalForm}
      className="flex w-72 flex-col gap-2 rounded border border-dark-grey bg-bgwhite p-2"
    >
      <ChipPriority priority={priority}></ChipPriority>
      <Typography variant="primary">{title}</Typography>
      <div className="enable-scroll-but-hidden flex gap-2 overflow-scroll">
        {tags.map((tag) => (
          <Tag key={tag} type={tag} />
        ))}
      </div>
      <Typography variant="secondary">
        {format(endDate, "dd/MM/yyyy")}
      </Typography>
      {files && files.length > 0 && (
        <div className="flex items-center">
          <MdOutlineAttachFile
            size={18}
            className="text-text-primary"
          ></MdOutlineAttachFile>
          <Typography variant="secondary">{files.length}</Typography>
        </div>
      )}

      <div className="flex justify-end">
        <UserImage />
      </div>
    </div>
  );
};
