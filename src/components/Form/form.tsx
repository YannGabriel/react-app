

import { useForm } from "react-hook-form"
import { Button } from "../Button/button"

type FormValues = {
  username: string;
  password: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
      <input 
      id="userName"
      type="text"
      {
        ...register("username", {
          required: "O nome de usuário é obrigatório.", 
          maxLength: {
            value: 20,
            message: "O usuário pode ter no máximo 20 caractéres!"
          }
        })
      }
      />
        {errors.username && (
        <p role="alert" id="userAlert">{errors.username.message}</p>
      )}

      <input 
      id="password"
      type="password"
      {
        ...register("password" , {
          required: "Senha necessária para cadastro!",
          minLength: {
            value: 8,
            message: "A senha deve conter no mínimo 8 dígitos!"
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
            message:
              "A senha deve possuir: Uma letra maiúscula, uma letra minuscula, um caracter especial e um número!",
          },
        })
      }
      />
            {errors.password && (
        <p role="alert" id="passAlert">{errors.password.message}</p>
      )}

      <Button 
      text="Enviar"
      />
    </form>
    </>
  )
}