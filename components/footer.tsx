import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-xl text-foreground">
                Sapataria
              </span>
              <span className="text-[9px] uppercase tracking-ultra-wide text-muted-foreground">
                Paulista
              </span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              {"Atelier premium de restauracao. Tradicao e qualidade desde 2002."}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-[9px] uppercase tracking-ultra-wide text-muted-foreground">
              Navegacao
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Links do rodape">
              {[
                { href: "/", label: "Home" },
                { href: "/servicos", label: "Servicos" },
                { href: "/galeria", label: "Galeria" },
                { href: "/processo", label: "Processo" },
                { href: "/sobre", label: "Sobre" },
                { href: "/avaliacao", label: "Avaliacao" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-[9px] uppercase tracking-ultra-wide text-muted-foreground">
              Contato
            </p>
            <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <p>{"Av. Paulista 2001 (sobreloja)"}</p>
              <p>{"Sao Paulo, SP"}</p>
              <p className="mt-2">{"Seg - Sex: 9h - 18h"}</p>
              <p>{"Sab: 9h - 13h"}</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="text-[9px] uppercase tracking-ultra-wide text-muted-foreground">
              Social
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-border/50 text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/sapatariapaulista"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-border/50 text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 md:flex-row">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/60">
            {"Sapataria Paulista. Todos os direitos reservados."}
          </p>
          <Link
            href="/privacidade"
            className="text-[10px] tracking-[0.15em] text-muted-foreground/60 transition-colors hover:text-muted-foreground"
          >
            Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
