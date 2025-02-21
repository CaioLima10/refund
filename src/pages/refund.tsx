import { Form } from "../components/form";
import { Input } from "../components/input";

export function Refund() {
  return(
    <Form>
      <header>
        <h1>Solicitação de reembolso</h1>
        <p>Dados da despesas para solicitar reembolso.</p>

        <Input legend="Nome da Solicitação"/>
      </header>
    </Form>
  )
}