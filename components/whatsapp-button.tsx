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
      href={whatsappLink("Olá! Gostaria de uma avaliação.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensagem no WhatsApp"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center bg-foreground text-background shadow-2xl transition-all duration-700 ease-out hover:scale-110 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  )
}
