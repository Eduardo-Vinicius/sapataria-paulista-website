import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato e endereço do atelier na Av. Paulista",
  description:
    "Sapataria Paulista na Galeria 2001, Av. Paulista, 2001, ao lado do Conjunto Nacional. WhatsApp, horários, mapa e como chegar.",
  alternates: { canonical: "/contato" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
