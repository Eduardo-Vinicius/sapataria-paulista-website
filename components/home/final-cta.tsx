"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FinalCta() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/atelier-interior.jpg"
          alt="Interior do atelier"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_0%_4%/0.8)_100%)]" />
      </div>

      {/* Content */}
      <div className="reveal relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <p className="text-[10px] uppercase tracking-ultra-wide text-accent">
          Comece agora
        </p>
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-primary-foreground lg:text-6xl">
          {"Envie fotos. Receba um diagnostico em minutos."}
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-primary-foreground/40">
          {"Nossos especialistas analisam seu item e retornam com um diagnostico detalhado e orcamento personalizado."}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20enviar%20fotos%20para%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:bg-primary-foreground/90"
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
            className="inline-flex items-center px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50 transition-colors duration-500 hover:text-primary-foreground"
          >
            Como funciona
          </Link>
        </div>
      </div>
    </section>
  )
}
