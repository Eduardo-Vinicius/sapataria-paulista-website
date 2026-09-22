"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Recepção & Avaliação",
    description:
      "Envie fotos pelo WhatsApp ou traga a peça ao atelier. Analisamos estado, materiais e tipo de desgaste com o olhar de quem vive o ofício há mais de duas décadas.",
    image: "/images/ofício-lv-detalhe.jpg",
  },
  {
    number: "02",
    title: "Análise de Materiais",
    description:
      "Identificamos couro, tecido, borracha e ferragens para escolher tintas, colas e técnicas certas — o mesmo rigor aplicado a Louis Vuitton, Chanel e tênis de coleção.",
    image: "/images/ofício-bancada.jpg",
  },
  {
    number: "03",
    title: "Plano de Restauração",
    description:
      "Você recebe um plano claro com etapas, prazo e valores. Nada começa sem a sua aprovação.",
    image: "/images/atelier-bancada.jpg",
  },
  {
    number: "04",
    title: "Execução Artesanal",
    description:
      "Costura, tingimento, limpeza e estrutural feitos a mão na bancada. Acompanhamos a evolução com fotos de progresso.",
    image: "/images/ofício-chanel.jpg",
  },
  {
    number: "05",
    title: "Controle de Qualidade",
    description:
      "Inspeção final de acabamento, cor, costura e estrutura. So sai do atelier no padrão Sapataria Paulista.",
    image: "/images/ofício-costura.jpg",
  },
]

const qualityStandards = [
  "Acabamento impecável em todas as superfícies",
  "Correspondencia exata de cor e tonalidade",
  "Alinhamento preciso de costuras e reforcos",
  "Integridade estrutural restaurada",
  "Proteção final contra desgaste futuro",
  "Documentação fotográfica de todo o processo",
]

const faqs = [
  {
    q: "Quanto tempo leva uma restauração?",
    a: "Depende da complexidade do serviço. Limpezas simples levam de 3 a 5 dias. Restaurações completas podem levar de 7 a 14 dias úteis. Informamos o prazo exato na avaliação.",
  },
  {
    q: "Posso enviar meu item pelos Correios?",
    a: "Sim, atendemos clientes de todo o Brasil. Fornecemos orientações detalhadas para embalar e enviar seu item com segurança.",
  },
  {
    q: "Vocês trabalham com quais marcas?",
    a: "Trabalhamos com todas as marcas e tipos de calçados e artigos de couro: Nike, Adidas, Gucci, Louis Vuitton, Balenciaga, Prada, entre muitas outras.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Nossa taxa de satisfação é de 99%. Em casos raros de insatisfação, revisamos o item sem custo adicional até atingir o padrão desejado.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Aceitamos Pix, transferência bancária e cartões. O pagamento é feito após a aprovação do orçamento, antes do início do serviço.",
  },
]

export default function ProcessoPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden px-6 pb-20 pt-36 lg:px-10">
        <div className="absolute inset-0">
          <Image
            src="/images/ofício-costura.jpg"
            alt="Costura artesanal no atelier"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">
            Processo
          </p>
          <h1 className="animate-on-scroll mt-6 font-serif text-4xl text-white lg:text-7xl">
            Como restauramos
          </h1>
          <p className="animate-on-scroll mt-6 max-w-lg text-sm leading-relaxed text-white/55">
            Transparência em cada etapa — do diagnóstico de Thiago ao
            acabamento que devolve a peça ao seu melhor estado.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-20">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/10" />
                <span className="absolute left-4 top-4 bg-background/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-foreground backdrop-blur-sm">
                  Etapa {step.number}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <span className="text-[10px] tracking-[0.3em] text-accent">
                  {step.number}
                </span>
                <h3 className="font-serif text-3xl text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Standards */}
      <section className="bg-card px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="animate-on-scroll mb-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
              Excelência
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl">
              Padroes de Qualidade
            </h2>
          </div>
          <div className="stagger-children grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {qualityStandards.map((standard) => (
              <div
                key={standard}
                className="flex items-start gap-3 border border-border/50 p-6"
              >
                <div className="mt-1 h-2 w-2 shrink-0 border border-accent rotate-45" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {standard}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-3xl">
          <div className="animate-on-scroll mb-12 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">
              FAQ
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="stagger-children flex flex-col">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
          <h2 className="animate-on-scroll max-w-xl font-serif text-3xl text-primary-foreground lg:text-5xl">
            {"Pronto para restaurar seu item?"}
          </h2>
          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll group inline-flex items-center gap-2 bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-sm font-medium text-foreground lg:text-base">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          {answer}
        </p>
      </div>
    </div>
  )
}
