import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a Sapataria Paulista trata os dados enviados pelo site e pelo WhatsApp.",
  alternates: { canonical: "/privacidade" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
