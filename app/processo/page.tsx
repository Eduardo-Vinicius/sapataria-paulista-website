"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { whatsappLink } from "@/lib/contact"
import { PROCESS_STEPS } from "@/lib/content/process"
import { TERMS } from "@/lib/content/site-facts"
import { BRANDS } from "@/lib/content/brands"

const faqs = [
  {
    q: "Quanto tempo leva uma restauração?",
    a: `O prazo médio é de ${TERMS.turnaround}. O prazo exato de cada peça é informado no orçamento, antes de começarmos.`,
  },
  {
    q: "Como funciona o pagamento?",
    a: `${TERMS.payment.charAt(0).toUpperCase()}${TERMS.payment.slice(1)}.`,
  },
  {
    q: "Vocês trabalham com quais marcas?",
    a: `Com bolsas, sapatos e tênis de todas as marcas. Na bancada passam todos os dias peças ${BRANDS.join(", ")} e tênis de coleção.`,
  },
  {
    q: "Preciso levar a peça ao atelier para ter um orçamento?",
    a: "Não. Envie fotos pelo WhatsApp para uma primeira avaliação. Se for preciso ver a peça pessoalmente, combinamos a visita ao atelier.",
  },
]

export default function ProcessoPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden px-6 pb-20 pt-36 lg:px-10">
        <div className="absolute inset-0">
          <Image
            src="/images/oficio-costura.jpg"
            alt="Costura na máquina do atelier"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">Processo</p>
          <h1 className="animate-on-scroll mt-6 font-serif text-4xl text-white lg:text-7xl">Como funciona</h1>
          <p className="animate-on-scroll mt-6 max-w-lg text-sm leading-relaxed text-white/60">
            Do primeiro contato pelo WhatsApp até a retirada da peça pronta, você sabe o que acontece em cada etapa.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`animate-on-scroll grid gap-8 border-t border-border/40 pt-12 lg:gap-16 ${
                step.image ? "lg:grid-cols-2 lg:items-center" : ""
              }`}
            >
              {step.image && (
                <div className={`relative aspect-[4/3] w-full overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <Image src={step.image.src} alt={step.image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              )}
              <div className={`flex flex-col gap-4 ${step.image ? "" : "lg:max-w-3xl"}`}>
                <span className="font-serif text-4xl text-accent/60">{step.number}</span>
                <h2 className="font-serif text-3xl text-foreground">{step.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">{step.description}</p>
                <p className="border-l border-accent/60 pl-4 text-sm leading-relaxed text-foreground/90">
                  <span className="text-accent">Você recebe: </span>
                  {step.youReceive}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card/40 px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="animate-on-scroll mb-12 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Dúvidas</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl">Perguntas frequentes</h2>
          </div>
          <div className="stagger-children flex flex-col">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
          <h2 className="animate-on-scroll max-w-xl font-serif text-3xl text-foreground lg:text-5xl">
            Pronto para restaurar sua peça?
          </h2>
          <Link
            href={whatsappLink("Olá! Gostaria de enviar fotos da minha peça para avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-on-scroll group inline-flex items-center gap-2 bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
          >
            <span>Enviar fotos pelo WhatsApp</span>
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
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-6 text-left" aria-expanded={open}>
        <span className="pr-4 text-sm font-medium text-foreground lg:text-base">{question}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  )
}
