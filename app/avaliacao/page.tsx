"use client"

import Image from "next/image"
import Link from "next/link"
import { Camera, MessageCircle, FileText, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { whatsappLink } from "@/lib/contact"
import { WHATSAPP_MESSAGES } from "@/lib/content/whatsapp-messages"
import { TERMS } from "@/lib/content/site-facts"

const steps = [
  {
    icon: Camera,
    title: "Fotografe a peça",
    description: "Fotos com boa luz, de frente, de lado, por dentro e dos detalhes que precisam de cuidado.",
  },
  {
    icon: MessageCircle,
    title: "Envie pelo WhatsApp",
    description: "Mande as fotos com uma breve descrição do que você quer resolver.",
  },
  {
    icon: FileText,
    title: "Receba o orçamento",
    description: `Você recebe o orçamento com o serviço indicado e o prazo, em média de ${TERMS.turnaround}.`,
  },
  {
    icon: CheckCircle,
    title: "Aprove e traga a peça",
    description: `Com a aprovação, a peça entra na bancada. ${TERMS.payment.charAt(0).toUpperCase()}${TERMS.payment.slice(1)}.`,
  },
]

const photoTips = [
  "Fotografe com luz natural, sem flash",
  "Mostre a peça inteira e depois os detalhes de perto",
  "Inclua o interior, as alças, as ferragens e o solado",
  "Se tiver, mostre a etiqueta ou o selo da marca",
]

export default function AvaliacaoPage() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden px-6 pb-16 pt-32 lg:px-10">
        <div className="absolute inset-0">
          <Image src="/images/oficio-lv-limpeza.jpg" alt="Avaliação de bolsa Louis Vuitton" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/45" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-[0.4em] text-accent">Avaliação</p>
          <h1 className="animate-on-scroll mt-4 font-serif text-4xl text-white lg:text-6xl">Avaliação pelo WhatsApp</h1>
          <p className="animate-on-scroll mt-6 max-w-xl text-sm leading-relaxed text-white/60">
            Cada peça é única. O valor depende do estado e do serviço, por isso o orçamento é feito a partir das fotos.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="animate-on-scroll mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Passo a passo</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-5xl">Como pedir sua avaliação</h2>
          </div>
          <div className="stagger-children grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="group flex flex-col gap-4 border border-border/50 p-8 transition-all duration-500 hover:border-accent/30">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] text-accent">{`0${i + 1}`}</span>
                  <step.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href={whatsappLink(WHATSAPP_MESSAGES.evaluation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
            >
              Enviar fotos pelo WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-card/40 px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="animate-on-scroll flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Dicas</p>
            <h2 className="font-serif text-3xl text-foreground lg:text-4xl">Fotos que ajudam no orçamento</h2>
            <ul className="mt-2 flex flex-col gap-3">
              {photoTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-on-scroll grid gap-4 self-start sm:grid-cols-2">
            <div className="border border-border/50 bg-background p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Prazo médio</p>
              <p className="mt-2 font-serif text-2xl text-foreground">{TERMS.turnaround}</p>
            </div>
            <div className="border border-border/50 bg-background p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-accent">Pagamento</p>
              <p className="mt-2 font-serif text-2xl text-foreground">40% de entrada</p>
              <p className="mt-1 text-xs text-muted-foreground">Restante na retirada da peça.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
