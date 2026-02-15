"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const services = [
  {
    category: "Limpeza & Higienizacao Premium",
    image: "/images/especialidade-higienizacao.png",
    description:
      "Processo exclusivo de limpeza profunda que remove sujeira, manchas e odores sem comprometer a integridade dos materiais. Utilizamos produtos importados de alta performance.",
    details: [
      "Limpeza profunda de tecidos, camurca, nubuck e couro",
      "Remocao de manchas dificeis e encardidos",
      "Desodorizacao e higienizacao antibacteriana",
      "Protecao pos-limpeza com impermeabilizante premium",
    ],
    turnaround: "3 a 5 dias uteis",
  },
  {
    category: "Restauracao Estrutural",
    image: "/images/restauracao-estrutural.png",
    description:
      "Reconstrucao e reparo de partes danificadas, como entressolas, costuras, palmilhas e estruturas internas. Devolvemos a forma e funcionalidade original do seu item.",
    details: [
      "Reparo de entressolas e midsoles",
      "Recostura e reforco de costuras",
      "Restauracao de palmilhas e forros internos",
      "Reforco estrutural e recondicionamento",
    ],
    turnaround: "5 a 10 dias uteis",
  },
  {
    category: "Troca & Ajuste de Solado",
    image: "/images/troca-solado.png",
    description:
      "Substituicao e ajuste de solados desgastados. Trabalhamos com materiais de alta qualidade para garantir durabilidade e acabamento impecavel.",
    details: [
      "Troca completa de solado",
      "Aplicacao de borracha protetora",
      "Ajuste de salto e nivelamento",
      "Acabamento e colagem industrial",
    ],
    turnaround: "7 a 14 dias uteis",
  },
  {
    category: "Pintura & Revitalizacao",
    image: "/images/pintura.png",
    description:
      "Restauracao de cor e acabamento com tintas e pigmentos profissionais. Personalizacao de cores e efeitos sob medida para cada material.",
    details: [
      "Tingimento de couro e sinteticos",
      "Restauracao de cor original",
      "Customizacao de cores sob encomenda",
      "Acabamento acetinado, fosco ou brilhante",
    ],
    turnaround: "5 a 10 dias uteis",
  },
  {
    category: "Couro & Acabamentos",
    image: "/images/especialidade-sapatos-couro.png",
    description:
      "Tratamento especializado para artigos de couro fino: bolsas, carteiras, cintos e acessorios de grife. Restauracao que respeita o material e a identidade da peca.",
    details: [
      "Hidratacao e nutricao de couro",
      "Reparo de arranhoes e descascados",
      "Restauracao de ferragens e zippers",
      "Tratamento de bordas e acabamentos",
    ],
    turnaround: "5 a 12 dias uteis",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="animate-on-scroll flex flex-col overflow-hidden border border-border/50 transition-all duration-500 hover:border-accent/30 lg:flex-row">
      <div className="relative aspect-[3/2] lg:aspect-auto lg:w-2/5">
        <Image
          src={service.image}
          alt={service.category}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-primary/10" />
        <span className="absolute left-4 top-4 bg-background/70 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm">
          {`0${index + 1}`}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 lg:p-8">
        <h3 className="font-serif text-2xl text-foreground">
          {service.category}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent transition-colors hover:text-foreground"
          aria-expanded={expanded}
        >
          <span>{expanded ? "Menos detalhes" : "Ver detalhes"}</span>
          <ChevronDown
            className={`h-3 w-3 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 pb-4">
            {service.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {detail}
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">
            <span className="text-accent">Prazo estimado:</span>{" "}
            {service.turnaround}
          </p>
        </div>

        <Link
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20avaliar%20meu%20item."
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>Quero avaliar meu item</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
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
      </div>
    </div>
  )
}

export default function ServicosPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="flex min-h-[60vh] items-end bg-primary px-6 pb-20 pt-36 lg:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">
            Servicos
          </p>
          <h1 className="animate-on-scroll mt-6 font-serif text-4xl text-primary-foreground lg:text-7xl">
            Nossos Servicos
          </h1>
          <p className="animate-on-scroll mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/40">
            {"Cada servico e realizado com tecnicas premium e atencao meticulosa a cada detalhe. Conheca nossas especialidades."}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          {/* Space showcase */}
          <div className="animate-on-scroll mb-24 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
              <Image
                src="/images/capa2.png"
                alt="Interior do atelier Sapataria Paulista"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--accent)/0.16),_transparent_60%)]" />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-[10px] uppercase tracking-[0.45em] text-accent">
                Nosso Espaco
              </p>
              <h2 className="font-serif text-3xl text-foreground lg:text-4xl">
                {"Atelier Premium em Sao Paulo"}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"Locado na Avenida Paulista, nosso atelier foi cuidadosamente projetado para oferecer o melhor ambiente de trabalho e atenciamento. Com equipamentos de ultima geracao e profissionais especializados, cada projeto e tratado como uma obra de arte."}
              </p>
              <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
              >
                <span>Conhecer o atelier</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
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
            </div>
          </div>

          {/* Especialidades showcase */}
          <div className="animate-on-scroll mb-24">
            <div className="mb-16 text-center">
              <p className="text-[10px] uppercase tracking-[0.45em] text-accent">
                Especialidades
              </p>
              <h2 className="mt-4 font-serif text-3xl text-foreground lg:text-5xl">
                O que nos diferencia
              </h2>
              <p className="mt-4 mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
                Cada especialidade desenvolvida com mastery e dedicacao
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Tenis de Luxo",
                  image: "/images/especialidade-tenis-luxo.png",
                },
                {
                  title: "Sapatos & Couro",
                  image: "/images/especialidade-sapatos-couro.png",
                },
                {
                  title: "Bolsas & Acessorios",
                  image: "/images/especialidade-bolsas-acessorios.png",
                },
                {
                  title: "Higienizacao",
                  image: "/images/especialidade-higienizacao.png",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end p-6">
                    <h3 className="font-serif text-lg md:text-xl text-white text-center drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:translate-y-[-4px]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="px-6 lg:px-10 lg:py-36">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.category} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 text-center">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">
            Proximo passo
          </p>
          <h2 className="animate-on-scroll max-w-2xl font-serif text-3xl text-primary-foreground lg:text-6xl">
            {"Envie fotos do seu item e receba uma avaliacao em minutos."}
          </h2>
          <Link
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll group inline-flex items-center gap-3 bg-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:bg-primary-foreground/90"
          >
            <span>Enviar fotos via WhatsApp</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </section>
    </div>
  )
}
