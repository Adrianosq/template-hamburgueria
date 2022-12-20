import * as yup from "yup";

export const loginPageSchema = yup.object().shape({
   email: yup.string().required("Digite um e-mail valido"),
   password: yup.string().required("Digite uma senha valida"),
});