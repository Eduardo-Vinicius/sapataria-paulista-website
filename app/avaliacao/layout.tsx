import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Avaliação de bolsa e sapato de luxo pelo WhatsApp",
  description:
    "Envie fotos da sua peça pelo WhatsApp e receba orçamento e prazo para restauração de bolsas, sapatos e tênis de grife.",
  alternates: { canonical: "/avaliacao" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
