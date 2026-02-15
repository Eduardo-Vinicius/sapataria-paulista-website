"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ComparisonSlider } from "@/components/comparison-slider"

const cases = [
  {
    before: "/images/antes-sneaker.png",
    after: "/images/depois-sneaker.png",
    title: "Tenis Premium",
    description: "Restauracao completa com limpeza profunda e acabamento.",
  },
  {
    before: "/images/antes-bolsa.png",
    after: "/images/depois-bolsa.png",
    title: "Bolsa de Couro",
    description: "Revitalizacao de couro e restauracao de cor original.",
  },
  {
    before: "/images/antes-sapato.png",
    after: "/images/depois-sapato.png",
    title: "Sapato Social",
    description: "Polimento e restauracao estrutural completa.",
  },
]

export function BeforeAfterPreview() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="bg-primary px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="reveal mb-20 flex flex-col items-center gap-4 text-center">
          <p className="text-[10px] uppercase tracking-ultra-wide text-accent">
            Resultados
          </p>
          <h2 className="max-w-lg font-serif text-3xl text-primary-foreground lg:text-5xl text-balance">
            Antes & Depois
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/40">
            {"Deslize para ver a transformacao. Cada projeto e unico e realizado com precisao artesanal."}
          </p>
        </div>

        {/* Grid */}
        <div className="stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col overflow-hidden bg-secondary/5 transition-all duration-500"
            >
              <ComparisonSlider
                beforeImage={item.before}
                afterImage={item.after}
                beforeAlt={`${item.title} antes da restauracao`}
                afterAlt={`${item.title} depois da restauracao`}
              />
              <div className="flex flex-col gap-1.5 px-6 py-5">
                <h3 className="font-serif text-lg text-primary-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-primary-foreground/40">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA
        <div className="reveal mt-16 flex justify-center">
          <Link
            href="/galeria"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50 transition-colors duration-500 hover:text-primary-foreground"
          >
            <span>Ver galeria completa</span>
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
        </div> */}
      </div>
    </section>
  )
}
