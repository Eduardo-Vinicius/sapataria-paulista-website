"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, Target, Eye, Wrench } from "lucide-react"
import { FounderStory } from "@/components/home/founder-story"
import { PartnershipStory } from "@/components/home/partnership-story"
import { Timeline } from "@/components/sobre/timeline"
import { FounderVideo } from "@/components/sobre/founder-video"
import { Team } from "@/components/sobre/team"
import { FACTS } from "@/lib/content/site-facts"
import { whatsappLink } from "@/lib/contact"

const values = [
  {
    icon: Shield,
    title: "Discrição",
    description:
      "Cada peça é tratada com a confidencialidade que clientes de grife exigem. Seu investimento fica em mãos seguras.",
  },
  {
    icon: Target,
    title: "Precisão",
    description:
      "Do diagnóstico ao acabamento, Thiago e a equipe cuidam de cada detalhe para devolver o aspecto original da peça.",
  },
  {
    icon: Eye,
    title: "Responsabilidade",
    description:
      "Orçamentos claros, prazos cumpridos e documentação de cada etapa. Confiança construída com resultado.",
  },
  {
    icon: Wrench,
    title: "Artesanato",
    description:
      "Técnicas tradicionais e materiais de primeira linha. Aqui, a qualidade vem antes da quantidade.",
  },
]

export default function SobrePage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      <section className="px-6 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="animate-on-scroll text-[10px] uppercase tracking-[0.4em] text-accent">Sobre</p>
            <h1 className="animate-on-scroll mt-4 font-serif text-4xl text-foreground lg:text-7xl">
              Nossa história
            </h1>
            <p className="animate-on-scroll mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A Sapataria Paulista é a trajetória de Thiago Landes: da Avenida
              Paulista ao atelier de restauração de luxo na Galeria 2001.
            </p>
          </div>
          <div className="animate-on-scroll relative order-1 mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden lg:order-2 lg:max-w-none">
            <Image
              src="/images/thiago-65.jpg"
              alt="Thiago Landes restaurando uma bolsa no atelier"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 480px, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <FounderVideo />

      <FounderStory />

      <Timeline />

      <PartnershipStory variant="full" />

      <section className="bg-card/50 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="animate-on-scroll flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
              <Image
                src="/images/atelier-bancada.jpg"
                alt="Bancada do atelier Sapataria Paulista"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">O Atelier</p>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                Nosso atelier na Galeria 2001
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Ao lado do Conjunto Nacional, a sede reúne costura, higienização
                  e bancadas de restauração em um só andar.
                </p>
                <p>
                  Uma equipe de mais de {FACTS.teamSize} artesãos, fábrica própria e
                  insumos importados da Itália para bolsas, sapatos e tênis de grife.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="animate-on-scroll mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Valores</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl">O Que Nos Define</h2>
          </div>
          <div className="stagger-children grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group flex flex-col gap-4 border-t border-border/50 pt-8 transition-colors duration-500 hover:border-accent/40"
              >
                <value.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                <h3 className="font-serif text-xl text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/thiago-147.jpg"
            alt="Thiago Landes"
            fill
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center gap-8 text-center">
          <h2 className="animate-on-scroll max-w-2xl font-serif text-3xl text-white lg:text-5xl">
            Conheça o atelier e quem cuida da sua peça
          </h2>
          <p className="animate-on-scroll max-w-md text-sm leading-relaxed text-white/60">
            Visite-nos na Av. Paulista ou fale pelo WhatsApp para agendar avaliação.
          </p>
          <div className="animate-on-scroll flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
            >
              Contato
            </Link>
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
