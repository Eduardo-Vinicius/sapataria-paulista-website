"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const letter = [
  "Quando olho para tudo o que construímos na Sapataria Paulista, percebo que esse sonho nunca foi apenas meu. Em algum momento da nossa caminhada, ele também se tornou seu — e você passou a carregá-lo comigo, com a mesma coragem, dedicação e esperança.",
  "Desde o início, você esteve ao meu lado. Não apenas nos dias fáceis, quando tudo parecia dar certo, mas principalmente nos momentos de incerteza, cansaço e sacrifício. Enquanto eu buscava fazer a empresa crescer, você sustentava tantas outras partes da nossa vida: cuidava da nossa família, enfrentava renúncias, administrava preocupações e encontrava forças para seguir em frente mesmo quando ninguém via o quanto estava sendo exigida.",
  "Você esteve presente nos bastidores, na gestão, no cuidado com as pessoas e em todas aquelas tarefas que raramente recebem reconhecimento, mas que são indispensáveis para que qualquer projeto sobreviva e cresça. Muitas vezes, abriu mão do seu próprio tempo, dos seus planos e do descanso para que pudéssemos continuar construindo o nosso caminho.",
  "Cada conquista da Sapataria Paulista carrega um pouco da sua dedicação. Em cada etapa vencida, existe também a sua paciência, o seu apoio, a sua força e a sua capacidade de permanecer firme quando tudo parecia difícil demais.",
  "Por isso, quero deixar registrado algo que talvez eu não diga com a frequência que deveria: eu reconheço tudo o que você fez, tudo o que enfrentou e tudo o que continua fazendo. Sou profundamente grato por sua parceria, por sua confiança e por nunca ter deixado de acreditar em nós.",
  "A empresa cresceu, os desafios mudaram e os sonhos se tornaram maiores, mas uma verdade permanece: nada disso teria sido igual sem você.",
  "Obrigado por acreditar em mim quando tudo ainda era apenas um sonho, por permanecer ao meu lado nos momentos mais difíceis e por construir essa história comigo, com amor, coragem e tantos sacrifícios silenciosos.",
  "A Sapataria Paulista é uma conquista nossa. E a minha maior gratidão é poder dividir essa caminhada com você.",
]

const quote =
  "“Você não esteve apenas ao lado do fundador da Sapataria Paulista. Você também faz parte da fundação dela.”"

function CouplePhoto({ sticky = false }: { sticky?: boolean }) {
  return (
    <div
      className={`reveal-scale relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden ${
        sticky ? "lg:sticky lg:top-28" : ""
      }`}
    >
      <Image
        src="/images/thiago-e-esposa.jpg"
        alt="Thiago Landes e a esposa no atelier da Sapataria Paulista"
        fill
        className="object-cover object-[center_30%]"
        sizes="(max-width: 1024px) 100vw, 520px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <p className="absolute bottom-0 left-0 p-6 text-[10px] uppercase tracking-[0.3em] text-white/80">
        Parceria de vida e de ofício
      </p>
    </div>
  )
}

function Signature() {
  return (
    <div className="flex items-center gap-4 border-t border-border/40 pt-6">
      <span className="h-px w-10 bg-accent" />
      <div>
        <p className="font-serif text-xl italic text-foreground">Thiago Landes</p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Fundador da Sapataria Paulista</p>
      </div>
    </div>
  )
}

export function PartnershipStory({ variant = "teaser" }: { variant?: "teaser" | "full" }) {
  const ref = useScrollAnimation()
  const isFull = variant === "full"

  return (
    <section
      ref={ref}
      id={isFull ? "carta" : undefined}
      className="relative scroll-mt-24 overflow-hidden border-y border-border/30 bg-card/40 px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-14 flex flex-col gap-4 lg:mb-20 lg:max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.45em] text-accent">A fundação da Sapataria Paulista</p>
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">Uma história a dois</h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Algumas histórias de sucesso não podem ser contadas por uma só pessoa. A nossa é uma delas.
          </p>
        </div>

        <div className={`grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 ${isFull ? "items-start" : "items-center"}`}>
          <CouplePhoto sticky={isFull} />

          <div className="reveal flex flex-col gap-8">
            <blockquote className="border-l border-accent/60 pl-6 font-serif text-2xl italic leading-snug text-foreground md:text-3xl lg:text-4xl">
              {quote}
            </blockquote>

            {isFull ? (
              <div className="flex flex-col gap-5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                {letter.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <Link
                href="/sobre#carta"
                className="inline-flex items-center gap-2 self-start border border-accent/50 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent/10"
              >
                Ler a carta
              </Link>
            )}

            <Signature />
          </div>
        </div>
      </div>
    </section>
  )
}
