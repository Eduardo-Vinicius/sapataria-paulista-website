"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex min-h-[100dvh] items-end justify-center overflow-hidden pb-20 pt-32 md:items-center md:pb-0 md:pt-0">
      <div className="absolute inset-0">
        <Image
          src="/images/capa2.png"
          alt="Atelier de restauração premium Sapataria Paulista"
          fill
          className={`object-cover transition-transform duration-[8s] ease-out ${
            loaded ? "scale-100" : "scale-110"
          }`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-5 px-6 text-center md:gap-7">
        <p
          className={`text-[11px] uppercase tracking-[0.42em] text-accent transition-all duration-1000 md:text-sm ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Sapataria Paulista
        </p>

        <h1
          className={`font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white transition-all delay-100 duration-1000 md:text-7xl lg:text-8xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Restauração
          <span className="mt-1 block text-accent">de Luxo</span>
        </h1>

        <p
          className={`max-w-xl text-base leading-relaxed text-white/75 transition-all delay-200 duration-1000 md:text-lg ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Atelier paulista liderado por Thiago Landes. Tênis, sapatos e bolsas
          de grife restaurados com precisão artesanal.
        </p>

        <div
          className={`flex flex-col items-center gap-4 pt-4 transition-all delay-300 duration-1000 sm:flex-row ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-foreground transition-all duration-500 hover:bg-accent/90"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar Avaliação
          </Link>
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-white/55 transition-colors duration-500 hover:text-white"
          >
            Conhecer Thiago
          </Link>
        </div>
      </div>
    </section>
  )
}
