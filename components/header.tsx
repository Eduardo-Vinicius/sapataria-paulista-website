"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Instagram, Menu, X, Youtube } from "lucide-react"
import { whatsappLink, INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/contact"
import { WHATSAPP_MESSAGES } from "@/lib/content/whatsapp-messages"

const socialLinks = [
  { href: INSTAGRAM_URL, label: "Instagram", icon: Instagram },
  ...(YOUTUBE_URL ? [{ href: YOUTUBE_URL, label: "YouTube", icon: Youtube }] : []),
]

const navLinks = [
  { href: "/servicos", label: "Serviços" },
  { href: "/galeria", label: "Galeria" },
  { href: "/processo", label: "Processo" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-background/92 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/40 shadow-lg"
            : "bg-background/65 backdrop-blur-xl border-b border-white/10"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <Link href="/" className="group flex items-baseline gap-3" onClick={() => setMenuOpen(false)}>
            <span className="font-serif text-xl tracking-tight text-accent lg:text-2xl">
              Sapataria
            </span>
            <span className="hidden text-[9px] uppercase tracking-ultra-wide text-white sm:inline">
              Paulista
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex" role="navigation" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[11px] uppercase tracking-[0.18em] text-white/85 transition-colors duration-500 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/70 transition-colors hover:text-white"
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
            <Link
              href={whatsappLink(WHATSAPP_MESSAGES.evaluation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-accent/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>WhatsApp</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="relative z-50 text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-700 ease-out lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-8"
          role="navigation"
          aria-label="Navegação mobile"
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-2xl text-foreground"
          >
            Home
          </Link>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-2xl text-foreground transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${(i + 1) * 80}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={whatsappLink(WHATSAPP_MESSAGES.evaluation)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>WhatsApp</span>
          </Link>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onClick={() => setMenuOpen(false)}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
