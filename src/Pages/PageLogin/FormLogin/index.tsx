import { useForm, SubmitHandler, ValidationMode } from "react-hook-form";
import { Input } from "../../../components/Input";
import { ButtonCadastrar, ButtonLogin } from "../../../styles/buttons";
import { StyledFormLogin } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginPageSchema } from "./schemaLogin";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Link } from "react-router-dom";

export interface iLoginData {
  email: string;
  password: string;
  mode?: keyof ValidationMode | undefined;
}

export function FormLogin() {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    mode: "onBlur",
    resolver: yupResolver(loginPageSchema),
  });

  const onSubmit: SubmitHandler<iLoginData> = (data) => {
    userLogin(data);
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="Digite o seu e-mail"
        register={register("email")}
        error={errors.email}
      />
      <Input
        id="senha"
        label="Senha"
        type="password"
        placeholder="Digite a sua senha"
        register={register("password")}
        error={errors.password}
      />
      <ButtonLogin type="submit">Entrar</ButtonLogin>
      <span>
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </span>
      <ButtonCadastrar type="button">
        <Link to={"/register"}>Cadastrar</Link>
      </ButtonCadastrar>
    </StyledFormLogin>
  );
}
