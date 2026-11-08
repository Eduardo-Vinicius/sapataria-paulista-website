"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { whatsappLink } from "@/lib/contact"

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href={whatsappLink("Olá! Gostaria de enviar fotos da minha peça para avaliação.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensagem no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl transition-all duration-700 ease-out hover:scale-110 lg:bottom-8 lg:right-8 lg:h-12 lg:w-12 ${
        visible
          ? "translate-y-0 opacity-100"
          : "max-lg:translate-y-0 max-lg:opacity-100 lg:pointer-events-none lg:translate-y-6 lg:opacity-0"
      }`}
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  )
}
