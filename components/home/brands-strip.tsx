"use client"

import { Fragment } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BRANDS } from "@/lib/content/brands"

export function BrandsStrip() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="border-y border-border/30 bg-card/40 px-6 py-14 lg:px-10 lg:py-20">
      <div className="reveal mx-auto flex max-w-[1400px] flex-col items-center gap-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.45em] text-accent">Marcas que passam pela nossa bancada</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-10">
          {BRANDS.map((brand, index) => (
            <Fragment key={brand}>
              {index > 0 && (
                <li aria-hidden className="h-1 w-1 rounded-full bg-accent/50" />
              )}
              <li className="font-serif text-2xl text-foreground/90 md:text-3xl lg:text-4xl">{brand}</li>
            </Fragment>
          ))}
        </ul>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          Bolsas, sapatos e tênis de grife restaurados com técnica, materiais importados e cuidado em cada detalhe.
        </p>
      </div>
    </section>
  )
}
