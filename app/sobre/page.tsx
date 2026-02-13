"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Shield, Target, Eye, Wrench } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Discricao",
    description:
      "Tratamos cada item com a confidencialidade que clientes premium exigem. Seu investimento esta em maos seguras.",
  },
  {
    icon: Target,
    title: "Precisao",
    description:
      "Cada detalhe importa. Da analise inicial ao acabamento final, buscamos a perfeicao em cada etapa do processo.",
  },
  {
    icon: Eye,
    title: "Responsabilidade",
    description:
      "Transparencia total: orcamentos claros, prazos cumpridos, documentacao de cada etapa. Confianca construida com resultados.",
  },
  {
    icon: Wrench,
    title: "Artesanato",
    description:
      "Combinamos tecnicas tradicionais com tecnologia moderna. Cada restauracao e uma obra de arte feita a mao.",
  },
]

export default function SobrePage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="flex min-h-[50vh] items-end bg-primary px-6 pb-16 pt-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="animate-on-scroll text-[10px] uppercase tracking-[0.4em] text-accent">
            Sobre
          </p>
          <h1 className="animate-on-scroll mt-4 font-serif text-4xl text-primary-foreground lg:text-6xl">
            Nossa Historia
          </h1>
          <p className="animate-on-scroll mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/60">
            {"Mais de duas decadas dedicadas a arte da restauracao. Tradicao, tecnica e paixao por cada peca."}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="animate-on-scroll flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
              <Image
                src="/images/atelier-interior.jpg"
                alt="Interior do atelier Sapataria Paulista"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Desde 2002
              </p>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                {"Tradicao encontra tecnica moderna"}
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  {"A Sapataria Paulista nasceu no coracao de Sao Paulo com uma missao clara: oferecer restauracao de calcados e artigos de couro com o mais alto padrao de qualidade."}
                </p>
                <p>
                  {"Ao longo de mais de duas decadas, construimos uma reputacao solida atendendo clientes exigentes que valorizam seus itens premium. Nosso atelier combina tecnicas artesanais tradicionais com materiais e tecnologias de ultima geracao."}
                </p>
                <p>
                  {"Cada item que passa por nossas maos recebe atencao individualizada. Nao trabalhamos com volume — trabalhamos com excelencia. Esse compromisso nos tornou referencia em restauracao de luxo na capital paulista."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier + Craft */}
      <section className="bg-card px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="animate-on-scroll flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
              <Image
                src="/images/hero-atelier.jpg"
                alt="Artesao trabalhando em restauracao"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Artesanato
              </p>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                {"Atelier, precisao, clientes premium"}
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  {"Nossa equipe e formada por especialistas com anos de experiencia em diferentes tecnicas de restauracao. Cada profissional domina seu oficio — do couro ao solado, do tingimento ao acabamento."}
                </p>
                <p>
                  {"O atelier e equipado com ferramentas profissionais e produtos importados de marcas reconhecidas mundialmente. Investimos constantemente em capacitacao e novas tecnologias para oferecer sempre o melhor resultado possivel."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="animate-on-scroll mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
              Valores
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl">
              O Que Nos Define
            </h2>
          </div>
          <div className="stagger-children grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group flex flex-col gap-4 border border-border/50 p-8 transition-all duration-500 hover:border-accent/30"
              >
                <value.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" />
                <h3 className="font-serif text-xl text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
          <h2 className="animate-on-scroll max-w-xl font-serif text-3xl text-primary-foreground lg:text-5xl">
            {"Conheca nosso atelier"}
          </h2>
          <p className="animate-on-scroll max-w-md text-sm leading-relaxed text-primary-foreground/60">
            {"Visite-nos na Av. Paulista ou entre em contato pelo WhatsApp para agendar sua visita."}
          </p>
          <div className="animate-on-scroll flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
            >
              Contato
            </Link>
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-primary-foreground/20 px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground/80 transition-all duration-300 hover:border-primary-foreground/40 hover:text-primary-foreground"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
