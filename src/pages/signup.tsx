import { Button } from "../components/button";
import { Input } from "../components/input";
import z from "zod"
import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Danger } from "../components/danger";
import { Link } from "../components/link";
import { Form } from "../components/form";

const formAuthSignInSchema = z.object({
  name: z.string().min(3, "Por favor digitar o nome correto"),
  email: z.string().email("Por favor digitar o e-mail correto"),
  password: z.string().min(6, "O campo senha tem que ter no minimo 6 digitos"),
  confirmPassword: z.string().min(6, "O campo senha tem que ter no minimo 6 digitos"),
})

type formAuthSignInType = z.infer<typeof formAuthSignInSchema> 

export function SignUp() {

  const { handleSubmit, register, formState: { errors } } = useForm<formAuthSignInType>({
    resolver: zodResolver(formAuthSignInSchema)
  })

  const handleAuthSignInSubmit = (data: formAuthSignInType) => {
    console.log(data);
  }

  return(
    <Form onSubmit={handleSubmit(handleAuthSignInSubmit)}>
      <Input 
        legend="Nome"
        type="text"
        placeholder="Digite seu nome"
        {...register("name")}
      />
      <Danger>{errors.name?.message}</Danger>
      <Input 
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        {...register("email")}
      />
      <Danger>{errors.email?.message}</Danger>
      <Input 
        legend="Senha"
        type="password"
        placeholder="123456"
        {...register("password")}
      />
      <Danger>{errors.password?.message}</Danger>
      <Input 
        legend="Confirmar Senha"
        type="password"
        placeholder="123456"
        {...register("confirmPassword")}
      />
      <Danger>{errors.confirmPassword?.message}</Danger>
      <Button type="submit">
        Cadatrar
      </Button>
      <Link to="/">Já tenho uma conta</Link>
    </Form>
  )
}