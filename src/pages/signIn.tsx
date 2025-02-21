import { Button } from "../components/button";
import { Input } from "../components/input";
import z from "zod"
import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Danger } from "../components/danger";
import { Link } from "../components/link";
import { Form } from "../components/form";

const formAuthSignInSchema = z.object({
  email: z.string().email("Por favor digitar o e-mail correto"),
  password: z.string().min(6, "O campo senha tem que ter no minimo 6 digitos")
})

type formAuthSignInType = z.infer<typeof formAuthSignInSchema> 

export function SignIn() {

  const { handleSubmit, register, formState: { errors } } = useForm<formAuthSignInType>({
    resolver: zodResolver(formAuthSignInSchema)
  })

  const handleAuthSignInSubmit = (data: formAuthSignInType) => {
    console.log(data);
  }

  return(
    <Form onSubmit={handleSubmit(handleAuthSignInSubmit)}>
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
      <Button type="submit">
        Entrar
      </Button>
      <Link to="/signup">Criar conta</Link>
    </Form>
  )
}