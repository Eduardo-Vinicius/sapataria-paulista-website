"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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
            Aos 13 anos engraxava sapatos na Avenida Paulista. Hoje assina
            restaurações de tênis, sapatos e bolsas de grife no atelier da
            Sapataria Paulista — a mesma mão, o mesmo ofício, um outro patamar.
          </p>
        </div>

        <div className="reveal-scale relative mb-10 min-h-[70vh] overflow-hidden lg:mb-14 lg:min-h-[85vh]">
          <Image
            src="/images/thiago-147.jpg"
            alt="Thiago Landes, fundador da Sapataria Paulista, em ação no ofício"
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 md:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-14">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Da Paulista ao atelier
              </p>
              <p className="mt-3 font-serif text-2xl leading-snug text-white md:text-3xl lg:text-4xl">
                {"Mais de duas décadas dedicadas ao couro, ao solado e ao detalhe que só o olho treinado enxerga."}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "Anos de ofício", value: "24+" },
                { label: "Equipe", value: "20+" },
                { label: "Sede", value: "Galeria 2001" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-white/15 bg-black/40 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-4"
                >
                  <p className="font-serif text-xl text-white sm:text-2xl">{stat.value}</p>
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
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">História & Maestria</p>
            <h3 className="font-serif text-3xl text-foreground lg:text-4xl">
              Origem na rua. Padrão de maison.
            </h3>
            <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              <p>
                Thiago construiu a Sapataria Paulista a partir do atendimento
                artesanal na Avenida Paulista. O que começou como engraxate
                virou referência nacional em restauração de itens de luxo.
              </p>
              <p>
                No atelier da Galeria 2001, ao lado do Conjunto Nacional, ele
                lidera uma equipe que trata cada peça como obra: Louis Vuitton,
                Chanel, Ferragamo, tênis de coleção e couros raros — com
                materiais importados e acabamento de museu.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 border border-accent/40 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent/10"
              >
                Trajetória completa
              </Link>
              <Link
                href="https://wa.me/5511999999999"
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
