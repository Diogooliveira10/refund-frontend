import foodSvg from "../assets/food.svg"
import othersSvg from "../assets/others.svg"
import servicesSvg from "../assets/services.svg"
import transportSvg from "../assets/transport.svg"
import accommodationSvg from "../assets/accommodation.svg"

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg,
  },
  transport: {
    name: "Transporte",
    icon: transportSvg,
  },
  accommodation: {
    name: "Hospedagem",
    icon: accommodationSvg,
  },
  services: {
    name: "Serviços",
    icon: servicesSvg,
  },
  others: {
    name: "Outros",
    icon: othersSvg,
  },
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>
