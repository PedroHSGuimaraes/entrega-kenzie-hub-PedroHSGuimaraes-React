import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { InputPassword } from "../Input/InputPassword";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
  const { createAccount, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const submit = async (formData) => {
    await createAccount(formData);
    console.log(formData);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          type="text"
          {...register("name")}
          error={errors.name}
          disabled={loading}
          placeholder="Digite aqui seu nome"
        />
        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email}
          disabled={loading}
          placeholder="Digite aqui seu email"
        />
        <InputPassword
          label="Senha"
          {...register("password")}
          error={errors.password}
          disabled={loading}
          placeholder="Digite aqui sua senha"
        />
        <InputPassword
          label="Confirme a senha"
          {...register("passwordConfirmation")}
          error={errors.passwordConfirmation}
          disabled={loading}
          placeholder="Digite novamente sua senha"
        />
        <Input
          label="Bio"
          type="text"
          {...register("bio")}
          error={errors.bio}
          disabled={loading}
          placeholder="Fale sobre você"
        />
        <Input
          label="Contato"
          type="tel"
          {...register("contact")}
          error={errors.contact}
          disabled={loading}
          placeholder="Opção de contato"
        />

        <Select
          label="Selecionar módulo"
          {...register("course_module")}
          options={[
            {
              value: "Primeiro Módulo (UX Design)",
              label: "Primerio Módulo (UX Design)",
            },
            {
              value: "Segundo Módulo (Front end Basico)",
              label: "Segundo Módulo (Front end Basico)",
            },
            {
              value: "Terceiro Módulo (Front end Avançado)",
              label: "Terceiro Módulo (Front end Avançado)",
            },
            {
              value: "Quarto Módulo (Back end)",
              label: "Quarto Módulo (Back end)",
            },

            {
              value: "Quinto Módulo (DevOps)",
              label: "Quinto Módulo (DevOps)",
            },
          ]}
          error={errors.course_module}
          disabled={loading}
        />

        <Button
          text={loading ? "Cadastrando..." : "Cadastrar-se"}
          type="submit"
        />
      </form>
    </>
  );
};
