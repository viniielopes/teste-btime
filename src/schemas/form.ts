import * as yup from "yup";

export const modalFormSchema = yup.object().shape({
  id: yup.number(),
  columnID: yup.string(),
  title: yup.string().required("Titulo não pode ser vazio!"),
  description: yup.string().required("Descreva algo sobre a tarefa."),
  priority: yup.string(),
  tags: yup.array(),
  endDate: yup
    .date()
    .min(new Date(), "Data de termino tem que ser maior que dia atual!")
    .max("2050-01-01", "Data de termino invalida!"),
  files: yup.array(),
});
