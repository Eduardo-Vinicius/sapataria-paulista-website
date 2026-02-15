"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/servicos", label: "Servicos" },
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
          <nav className="hidden items-center gap-10 lg:flex" role="navigation" aria-label="Navegacao principal">
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
          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-accent/20 lg:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>WhatsApp</span>
          </Link>

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
          aria-label="Navegacao mobile"
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
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>WhatsApp</span>
          </Link>
        </nav>
      </div>
    </>
  )
}
