"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect, useCallback } from "react"

const testimonials = [
  {
    text: "Achei que meu tenis estava perdido. Voltou melhor do que quando comprei.",
    name: "Ricardo M.",
    item: "Air Jordan 1 Retro High OG",
  },
  {
    text: "Profissionalismo em cada detalhe. Minha bolsa Gucci ficou perfeita.",
    name: "Fernanda L.",
    item: "Bolsa Gucci Marmont",
  },
  {
    text: "O acabamento e a atencao ao detalhe sao de outro nivel.",
    name: "Andre S.",
    item: "Sapatos Ferragamo",
  },
  {
    text: "Transparencia e qualidade que inspiram confianca.",
    name: "Camila R.",
    item: "Tenis Balenciaga Triple S",
  },
]

export function Testimonials() {
  const ref = useScrollAnimation()
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 400)
  }, [isTransitioning])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <section ref={ref} className="bg-card px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal flex flex-col items-center gap-16 text-center">
          <p className="text-[10px] uppercase tracking-ultra-wide text-accent">
            Depoimentos
          </p>

          {/* Quote */}
          <div className="relative mx-auto min-h-[180px] max-w-3xl flex flex-col items-center justify-center gap-8">
            <blockquote
              className={`font-serif text-2xl leading-relaxed text-foreground transition-all duration-500 md:text-3xl lg:text-4xl ${
                isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              {`"${testimonials[current].text}"`}
            </blockquote>
            <div
              className={`flex flex-col items-center gap-1 transition-all duration-500 delay-100 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="text-xs font-medium text-foreground">
                {testimonials[current].name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {testimonials[current].item}
              </span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 transition-all duration-500 ${
                  i === current
                    ? "w-8 bg-accent"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
