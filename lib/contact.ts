export const WHATSAPP_NUMBER = "5511963794634"
export const PHONE_DISPLAY = "(11) 96379-4634"
export const INSTAGRAM_URL = "https://instagram.com/sapatariapaulista"
export const YOUTUBE_URL: string | null = null

export const ADDRESS = {
  street: "Av. Paulista, 2001 (sobreloja)",
  venue: "Galeria 2001, ao lado do Conjunto Nacional",
  district: "Bela Vista",
  city: "São Paulo",
  state: "SP",
  postalCode: "01311-300",
}

export const OPENING_HOURS = [
  { label: "Segunda a sexta", value: "9h às 18h", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  { label: "Sábado", value: "9h às 13h", days: ["Saturday"], opens: "09:00", closes: "13:00" },
  { label: "Domingo", value: "Fechado", days: [], opens: "", closes: "" },
]

export const HOW_TO_GET_THERE = {
  transit: "Metrô Consolação (Linha 2-Verde), a poucos passos da Galeria 2001.",
  parking: null as string | null,
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
