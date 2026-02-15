"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/capa2.png"
          alt="Atelier de restauracao premium"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark sophisticated overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/80 to-black/85" />
      </div>

      {/* Centered luxury content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center max-w-2xl">
        {/* Brand name - elegant label */}
        <p
          className={`text-sm md:text-base uppercase tracking-[0.3em] text-accent transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Sapataria Paulista
        </p>

        {/* Main headline - premium gold */}
        <h1
          className={`font-serif text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-accent font-bold transition-all duration-700 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Restauracao Premium
        </h1>

        {/* Secondary subtitle */}
        <p
          className={`text-sm md:text-base uppercase tracking-[0.2em] text-white/60 transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Avaliacao Premium Incluida
        </p>

        {/* Subtitle - elegant description */}
        <p
          className={`text-lg md:text-xl leading-relaxed text-white/85 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A referencia nacional em restauracao de luxo. Transformamos seus tenis, sapatos e artigos de couro favoritos em obras de arte.
        </p>

        {/* CTA Button - primary action */}
        <div
          className={`pt-6 transition-all duration-700 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-base font-semibold text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar Avaliacao
          </Link>
        </div>
      </div>
    </section>
  )
}
