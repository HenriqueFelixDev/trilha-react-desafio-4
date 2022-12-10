import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginContainer, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { Button, Input } from "../../components";
import { loginValidationSchema } from "../../validations/LoginValidation";

export const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginValidationSchema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <LoginContainer>
      <Title>Login</Title>
      
      <Input
        name="email"
        placeholder="Email"
        control={control}
        errorMessage={errors?.email?.message}
      />
      
      <Input
        name="password"
        type="password"
        placeholder="Senha"
        control={control}
        errorMessage={errors?.password?.message}
      />
      
      <Button disabled={!isValid}>
        Entrar
      </Button>
    </LoginContainer>
  );
};