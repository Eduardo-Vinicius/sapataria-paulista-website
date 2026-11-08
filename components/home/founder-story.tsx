"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { whatsappLink } from "@/lib/contact"
import { FACTS } from "@/lib/content/site-facts"

export function FounderTeaser() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal-scale relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden">
          <Image
            src="/images/thiago-147.jpg"
            alt="Thiago Landes, fundador da Sapataria Paulista, engraxando na Avenida Paulista"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </div>
        <div className="reveal flex flex-col gap-6">
          <p className="text-[10px] uppercase tracking-[0.45em] text-accent">O Fundador</p>
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">Thiago Landes</h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Aos 13 anos engraxava sapatos na Avenida Paulista. Depois de treinamentos em Milão e anos de bancada,
            hoje comanda o atelier da Sapataria Paulista na Galeria 2001, com uma equipe de mais de{" "}
            {FACTS.teamSize} artesãos.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
            >
              Conhecer a trajetória
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const masteryShots = [
  {
    src: "/images/thiago-65.jpg",
    alt: "Thiago Landes restaurando bolsa Louis Vuitton no atelier",
    caption: "Bolsas de grife",
  },
  {
    src: "/images/thiago-101.jpg",
    alt: "Thiago Landes em trabalho de precisão na bancada",
    caption: "Precisão artesanal",
  },
]

export function FounderStory() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-14 flex flex-col gap-4 lg:mb-20 lg:max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.45em] text-accent">O Fundador</p>
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            Thiago Landes
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Aos 13 anos engraxava sapatos na Avenida Paulista. Hoje comanda
            o atelier da Sapataria Paulista, onde cuida pessoalmente de
            tênis, sapatos e bolsas de grife.
          </p>
        </div>

        <div className="reveal-scale relative mb-10 aspect-[4/3] max-h-[560px] min-h-[320px] overflow-hidden sm:aspect-[16/10] lg:mb-14 lg:max-h-[620px]">
          <Image
            src="/images/thiago-147.jpg"
            alt="Thiago Landes, fundador da Sapataria Paulista, em ação no ofício"
            fill
            className="object-cover object-[center_25%]"
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 md:gap-6 md:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Da Paulista ao atelier
              </p>
              <p className="mt-3 font-serif text-xl leading-snug text-white md:text-2xl lg:text-3xl">
                {`Mais de ${FACTS.yearsOfCraft} anos de experiência com couro, solados e acabamentos.`}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: "Anos de ofício", value: `${FACTS.yearsOfCraft}+` },
                { label: "Artesãos", value: `${FACTS.teamSize}+` },
                { label: "Sede", value: "Galeria 2001" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-white/15 bg-black/40 px-3 py-2.5 backdrop-blur-sm sm:px-4 sm:py-3"
                >
                  <p className="font-serif text-lg text-white sm:text-xl">{stat.value}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/60 sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="reveal flex flex-col justify-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Trajetória</p>
            <h3 className="font-serif text-3xl text-foreground lg:text-4xl">
              Da rua ao atelier de luxo
            </h3>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              <p>
                Thiago construiu a Sapataria Paulista a partir do atendimento
                artesanal na Avenida Paulista. O que começou como engraxate
                virou referência nacional em restauração de itens de luxo.
              </p>
              <p>
                No atelier da Galeria 2001, ao lado do Conjunto Nacional, ele
                lidera uma equipe que cuida de cada peça com atenção total:
                Louis Vuitton, Chanel, Ferragamo, tênis de coleção e couros
                especiais, sempre com materiais importados e acabamento
                impecável.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
              >
                Falar com o atelier
              </Link>
            </div>
          </div>

          <div className="stagger grid gap-4 sm:grid-cols-2">
            {masteryShots.map((shot) => (
              <div key={shot.src} className="group relative aspect-[3/4] overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <p className="absolute bottom-0 left-0 p-5 text-[10px] uppercase tracking-[0.25em] text-white/80">
                  {shot.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
