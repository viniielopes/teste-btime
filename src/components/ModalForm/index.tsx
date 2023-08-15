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
import { Typography } from "@/components//Typography";
import { Controller } from "react-hook-form";
import { ChipPriority } from "@/components/ChipPriority";
import { useModalForm } from "@/hooks/useModalForm";
import { Tag } from "@/components/Tag";
import { useTranslations } from "next-intl";

export const ModalForm = () => {
  const t = useTranslations("FormFields");

  const {
    control,
    showTags,
    errors,
    columnTitle,
    tags,
    priorities,
    watchTags,
    watchPriority,
    watchFiles,
    register,
    handleSubmit,
    closeModal,
    setPriority,
    openFile,
    uploadFile,
    onSubmit,
    setShowTags,
  } = useModalForm();

  return (
    <div
      onClick={() => closeModal()}
      id="defaultModal"
      aria-hidden="true"
      className="backdrop-modal fixed left-0 right-0 top-0 z-50 flex max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
    >
      <div
        className="relative max-h-full w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/*         <!-- Modal content --> */}
        <div className="relative rounded-lg bg-bgwhite shadow">
          {/*             <!-- Modal header --> */}
          <div className="flex flex-col gap-1 rounded-t border-b border-light-grey p-4">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <BsCardHeading
                  className="text-text-primary"
                  size={24}
                ></BsCardHeading>
                <input
                  data-testid="title-field"
                  role="textbox"
                  className={`${
                    errors.title && "border-feedback-error"
                  } w-96 resize-none rounded border bg-bgwhite p-1 text-xl font-semibold text-text-primary`}
                  maxLength={30}
                  {...register("title")}
                ></input>
              </div>

              <button
                onClick={() => closeModal()}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {errors.title && (
              <p data-testid="error" className="text-sm text-feedback-error">
                {errors.title.message}
              </p>
            )}
            <Typography variant="secondary">
              na coluna <span className="underline">{columnTitle}</span>
            </Typography>
          </div>

          {/*             <!-- Modal body --> */}
          <div className="space-y-5 p-6">
            <div className="flex items-center gap-3">
              <FiAlertTriangle
                size={24}
                className="text-text-primary"
              ></FiAlertTriangle>
              <Typography variant="title">{t("priority")}</Typography>
            </div>

            <div className="flex gap-1">
              {priorities.map((priority) => (
                <div
                  key={priority}
                  className="cursor-pointer"
                  onClick={() => setPriority(priority)}
                >
                  <ChipPriority
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
              <Typography variant="title">{t("labels")}</Typography>
            </div>

            <div className="relative">
              <div className="flex items-center gap-1">
                {watchTags.map((tag) => (
                  <Tag key={tag} type={tag}></Tag>
                ))}
                <AiOutlinePlusCircle
                  name="add-tag"
                  onClick={() => setShowTags(true)}
                  size={24}
                  className="h-8 w-10 cursor-pointer rounded bg-light-grey p-1 text-text-primary "
                ></AiOutlinePlusCircle>
              </div>

              {showTags && (
                <>
                  <div
                    className="fixed left-0 top-0 z-10 h-full w-full"
                    onClick={() => setShowTags(false)}
                  ></div>

                  <div className="absolute left-0 top-12 rounded-lg bg-bgwhite p-4 text-text-primary shadow">
                    <div className="flex items-center gap-3">
                      <Controller
                        control={control}
                        name="tags"
                        render={({ field }) => (
                          <>
                            {tags.map((tag) => (
                              <div
                                className="z-50 cursor-pointer"
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
              <Typography variant="title">{t("description")}</Typography>
            </div>
            <div>
              <textarea
                data-testid="description-field"
                rows={4}
                className={`${
                  errors.description && "border-feedback-error"
                } block max-h-40 w-full resize-none overflow-auto rounded border bg-bgwhite p-1 text-xl font-semibold text-text-primary`}
                {...register("description")}
              ></textarea>
              {errors.description && (
                <p data-testid="error" className="text-sm text-feedback-error">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <MdOutlineAttachFile
                size={24}
                className="text-text-primary"
              ></MdOutlineAttachFile>
              <Typography variant="title">{t("attachment")}</Typography>
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
              className="hover:file:bg-blue-600 text-sm text-white
      file:mr-4 file:cursor-pointer file:rounded-md
      file:border-0 file:bg-tag-web
      file:px-4 file:py-2
      file:text-sm file:font-semibold
      file:text-white"
              accept="image/png, image/jpeg, .pdf"
              onChange={uploadFile}
            />

            <div className="flex items-center gap-3">
              <BsCalendarDate
                size={24}
                className="text-text-primary"
              ></BsCalendarDate>
              <Typography variant="title">{t("duedate")}</Typography>
            </div>

            <div>
              <Controller
                control={control}
                name="endDate"
                render={({ field }) => (
                  <DatePicker
                    name={field.name}
                    selected={new Date(field.value)}
                    onChange={(date) => field.onChange(date)}
                    dateFormat={"dd/MM/yyyy"}
                    placeholderText="dd/MM/yyyy"
                    className={`${
                      errors.endDate && "border border-feedback-error"
                    } bg-bgwhite text-text-secondary`}
                  />
                )}
              />

              {errors.endDate && (
                <p data-testid="error" className="text-sm text-feedback-error">
                  {errors.endDate.message}
                </p>
              )}
            </div>
          </div>
          {/*             <!-- Modal footer --> */}
          <div className="border-gray-200 flex items-center justify-end space-x-2 rounded-b border-t border-light-grey p-6">
            <button
              data-testid="btn-save"
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
