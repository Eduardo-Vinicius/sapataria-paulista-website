"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-primary">
      {/* Background image with cinematic zoom */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-atelier.jpg"
          alt="Atelier de restauracao premium"
          fill
          className={`object-cover transition-all duration-[2.5s] ease-out ${
            loaded ? "scale-100 opacity-35" : "scale-110 opacity-0"
          }`}
          priority
          sizes="100vw"
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_0%_4%/0.7)_100%)]" />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
        {/* Micro label */}
        <p
          className={`text-[10px] uppercase tracking-ultra-wide text-accent transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Atelier Premium
        </p>

        {/* Main headline */}
        <h1 className="flex flex-col items-center gap-2">
          <span
            className={`block font-serif text-5xl leading-[1.1] text-primary-foreground transition-all duration-[1.2s] delay-700 md:text-7xl lg:text-[6.5rem] ${
              loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            {"Restauracao"}
          </span>
          <span
            className={`block font-serif text-5xl leading-[1.1] text-primary-foreground/40 transition-all duration-[1.2s] delay-[900ms] md:text-7xl lg:text-[6.5rem] ${
              loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-sm"
            }`}
          >
            {"de Luxo."}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`max-w-md text-sm leading-relaxed text-primary-foreground/50 transition-all duration-1000 delay-[1.2s] md:text-base ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {"Tenis, sapatos e artigos de couro tratados com precisao artesanal e acabamento impecavel."}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col items-center gap-4 sm:flex-row transition-all duration-1000 delay-[1.5s] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20enviar%20fotos%20para%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:bg-primary-foreground/90"
          >
            <span>Enviar fotos</span>
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
            href="/galeria"
            className="inline-flex items-center gap-2 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60 transition-colors duration-500 hover:text-primary-foreground"
          >
            Ver resultados
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-[2s] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <ArrowDown className="h-4 w-4 text-primary-foreground/25 animate-bounce" />
      </div>
    </section>
  )
}
