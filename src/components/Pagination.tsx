import leftSvg from "../assets/left.svg"
import rightSvg from "../assets/right.svg"

import { Button } from "./Button"

type Props = {
  current: number
  total: number
}

export function Pagination({ current, total }: Props) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <Button variant="iconSmall">
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>
      <span className="text-sm text-gray-200">
        {current}/{total}
      </span>
      <Button variant="iconSmall">
        <img src={rightSvg} alt="Ícone de avançar" />
      </Button>
    </div>
  )
}
