"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FounderStory() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-border/50 bg-background shadow-[0_24px_120px_rgba(0,0,0,0.35)] lg:min-h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/images/thiago-landes.png"
              alt="Thiago Landes no atelier"
              fill
              className="object-cover object-[center_top]"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
          <div className="relative flex h-full flex-col justify-between bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8 backdrop-blur-[2px] lg:p-10">
            <div className="flex flex-col gap-2 text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)]">
              <span className="text-[10px] uppercase tracking-[0.45em] text-accent">Fundador</span>
              <h3 className="font-serif text-3xl leading-tight lg:text-4xl">Thiago Landes</h3>
              <p className="max-w-xl text-sm leading-relaxed text-white/90">
                Aos 13 anos engraxava sapatos na Avenida Paulista. Hoje lidera a Sapataria Paulista e assina restauracoes para clientes de grife que chegam com assessoria e seguranca dedicada.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[{ label: "Anos de oficio", value: "24" }, { label: "Equipe dedicada", value: "20+" }, { label: "Nova sede", value: "Galeria 2001" }].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white/90 backdrop-blur">
                  <p className="text-lg font-semibold text-white drop-shadow-sm">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:pl-6">
          <p className="text-[10px] uppercase tracking-[0.45em] text-accent">Historia</p>
          <h2 className="font-serif text-3xl text-foreground lg:text-5xl">Da Paulista para o atelier de grife</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            De engraxate na Avenida Paulista, Thiago construiu uma reputacao como um dos principais nomes em restauracao de bolsas e sapatos de luxo. A Sapataria Paulista nasceu do atendimento artesanal e cresceu ate receber artistas, influenciadores e clientes que tratam seus itens como verdadeiras obras.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm">
              <h4 className="font-serif text-lg text-foreground">Novo atelier</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A nova sede na Galeria 2001, ao lado do Conjunto Nacional, reune costura, lavanderia de tenis e bancada de restauracao premium em um so andar.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm">
              <h4 className="font-serif text-lg text-foreground">Padrão de grife</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Protocolos inspirados em maisons europeias: avaliacao detalhada, materiais importados e entrega com padrao museu para couro, lona e tecidos raros.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent/10"
            >
              Conhecer a trajetoria
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Falar com o atelier
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
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
      </div>
    </section>
  )
}
