import * as yup from "yup";

export const loginValidationSchema = yup
.object().shape({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório"),

  password: yup
    .string()
    .min(6, "No minimo 6 caracteres")
    .required("Campo obrigatório"),
});