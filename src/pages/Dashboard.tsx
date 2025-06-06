import React, { useState } from "react"

import seachSvg from "../assets/search.svg"
import { CATEGORIES } from "../utils/categories"
import { formatCurrency } from "../utils/formatCurrency"

import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Pagination } from "../components/Pagination"
import { RefundItem } from "../components/RefundItem"

const REFUND_EXAMPLE = {
  id: "1",
  name: "João da Silva",
  category: "Transporte",
  amount: formatCurrency(150.5),
  categoryImg: CATEGORIES["transport"].icon,
}

export function Dashboard() {
  const [name, setName] = useState("")
  const [page, setPage] = useState(1)
  const [totalOfPages, setTotalOfPages] = useState(10)

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault()

    console.log("Fetching refunds for:", name)
  }

  function handlePageChange(action: "next" | "prev") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPages) {
        return prevPage + 1
      }

      if (action === "prev" && prevPage > 1) {
        return prevPage - 1
      }

      return prevPage
    })
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-3 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={seachSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={REFUND_EXAMPLE} />
      </div>

      <Pagination
        current={page}
        total={totalOfPages}
        onNext={() => handlePageChange("next")}
        onPrev={() => handlePageChange("prev")}
      />
    </div>
  )
}
