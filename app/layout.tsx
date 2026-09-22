import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Sapataria Paulista | Thiago Landes — Restauração de Luxo",
  description:
    "Atelier de Thiago Landes na Av. Paulista. Restauração premium de tênis, sapatos e bolsas de grife. Da engraxate na Paulista ao padrão maison.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased grain-overlay`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
