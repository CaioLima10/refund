import { Link } from "../components/link";

export function NotFound() {
  return(
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-1">Op's! Essa pagina não foi encontrada. 😥</h1>
      <Link to="/">Voltar para o inicio.</Link>
    </div>
  )
}