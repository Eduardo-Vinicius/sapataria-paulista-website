"use client"

import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ComparisonSlider } from "@/components/comparison-slider"
import { CASES } from "@/lib/content/cases"

export function BeforeAfterPreview() {
  const ref = useScrollAnimation()
  const cases = CASES.slice(0, 3)

  if (cases.length === 0) return null

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-16 flex flex-col items-center gap-4 text-center lg:mb-20">
          <p className="text-[10px] uppercase tracking-ultra-wide text-accent">Resultados</p>
          <h2 className="max-w-lg font-serif text-3xl text-foreground lg:text-5xl text-balance">Antes & Depois</h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Deslize para ver a transformação de cada peça.
          </p>
        </div>

        <div className="stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <div key={item.before} className="flex flex-col overflow-hidden border border-border/40 bg-card/40">
              <ComparisonSlider
                beforeImage={item.before}
                afterImage={item.after}
                beforeAlt={`${item.title} antes: ${item.service}`}
                afterAlt={`${item.title} depois: ${item.service}`}
              />
              <div className="flex flex-col gap-1.5 px-6 py-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{item.category}</span>
                <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{item.service}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <Link
            href="/galeria"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
          >
            <span>Ver galeria completa</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
