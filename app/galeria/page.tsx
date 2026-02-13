"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ComparisonSlider } from "@/components/comparison-slider"
import { X } from "lucide-react"

const categories = ["Todos", "Tenis", "Sapatos", "Couro", "Bolsas"] as const
type Category = (typeof categories)[number]

const galleryItems = [
  {
    id: 1,
    before: "/images/before-sneaker.jpg",
    after: "/images/after-sneaker.jpg",
    title: "Air Jordan 1 Retro",
    category: "Tenis" as Category,
    work: "Limpeza profunda, restauracao de solado, tingimento e acabamento.",
    timeframe: "7 dias uteis",
  },
  {
    id: 2,
    before: "/images/before-bag.jpg",
    after: "/images/after-bag.jpg",
    title: "Bolsa Gucci Marmont",
    category: "Bolsas" as Category,
    work: "Hidratacao de couro, restauracao de cor, polimento de ferragens.",
    timeframe: "10 dias uteis",
  },
  {
    id: 3,
    before: "/images/before-shoes.jpg",
    after: "/images/after-shoes.jpg",
    title: "Sapato Ferragamo",
    category: "Sapatos" as Category,
    work: "Polimento completo, restauracao de solado, tingimento artesanal.",
    timeframe: "8 dias uteis",
  },
  {
    id: 4,
    before: "/images/before-sneaker.jpg",
    after: "/images/after-sneaker.jpg",
    title: "Yeezy Boost 350",
    category: "Tenis" as Category,
    work: "Higienizacao premium, restauracao de entressola, whitening.",
    timeframe: "5 dias uteis",
  },
  {
    id: 5,
    before: "/images/before-bag.jpg",
    after: "/images/after-bag.jpg",
    title: "Carteira Louis Vuitton",
    category: "Couro" as Category,
    work: "Limpeza de couro, restauracao de cantos, hidratacao profunda.",
    timeframe: "6 dias uteis",
  },
  {
    id: 6,
    before: "/images/before-shoes.jpg",
    after: "/images/after-shoes.jpg",
    title: "Oxford Handmade",
    category: "Sapatos" as Category,
    work: "Recostura, troca de solado, tingimento e acabamento premium.",
    timeframe: "12 dias uteis",
  },
]

export default function GaleriaPage() {
  const ref = useScrollAnimation()
  const [activeFilter, setActiveFilter] = useState<Category>("Todos")
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null)

  const filtered =
    activeFilter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="flex min-h-[60vh] items-end bg-primary px-6 pb-20 pt-36 lg:px-10">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">
            Galeria
          </p>
          <h1 className="animate-on-scroll mt-6 font-serif text-4xl text-primary-foreground lg:text-7xl">
            Antes & Depois
          </h1>
          <p className="animate-on-scroll mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/40">
            {"Resultados reais de restauracoes realizadas em nosso atelier. Cada projeto e unico e tratado com a maxima dedicacao."}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border/20 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                activeFilter === cat
                  ? "border border-accent bg-accent text-accent-foreground"
                  : "border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <div className="stagger-children grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group flex flex-col gap-4 border border-border/50 text-left transition-all duration-500 hover:border-accent/30"
              >
                <ComparisonSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  beforeAlt={`${item.title} antes`}
                  afterAlt={`${item.title} depois`}
                />
                <div className="flex flex-col gap-1 px-5 pb-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.timeframe}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes de ${selectedItem.title}`}
        >
          <div
            className="relative w-full max-w-3xl bg-background border border-border/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <ComparisonSlider
              beforeImage={selectedItem.before}
              afterImage={selectedItem.after}
              beforeAlt={`${selectedItem.title} antes`}
              afterAlt={`${selectedItem.title} depois`}
            />

            <div className="flex flex-col gap-3 p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                {selectedItem.category}
              </span>
              <h3 className="font-serif text-2xl text-foreground">
                {selectedItem.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {selectedItem.work}
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">Prazo:</span>{" "}
                {selectedItem.timeframe}
              </p>
              <Link
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vi%20um%20caso%20parecido%20na%20galeria%20e%20gostaria%20de%20enviar%20fotos."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 group inline-flex items-center gap-2 bg-accent px-6 py-3 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90 self-start"
              >
                <span>Enviar fotos de um caso parecido</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
