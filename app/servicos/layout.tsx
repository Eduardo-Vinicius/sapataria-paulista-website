import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Serviços de restauração de bolsas, sapatos e tênis de luxo",
  description:
    "Higienização, hidratação do couro, pintura, borda italiana, banho de metais, troca de forro e reparos estruturais em bolsas Hermès, Chanel, Louis Vuitton e outras grifes.",
  alternates: { canonical: "/servicos" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
