import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeria: antes e depois de bolsas e sapatos de grife",
  description:
    "Antes e depois e bastidores do atelier: restauração de bolsas Chanel e Louis Vuitton, sapatos Ferragamo e tênis de coleção.",
  alternates: { canonical: "/galeria" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
