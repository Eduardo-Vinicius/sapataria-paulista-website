"use client"

import Image from "next/image"
import Link from "next/link"
import { CalendarClock, CreditCard } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { whatsappLink } from "@/lib/contact"
import { SERVICES, type Service } from "@/lib/content/services"
import { TERMS } from "@/lib/content/site-facts"

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServiceSection({ service, index }: { service: Service; index: number }) {
  const reversed = index % 2 === 1

  return (
    <article
      id={service.slug}
      className={`animate-on-scroll scroll-mt-28 grid gap-8 border-t border-border/40 pt-12 lg:gap-16 ${
        service.image ? "lg:grid-cols-2 lg:items-center" : ""
      }`}
    >
      {service.image && (
        <div className={`relative aspect-[4/3] w-full overflow-hidden ${reversed ? "lg:order-2" : ""}`}>
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      )}
      <div className={`flex flex-col gap-5 ${service.image ? "" : "lg:max-w-3xl"}`}>
        <span className="text-[10px] tracking-[0.3em] text-accent">{String(index + 1).padStart(2, "0")}</span>
        <h2 className="font-serif text-3xl text-foreground lg:text-4xl">{service.title}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">{service.description}</p>
        <ul className="flex flex-col gap-2">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {detail}
            </li>
          ))}
        </ul>
        <Link
          href={whatsappLink(`Olá! Gostaria de um orçamento de ${service.title.toLowerCase()}. Vou enviar fotos da peça.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 inline-flex items-center gap-2 self-start bg-accent px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <span>Pedir orçamento pelo WhatsApp</span>
          <ArrowIcon />
        </Link>
      </div>
    </article>
  )
}

export default function ServicosPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      <section className="relative flex min-h-[65vh] items-end overflow-hidden px-6 pb-20 pt-36 lg:px-10">
        <div className="absolute inset-0">
          <Image
            src="/images/oficio-tenis.jpg"
            alt="Recostura de tênis na máquina industrial do atelier"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/45" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">Serviços</p>
          <h1 className="animate-on-scroll mt-6 font-serif text-4xl text-white lg:text-7xl">O que fazemos</h1>
          <p className="animate-on-scroll mt-6 max-w-lg text-sm leading-relaxed text-white/60">
            Bolsas, sapatos, tênis e malas restaurados por Thiago Landes e pela equipe da Sapataria Paulista.
          </p>
        </div>
      </section>

      <section className="border-b border-border/20 px-6 py-6 lg:px-10">
        <nav aria-label="Serviços" className="mx-auto flex max-w-[1400px] flex-wrap gap-2">
          {SERVICES.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="border border-border px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              {service.title}
            </a>
          ))}
        </nav>
      </section>

      <section className="px-6 pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2">
          <div className="flex gap-4 border border-border/50 bg-card/40 p-6">
            <CalendarClock className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Prazo médio</p>
              <p className="mt-2 font-serif text-xl text-foreground">{TERMS.turnaround}</p>
              <p className="mt-1 text-xs text-muted-foreground">O prazo exato de cada peça vem no orçamento.</p>
            </div>
          </div>
          <div className="flex gap-4 border border-border/50 bg-card/40 p-6">
            <CreditCard className="h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Pagamento</p>
              <p className="mt-2 font-serif text-xl text-foreground">40% de entrada</p>
              <p className="mt-1 text-xs text-muted-foreground">{TERMS.payment}.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          {SERVICES.map((service, index) => (
            <ServiceSection key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
        <div className="absolute inset-0">
          <Image src="/images/atelier-bancada.jpg" alt="Bancada do atelier" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/85" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center gap-8 text-center">
          <p className="text-[10px] uppercase tracking-ultra-wide text-accent">Próximo passo</p>
          <h2 className="max-w-2xl font-serif text-3xl text-white lg:text-5xl">Envie fotos. Receba uma avaliação.</h2>
          <Link
            href={whatsappLink("Olá! Gostaria de enviar fotos da minha peça para avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <span>Enviar fotos pelo WhatsApp</span>
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  )
}
