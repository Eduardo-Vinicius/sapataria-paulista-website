"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Recepcao & Avaliacao",
    description:
      "Envie fotos do seu item pelo WhatsApp ou traga pessoalmente ao atelier. Nossa equipe realiza uma analise inicial detalhada do estado geral, materiais e tipo de desgaste.",
    image: "/images/service-cleaning.jpg",
  },
  {
    number: "02",
    title: "Analise de Materiais",
    description:
      "Identificamos cada material presente no item — tipo de couro, tecido, borracha, ferragens — para selecionar os produtos e tecnicas mais adequados para a restauracao.",
    image: "/images/service-sneakers.jpg",
  },
  {
    number: "03",
    title: "Plano de Restauracao",
    description:
      "Elaboramos um plano detalhado com todas as etapas necessarias, prazos e valores. Voce aprova antes de iniciarmos qualquer intervencao.",
    image: "/images/atelier-interior.jpg",
  },
  {
    number: "04",
    title: "Execucao Artesanal",
    description:
      "Cada etapa e realizada manualmente por nossos especialistas, com tecnicas tradicionais e produtos premium. Acompanhamos a evolucao com fotos de progresso.",
    image: "/images/service-dyeing.jpg",
  },
  {
    number: "05",
    title: "Controle de Qualidade",
    description:
      "Inspecao final rigorosa: acabamento, cor, costura, estrutura. Cada item passa por nossa checklist de qualidade antes da entrega. Perfeicao e padrao.",
    image: "/images/service-shoes.jpg",
  },
]

const qualityStandards = [
  "Acabamento impecavel em todas as superficies",
  "Correspondencia exata de cor e tonalidade",
  "Alinhamento preciso de costuras e reforcos",
  "Integridade estrutural restaurada",
  "Protecao final contra desgaste futuro",
  "Documentacao fotografica de todo o processo",
]

const faqs = [
  {
    q: "Quanto tempo leva uma restauracao?",
    a: "Depende da complexidade do servico. Limpezas simples levam de 3 a 5 dias. Restauracoes completas podem levar de 7 a 14 dias uteis. Informamos o prazo exato na avaliacao.",
  },
  {
    q: "Posso enviar meu item pelos Correios?",
    a: "Sim, atendemos clientes de todo o Brasil. Fornecemos orientacoes detalhadas para embalar e enviar seu item com seguranca.",
  },
  {
    q: "Vocês trabalham com quais marcas?",
    a: "Trabalhamos com todas as marcas e tipos de calcados e artigos de couro: Nike, Adidas, Gucci, Louis Vuitton, Balenciaga, Prada, entre muitas outras.",
  },
  {
    q: "E se eu nao gostar do resultado?",
    a: "Nossa taxa de satisfacao e de 99%. Em casos raros de insatisfacao, revisamos o item sem custo adicional ate atingir o padrao desejado.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Aceitamos Pix, transferencia bancaria e cartoes. O pagamento e feito apos a aprovacao do orcamento, antes do inicio do servico.",
  },
]

export default function ProcessoPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="flex min-h-[60vh] items-end bg-primary px-6 pb-20 pt-36 lg:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">
            Processo
          </p>
          <h1 className="animate-on-scroll mt-6 font-serif text-4xl text-primary-foreground lg:text-7xl">
            Nosso Processo
          </h1>
          <p className="animate-on-scroll mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/40">
            {"Transparencia em cada etapa. Conheca como transformamos seus itens com tecnica, cuidado e precisao artesanal."}
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
              Excelencia
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
