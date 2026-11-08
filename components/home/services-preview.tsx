"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { HOME_SERVICES, SERVICES } from "@/lib/content/services"

const cards = HOME_SERVICES.map((card) => ({
  ...card,
  description: SERVICES.find((service) => service.slug === card.slug)?.description ?? "",
}))

export function ServicesPreview() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-16 flex flex-col items-start gap-4 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-ultra-wide text-accent">Serviços</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl text-balance">
              Especialidades do atelier
            </h2>
          </div>
          <div className="flex max-w-md flex-col gap-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Higienização, hidratação do couro, pintura, borda italiana e reparos estruturais em bolsas, sapatos e tênis de grife.
            </p>
            <Link
              href="/servicos"
              className="text-[11px] uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>

        <div className="stagger grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((service) => (
            <Link
              key={service.slug}
              href={`/servicos#${service.slug}`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="relative z-10 flex flex-col gap-2 p-6 lg:p-7">
                <h3 className="font-serif text-xl text-white lg:text-2xl">{service.title}</h3>
                <p className="text-xs leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/80">
                  {service.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-accent">
                  Saiba mais
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
