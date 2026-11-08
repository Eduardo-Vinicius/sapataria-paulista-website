import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StructuredData } from "@/components/structured-data"
import { Analytics } from "@/components/analytics"
import { FACTS, SITE_URL } from "@/lib/content/site-facts"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Sapataria Paulista | Restauração de bolsas, sapatos e tênis de luxo",
    template: "%s | Sapataria Paulista",
  },
  description: `Atelier de Thiago Landes na Av. Paulista. Restauração de bolsas Hermès, Chanel e Louis Vuitton, sapatos e tênis de grife, com mais de ${FACTS.yearsOfCraft} anos de ofício.`,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sapataria Paulista | Restauração de Luxo",
    description:
      "Atelier de Thiago Landes na Av. Paulista. Restauração de bolsas, sapatos e tênis de grife.",
    url: SITE_URL,
    siteName: "Sapataria Paulista",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/og-sapataria-paulista.jpg", width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
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
        <StructuredData />
        <Analytics />
      </body>
    </html>
  )
}
