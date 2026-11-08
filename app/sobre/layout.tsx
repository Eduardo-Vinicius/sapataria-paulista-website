import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thiago Landes: de engraxate na Paulista ao atelier de luxo",
  description:
    "A trajetória de Thiago Landes, fundador da Sapataria Paulista: engraxate aos 13 anos, formação em Milão e atelier na Galeria 2001.",
  alternates: { canonical: "/sobre" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
