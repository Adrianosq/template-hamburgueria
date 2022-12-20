import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm, ValidationMode } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../../../components/Input";
import { UserContext } from "../../../contexts/UserContext";
import { ButtonCadastrar } from "../../../styles/buttons";
import { registerPageSchema } from "./schemaRegister";
import { StyledFormRegister } from "./styled";

export interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  mode?: keyof ValidationMode | undefined;
}

export function FormRegister() {
  const { userRegister } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    mode: "onBlur",
    resolver: yupResolver(registerPageSchema),
  });

  const onSubmit: SubmitHandler<iRegisterData> = ({confirmPassword, mode, ...rest}) => {
    userRegister(rest)
  };
  return (
    <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
      <div className="headerRegister">
        <h2>
          Cadastro
        </h2>
        <Link to={"/login"}>Retornar para o login</Link>
      </div>
       <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Digite o seu nome"
        register={register("name")}
        error={errors.name}
      />
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
      <Input
        id="senhaConfirmed"
        label="Confirmar senha"
        type="password"
        placeholder="Confirmar senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <ButtonCadastrar type="submit">Cadastrar</ButtonCadastrar>
    </StyledFormRegister>
  );
}
