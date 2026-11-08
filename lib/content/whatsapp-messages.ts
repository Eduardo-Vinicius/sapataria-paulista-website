const GREETING = "Olá, Sapataria Paulista! Vim pelo site."

const PIECE_FIELDS = ["• Peça (bolsa, sapato, tênis, mala):", "• Marca e modelo:"]

const lines = (...parts: (string | false | null | undefined)[]) =>
  parts.filter((part): part is string => typeof part === "string").join("\n")

export const WHATSAPP_MESSAGES = {
  general: lines(GREETING, "Gostaria de falar com o atelier."),

  evaluation: lines(
    GREETING,
    "Gostaria de uma avaliação para restaurar uma peça.",
    "",
    ...PIECE_FIELDS,
    "• O que precisa ser feito:",
    "",
    "Vou enviar as fotos logo em seguida.",
  ),

  visit: lines(
    GREETING,
    "Gostaria de agendar uma visita ao atelier na Galeria 2001.",
    "",
    "• Melhor dia e horário para mim:",
    "• Peça que vou levar:",
  ),
}

export function serviceQuoteMessage(serviceTitle: string) {
  return lines(
    GREETING,
    `Gostaria de um orçamento de *${serviceTitle}*.`,
    "",
    ...PIECE_FIELDS,
    "",
    "Vou enviar as fotos logo em seguida.",
  )
}

export function galleryCaseMessage(caseTitle: string, service: string) {
  return lines(
    GREETING,
    `Vi na galeria o trabalho *${caseTitle}* (${service.toLowerCase()}) e tenho uma peça parecida.`,
    "",
    ...PIECE_FIELDS,
    "",
    "Vou enviar as fotos para avaliação.",
  )
}

export function contactFormMessage(form: { name: string; email: string; phone: string; message: string }) {
  return lines(
    GREETING,
    "",
    `*Nome:* ${form.name}`,
    form.email && `*E-mail:* ${form.email}`,
    form.phone && `*Telefone:* ${form.phone}`,
    "",
    "*Mensagem:*",
    form.message,
  )
}
