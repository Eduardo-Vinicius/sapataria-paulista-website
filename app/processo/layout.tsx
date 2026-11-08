import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Como funciona a restauração de bolsa de luxo",
  description:
    "Envie fotos pelo WhatsApp, receba orçamento e prazo, aprove e retire a peça restaurada. Prazo médio de 45 a 60 dias.",
  alternates: { canonical: "/processo" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
