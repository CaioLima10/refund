import { useState } from "react";
import { Input } from "../components/input";
import { Select } from "../components/select";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

export function Refund() {
  const [selectCategory, setSelectCategory] = useState("");

  return (
    <form className="mx-auto mt-10 flex w-full flex-col gap-6 rounded-xl bg-gray-500 p-10 lg:w-[80%]">
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="mb-4 mt-2 text-sm text-gray-200">
          Dados da despesas para solicitar reembolso.
        </p>
      </header>

      <Input legend="Nome da Solicitação" />
      <div className="flex gap-4">
        <Select
          legend="Categoria"
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input legend="Valor" />
      </div>
    </form>
  );
}
