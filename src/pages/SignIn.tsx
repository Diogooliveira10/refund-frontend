import { useActionState } from "react"
import { z, ZodError } from "zod"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

const signInSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "A senha deve ter no mínimo 6 dígitos" }),
})

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null)

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      })

      console.log(data)
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return { message: error.issues[0].message }
      }

      return {
        message:
          "Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.",
      }
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="x*Wk/;a"
      />

      <p className="text-red-600 text-sm text-center my-4">{state?.message}</p>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  )
}
