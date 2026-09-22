"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { MapPin, Clock, MessageCircle, Instagram, Phone } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Av. Paulista 2001 (sobreloja)", "Bela Vista, São Paulo - SP", "CEP 01311-300"],
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Segunda a Sexta: 9h - 18h", "Sábado: 9h - 13h", "Domingo: Fechado"],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(11) 99999-9999", "WhatsApp disponível"],
  },
]

export default function ContatoPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden px-6 pb-16 pt-32 lg:px-10">
        <div className="absolute inset-0">
          <Image
            src="/images/atelier-bancada.jpg"
            alt="Atelier Sapataria Paulista"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/45" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-[0.4em] text-accent">
            Contato
          </p>
          <h1 className="animate-on-scroll mt-4 font-serif text-4xl text-white lg:text-6xl">
            Fale com o atelier
          </h1>
          <p className="animate-on-scroll mt-6 max-w-xl text-sm leading-relaxed text-white/55">
            Envie fotos para avaliação, agende visita na Galeria 2001 ou tire
            dúvidas com a equipe de Thiago Landes.
          </p>
        </div>
      </section>

      {/* Contact details + Form */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
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
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="animate-on-scroll relative hidden aspect-[4/5] overflow-hidden lg:block">
                <Image
                  src="/images/thiago-101.jpg"
                  alt="Thiago Landes no atelier"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-0 left-0 p-6 font-serif text-xl text-white">
                  Thiago Landes
                </p>
              </div>

              <div className="animate-on-scroll border border-accent/30 bg-card p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Atendimento prioritario
                </p>
                <h3 className="mt-3 font-serif text-xl text-foreground">
                  WhatsApp é o canal mais rápido
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Para avaliação, envie fotos pelo WhatsApp. Respondemos em
                  minutos no horário comercial.
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
                  Ou fale direto com o atelier pelo WhatsApp.
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
                    placeholder="Descreva seu item e o tipo de serviço desejado..."
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
              São Paulo, SP — Galeria 2001
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
