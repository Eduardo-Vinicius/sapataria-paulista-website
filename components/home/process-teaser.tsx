"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: "01",
    title: "Envie fotos",
    description:
      "Envie imagens pelo WhatsApp para uma avaliacao rapida e precisa.",
  },
  {
    number: "02",
    title: "Diagnostico",
    description:
      "Analisamos materiais, condicao e definimos o plano ideal.",
  },
  {
    number: "03",
    title: "Execucao",
    description:
      "Restauracao artesanal com tecnicas premium e atencao a cada detalhe.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Controle de qualidade rigoroso. Seu item, como novo.",
  },
]

export function ProcessTeaser() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="reveal mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-[10px] uppercase tracking-ultra-wide text-accent">
            Processo
          </p>
          <h2 className="max-w-lg font-serif text-3xl text-foreground lg:text-5xl text-balance">
            Simples. Transparente.
          </h2>
        </div>

        {/* Timeline */}
        <div className="stagger mx-auto grid max-w-4xl gap-0 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative flex flex-col items-center gap-6 px-6 py-8 text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-[52px] hidden h-px w-full bg-border/50 md:block" style={{ left: '50%' }} />
              )}
              {/* Number circle */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center border border-border bg-background text-[11px] tracking-[0.2em] text-muted-foreground transition-all duration-500 group-hover:border-accent group-hover:text-accent">
                {step.number}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-16 flex justify-center">
          <Link
            href="/processo"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
          >
            <span>Conhecer o processo completo</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1"
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
    </section>
  )
}
