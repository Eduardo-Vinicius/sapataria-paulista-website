"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    title: "Tenis de Luxo",
    description: "Limpeza profunda, restauracao estrutural e acabamento premium.",
    image: "/images/especialidade-tenis-luxo.png",
  },
  {
    title: "Sapatos & Couro",
    description: "Polimento, tingimento e restauracao completa de couro fino.",
    image: "/images/especialidade-sapatos-couro.png",
  },
  {
    title: "Bolsas & Acessorios",
    description: "Cuidado especializado para bolsas e acessorios de grife.",
    image: "/images/especialidade-bolsas-acessorios.png",
  },
  {
    title: "Higienizacao",
    description: "Limpeza profunda que revitaliza sem comprometer a integridade.",
    image: "/images/especialidade-higienizacao.png",
  },
]

export function ServicesPreview() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="reveal mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-[10px] uppercase tracking-ultra-wide text-accent">
            Servicos
          </p>
          <h2 className="max-w-xl font-serif text-3xl text-foreground lg:text-5xl text-balance">
            Especialidades do Atelier
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {"Cada material requer uma abordagem unica. Nossa equipe domina tecnicas especializadas para cada tipo de item."}
          </p>
        </div>

        {/* Cards */}
        <div className="stagger grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/servicos"
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-500 group-hover:from-primary/95" />
              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2 p-6 lg:p-8">
                <h3 className="font-serif text-xl text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-primary-foreground/50 transition-all duration-500 group-hover:text-primary-foreground/70">
                  {service.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  Saiba mais
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="reveal mt-12 flex justify-center">
          <Link
            href="/servicos"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
          >
            <span>Todos os servicos</span>
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
