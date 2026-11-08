import Link from "next/link"
import { Instagram, MessageCircle, Youtube } from "lucide-react"
import { whatsappLink, INSTAGRAM_URL, YOUTUBE_URL, ADDRESS, OPENING_HOURS, PHONE_DISPLAY } from "@/lib/contact"
import { HASHTAG } from "@/lib/content/site-facts"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/galeria", label: "Galeria" },
  { href: "/processo", label: "Processo" },
  { href: "/sobre", label: "Sobre" },
  { href: "/avaliacao", label: "Avaliação" },
  { href: "/contato", label: "Contato" },
]

const socialClass =
  "flex h-10 w-10 items-center justify-center border border-border/50 text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground"

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5 lg:col-span-1">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-xl text-foreground">Sapataria</span>
              <span className="text-[9px] uppercase tracking-ultra-wide text-muted-foreground">Paulista</span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              Atelier de Thiago Landes. Restauração de luxo na Av. Paulista: bolsas, sapatos e tênis de grife.
            </p>
            <p className="font-serif text-base italic text-accent">{HASHTAG}</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[9px] uppercase tracking-ultra-wide text-muted-foreground">Navegação</p>
            <nav className="flex flex-col gap-2.5" aria-label="Links do rodapé">
              {navLinks.map((link) => (
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

          <div className="flex flex-col gap-4">
            <p className="text-[9px] uppercase tracking-ultra-wide text-muted-foreground">Contato</p>
            <div className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <p>{ADDRESS.street}</p>
              <p>{ADDRESS.venue}</p>
              <p>{`${ADDRESS.city}, ${ADDRESS.state} · CEP ${ADDRESS.postalCode}`}</p>
              <p className="mt-2">{PHONE_DISPLAY}</p>
              {OPENING_HOURS.filter((hours) => hours.opens).map((hours) => (
                <p key={hours.label}>{`${hours.label}: ${hours.value}`}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[9px] uppercase tracking-ultra-wide text-muted-foreground">Social</p>
            <div className="flex items-center gap-3">
              <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Link>
              {YOUTUBE_URL && (
                <Link href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 md:flex-row">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/60">
            Sapataria Paulista. Todos os direitos reservados.
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
