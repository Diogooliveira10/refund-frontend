import leftSvg from "../assets/left.svg"
import rightSvg from "../assets/right.svg"

import { Button } from "./Button"

type Props = {
  current: number
  total: number
  onNext?: () => void
  onPrev?: () => void
}

export function Pagination({ current, total, onNext, onPrev }: Props) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <Button variant="iconSmall" onClick={onPrev} disabled={current === 1}>
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>
      <span className="text-sm text-gray-200">
        {current}/{total}
      </span>
      <Button variant="iconSmall" onClick={onNext} disabled={current === total}>
        <img src={rightSvg} alt="Ícone de avançar" />
      </Button>
    </div>
  )
}
