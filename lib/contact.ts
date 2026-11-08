export const WHATSAPP_NUMBER = "5511999999999"
export const PHONE_DISPLAY = "(11) 99999-9999"
export const INSTAGRAM_URL = "https://instagram.com/sapatariapaulista"

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
