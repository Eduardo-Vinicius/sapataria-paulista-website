"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TIMELINE } from "@/lib/content/timeline"

export function Timeline() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="trajetoria" className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="animate-on-scroll flex flex-col gap-6 lg:sticky lg:top-28">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Trajetória</p>
          <h2 className="font-serif text-3xl text-foreground lg:text-5xl">Engraxate. Artesão. Referência.</h2>
          <div className="relative hidden aspect-[4/5] w-full max-w-[440px] overflow-hidden lg:block">
            <Image
              src="/images/thiago-retrato.jpg"
              alt="Retrato de Thiago Landes, fundador da Sapataria Paulista"
              fill
              className="object-cover object-[center_20%]"
              sizes="440px"
            />
          </div>
        </div>

        <ol className="relative flex flex-col gap-14 border-l border-border/60 pl-8 lg:pl-12">
          {TIMELINE.map((milestone) => (
            <li key={milestone.title} className="animate-on-scroll relative flex flex-col gap-4">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent lg:-left-[53px]" />
              {milestone.year && (
                <span className="font-serif text-2xl text-accent">{milestone.year}</span>
              )}
              <h3 className="font-serif text-2xl text-foreground lg:text-3xl">{milestone.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">{milestone.text}</p>
              {milestone.image && (
                <div className="relative mt-2 aspect-[16/10] w-full max-w-xl overflow-hidden">
                  <Image
                    src={milestone.image.src}
                    alt={milestone.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 576px"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
