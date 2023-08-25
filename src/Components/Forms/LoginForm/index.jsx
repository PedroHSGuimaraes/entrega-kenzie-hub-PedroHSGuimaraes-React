import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Button } from "../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { Link } from "react-router-dom";
import { InputPassword } from "../Input/InputPassword";

import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = () => {
  const { loginRequest, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const submit = (formData) => {
    loginRequest(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        type="email"
        {...register("email")}
        placeholder="Digite seu email"
        error={errors.email}
        disabled={loading}
      />
      <InputPassword
        label="Senha"
        {...register("password")}
        placeholder="Digite sua senha"
        error={errors.password}
        disabled={loading}
      />
      <Button text={loading ? "acessando..." : "acessar"} type="submit" />
      <p className={styles.paragrapy}>Ainda não possui uma conta?</p>
      <Link className=" link--page link--page-color" to="/register">
        Cadastre-se
      </Link>
    </form>
  );
};
