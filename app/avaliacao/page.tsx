"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Camera, MessageCircle, Clock, CheckCircle } from "lucide-react"

const pricingTiers = [
  {
    service: "Higienização Premium",
    startingFrom: "R$ 120",
    description: "Limpeza profunda, desodorização e proteção.",
    includes: [
      "Limpeza profunda completa",
      "Desodorização antibacteriana",
      "Impermeabilização básica",
    ],
  },
  {
    service: "Restauração Simples",
    startingFrom: "R$ 200",
    description: "Reparos pontuais, polimento e acabamento.",
    includes: [
      "Reparo de desgaste localizado",
      "Polimento e acabamento",
      "Proteção final",
    ],
  },
  {
    service: "Restauração Completa",
    startingFrom: "R$ 350",
    description: "Restauração integral com múltiplas etapas.",
    includes: [
      "Diagnóstico completo",
      "Restauração estrutural e estética",
      "Tingimento e acabamento premium",
      "Controle de qualidade rigoroso",
    ],
  },
  {
    service: "Troca de Solado",
    startingFrom: "R$ 280",
    description: "Substituição profissional com materiais premium.",
    includes: [
      "Remoção e preparação",
      "Solado de alta qualidade",
      "Colagem industrial",
      "Acabamento impecável",
    ],
  },
  {
    service: "Bolsas & Acessórios",
    startingFrom: "R$ 180",
    description: "Cuidados especializados para couro fino.",
    includes: [
      "Hidratação de couro",
      "Restauração de cor",
      "Reparo de ferragens",
    ],
  },
  {
    service: "Customização",
    startingFrom: "Sob consulta",
    description: "Projetos especiais e personalizações sob medida.",
    includes: [
      "Tingimento personalizado",
      "Mudança de cor",
      "Efeitos especiais",
      "Projeto sob medida",
    ],
  },
]

const uploadSteps = [
  {
    icon: Camera,
    title: "Fotografe seu item",
    description: "Tire fotos claras de todos os ângulos, incluindo detalhes do dano.",
  },
  {
    icon: MessageCircle,
    title: "Envie pelo WhatsApp",
    description: "Mande as fotos com uma breve descrição do que precisa.",
  },
  {
    icon: Clock,
    title: "Aguarde o retorno",
    description: "Respondemos em minutos com diagnóstico e orçamento.",
  },
  {
    icon: CheckCircle,
    title: "Aprove e envie",
    description: "Após aprovar, envie ou traga o item ao atelier.",
  },
]

export default function AvaliacaoPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-end bg-primary px-6 pb-16 pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="animate-on-scroll text-[10px] uppercase tracking-[0.4em] text-accent">
            Avaliação
          </p>
          <h1 className="animate-on-scroll mt-4 font-serif text-4xl text-primary-foreground lg:text-6xl">
            Avaliação & Preços
          </h1>
          <p className="animate-on-scroll mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/60">
            {"Cada item é único. Os valores variam conforme o estado e a complexidade do serviço. Envie fotos para receber uma avaliação personalizada."}
          </p>
        </div>
      </section>

      {/* How to send */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="animate-on-scroll mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
              Como enviar
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl">
              Envie Fotos Para Avaliação
            </h2>
          </div>
          <div className="stagger-children grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {uploadSteps.map((step, i) => (
              <div
                key={step.title}
                className="group flex flex-col gap-4 border border-border/50 p-8 transition-all duration-500 hover:border-accent/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] text-accent">
                    {`0${i + 1}`}
                  </span>
                  <step.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20enviar%20fotos%20para%20avalia%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
            >
              <span>Enviar fotos via WhatsApp</span>
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
      </section>

      {/* Pricing */}
      <section className="bg-card px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="animate-on-scroll mb-16">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
              Valores
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl">
              Tabela de Referência
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {"Valores iniciais de referência. O orçamento final depende da análise do item. Todos os serviços incluem controle de qualidade e garantia."}
            </p>
          </div>
          <div className="stagger-children grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.service}
                className="group flex flex-col gap-4 border border-border/50 p-8 transition-all duration-500 hover:border-accent/30"
              >
                <h3 className="font-serif text-xl text-foreground">
                  {tier.service}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <p className="font-serif text-2xl text-accent">
                  <span className="text-xs text-muted-foreground font-sans">
                    a partir de{" "}
                  </span>
                  {tier.startingFrom}
                </p>
                <ul className="flex flex-col gap-2 border-t border-border/50 pt-4">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-accent"
                >
                  Solicitar orçamento
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
