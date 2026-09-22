"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    title: "Tênis de Luxo",
    description: "Limpeza profunda, restauração estrutural e acabamento de coleção.",
    image: "/images/ofício-tênis.jpg",
  },
  {
    title: "Sapatos & Couro",
    description: "Polimento, tingimento e revitalização de couro fino.",
    image: "/images/ofício-sapato.jpg",
  },
  {
    title: "Bolsas & Acessórios",
    description: "Cuidado especializado para bolsas e peças de grife.",
    image: "/images/ofício-lv-interior.jpg",
  },
  {
    title: "Higienização",
    description: "Limpeza que restaura a pelezinha e a nobreza do material.",
    image: "/images/ofício-lv-limpeza.jpg",
  },
]

export function ServicesPreview() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-16 flex flex-col items-start gap-4 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-ultra-wide text-accent">Serviços</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl text-balance">
              Especialidades do Atelier
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Cada material pede uma técnica. Thiago e a equipe dominam tênis,
            sapatos, bolsas e acessórios de grife — do diagnóstico ao acabamento.
          </p>
        </div>

        <div className="stagger grid gap-3 md:grid-cols-2 lg:grid-cols-4">
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
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col gap-2 p-6 lg:p-7">
                <h3 className="font-serif text-xl text-white lg:text-2xl">{service.title}</h3>
                <p className="text-xs leading-relaxed text-white/55 transition-colors duration-500 group-hover:text-white/75">
                  {service.description}
                </p>
                <span className="mt-2 inline-flex translate-y-2 items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Saiba mais
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
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
      </div>
    </section>
  )
}
