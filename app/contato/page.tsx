"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Clock, MessageCircle, Instagram, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereco",
    lines: ["Av. Paulista 2001 (sobreloja)", "Bela Vista, Sao Paulo - SP", "CEP 01311-300"],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Segunda a Sexta: 9h - 18h", "Sabado: 9h - 13h", "Domingo: Fechado"],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(11) 99999-9999", "WhatsApp disponivel"],
  },
]

export default function ContatoPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-end bg-primary px-6 pb-16 pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="animate-on-scroll text-[10px] uppercase tracking-[0.4em] text-accent">
            Contato
          </p>
          <h1 className="animate-on-scroll mt-4 font-serif text-4xl text-primary-foreground lg:text-6xl">
            Entre em Contato
          </h1>
          <p className="animate-on-scroll mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/60">
            {"Estamos prontos para atende-lo. Envie suas fotos, agende uma visita ou tire suas duvidas."}
          </p>
        </div>
      </section>

      {/* Contact details + Form */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
            {/* Left - Info */}
            <div className="flex flex-1 flex-col gap-12">
              <div className="stagger-children flex flex-col gap-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border">
                      <info.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                        {info.title}
                      </p>
                      {info.lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm text-muted-foreground"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="animate-on-scroll flex flex-col gap-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Social
                </p>
                <div className="flex gap-3">
                  <Link
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://instagram.com/sapatariapaulista"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Priority CTA */}
              <div className="animate-on-scroll border border-accent/30 bg-card p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Atendimento prioritario
                </p>
                <h3 className="mt-3 font-serif text-xl text-foreground">
                  WhatsApp e o canal mais rapido
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {"Para avaliacao de itens, envie fotos diretamente pelo WhatsApp. Respondemos em minutos durante o horario comercial."}
                </p>
                <Link
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20uma%20avalia%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 bg-accent px-6 py-3 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
                >
                  <span>Abrir WhatsApp</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="flex flex-1 flex-col gap-8">
              <div className="animate-on-scroll">
                <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
                  Formulario
                </p>
                <h2 className="mt-3 font-serif text-2xl text-foreground">
                  Envie uma mensagem
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"Ou, se preferir, entre em contato diretamente pelo WhatsApp."}
                </p>
              </div>

              <form
                className="animate-on-scroll flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Descreva seu item e o tipo de servico desejado..."
                    className="border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90 self-start"
                >
                  <span>Enviar mensagem</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="relative h-[400px] bg-card">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <MapPin className="h-8 w-8 text-accent" />
            <p className="font-serif text-xl text-foreground">
              Av. Paulista 2001
            </p>
            <p className="text-sm text-muted-foreground">
              Sao Paulo, SP
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
