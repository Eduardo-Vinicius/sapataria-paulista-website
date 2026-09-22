"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FinalCta() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/atelier-bancada.jpg"
          alt="Bancada do atelier Sapataria Paulista"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" />
      </div>

      <div className="reveal relative z-10 flex flex-col items-center gap-7 px-6 text-center">
        <p className="text-[10px] uppercase tracking-ultra-wide text-accent">Comece agora</p>
        <h2 className="max-w-3xl font-serif text-3xl leading-tight text-white lg:text-6xl">
          Envie fotos. Receba o diagnóstico de quem vive o ofício.
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-white/45">
          Thiago e a equipe analisam sua peça e retornam com um plano claro —
          materiais, prazo e acabamento no padrão Sapataria Paulista.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20enviar%20fotos%20para%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-all duration-500 hover:bg-accent/90"
          >
            <span>WhatsApp</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-500 group-hover:translate-x-1"
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
          <Link
            href="/processo"
            className="inline-flex items-center px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-500 hover:text-white"
          >
            Como funciona
          </Link>
        </div>
      </div>
    </section>
  )
}
