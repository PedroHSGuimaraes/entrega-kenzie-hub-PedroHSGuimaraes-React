import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z
      .string()
      .nonempty("O email é obrigatório")
      .email("O email é inválido"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .regex(/[A-Z]+/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]+/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/[0-9]+/, "A senha deve conter pelo menos um número")
      .min(8, "A senha deve conter pelo menos 8 caracteres"),

    passwordConfirmation: z
      .string()
      .nonempty("A confirmação de senha é obrigatória"),

    bio: z.string().nonempty("A bio é obrigatória"),
    contact: z
      .string()
      .nonempty("O contato é obrigatório")
      .regex(/^\+?[1-9]\d{1,14}$/, "Digite um telefone válido"),

    course_module: z.string().nonempty("O módulo é obrigatório"),
  })

  .refine(
    ({ password, passwordConfirmation }) => {
      return password === passwordConfirmation;
    },
    {
      message: "As senhas não coincidem",
      path: ["passwordConfirmation"],
    }
  );
