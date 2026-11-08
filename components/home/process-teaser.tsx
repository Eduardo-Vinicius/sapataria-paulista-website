"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PROCESS_STEPS } from "@/lib/content/process"

export function ProcessTeaser() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="bg-card/40 px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-16 flex flex-col gap-4 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-ultra-wide text-accent">Processo</p>
            <h2 className="mt-3 max-w-lg font-serif text-3xl text-foreground lg:text-5xl text-balance">
              Como funciona
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Quatro passos, do primeiro contato pelo WhatsApp até a retirada da peça pronta.
          </p>
        </div>

        <div className="stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className={`group relative flex min-h-[320px] flex-col justify-end overflow-hidden lg:min-h-[420px] ${
                step.image ? "" : "border border-border/50 bg-background"
              }`}
            >
              {step.image && (
                <>
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                </>
              )}
              {!step.image && (
                <span className="absolute right-6 top-4 font-serif text-7xl text-accent/15">{step.number}</span>
              )}
              <div className="relative z-10 flex flex-col gap-2 p-6">
                <span className="text-[10px] tracking-[0.3em] text-accent">{step.number}</span>
                <h3 className={`font-serif text-xl ${step.image ? "text-white" : "text-foreground"}`}>{step.title}</h3>
                <p className={`text-xs leading-relaxed ${step.image ? "text-white/70" : "text-muted-foreground"}`}>
                  {step.description}
                </p>
                <p className={`mt-2 border-t pt-3 text-xs leading-relaxed ${
                  step.image ? "border-white/15 text-white/85" : "border-border/50 text-foreground/85"
                }`}>
                  <span className="text-accent">Você recebe: </span>
                  {step.youReceive}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 flex justify-center">
          <Link
            href="/processo"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:text-foreground"
          >
            <span>Conhecer o processo completo</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
