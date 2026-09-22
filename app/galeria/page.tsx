"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ComparisonSlider } from "@/components/comparison-slider"
import { X } from "lucide-react"

const categories = ["Todos", "Tênis", "Sapatos", "Couro", "Bolsas", "Atelier"] as const
type Category = (typeof categories)[number]

const galleryItems = [
  {
    id: 1,
    before: "/images/antes-sneaker.png",
    after: "/images/depois-sneaker.png",
    title: "Tênis Premium",
    category: "Tênis" as Category,
    work: "Limpeza profunda, restauração de solado e acabamento.",
    timeframe: "7 dias úteis",
    type: "before-after" as const,
  },
  {
    id: 2,
    before: "/images/antes-bolsa.png",
    after: "/images/depois-bolsa.png",
    title: "Bolsa de Couro",
    category: "Bolsas" as Category,
    work: "Hidratação, restauração de cor e polimento de ferragens.",
    timeframe: "10 dias úteis",
    type: "before-after" as const,
  },
  {
    id: 3,
    before: "/images/antes-sapato.png",
    after: "/images/depois-sapato.png",
    title: "Sapato Social",
    category: "Sapatos" as Category,
    work: "Polimento, solado e tingimento artesanal.",
    timeframe: "8 dias úteis",
    type: "before-after" as const,
  },
]

const craftItems = [
  {
    id: 10,
    src: "/images/thiago-147.jpg",
    title: "Thiago Landes",
    category: "Atelier" as Category,
    caption: "O fundador em ação — o gesto que define o ofício.",
  },
  {
    id: 11,
    src: "/images/thiago-65.jpg",
    title: "Bolsa Louis Vuitton",
    category: "Bolsas" as Category,
    caption: "Restauração de grife na bancada do atelier.",
  },
  {
    id: 12,
    src: "/images/ofício-chanel.jpg",
    title: "Chanel — pintura & revitalização",
    category: "Bolsas" as Category,
    caption: "Pigmentos profissionais sobre couro quilted.",
  },
  {
    id: 13,
    src: "/images/ofício-tênis.jpg",
    title: "Costura de tênis",
    category: "Tênis" as Category,
    caption: "Maquina industrial e mão firme no detalhe.",
  },
  {
    id: 14,
    src: "/images/ofício-sapato.jpg",
    title: "Acabamento de solado",
    category: "Sapatos" as Category,
    caption: "Loafer de grife sob tratamento artesanal.",
  },
  {
    id: 15,
    src: "/images/ofício-lv-interior.jpg",
    title: "Interior Louis Vuitton",
    category: "Couro" as Category,
    caption: "Precisão em ferragens e forro.",
  },
  {
    id: 16,
    src: "/images/atelier-bancada.jpg",
    title: "Bancada do atelier",
    category: "Atelier" as Category,
    caption: "Galeria 2001 — onde a peça vira obra.",
  },
  {
    id: 17,
    src: "/images/ofício-bolsa-costura.jpg",
    title: "Costura em bolsa",
    category: "Bolsas" as Category,
    caption: "Agulha, couro e paciência de atelier.",
  },
]

export default function GaleriaPage() {
  const ref = useScrollAnimation()
  const [activeFilter, setActiveFilter] = useState<Category>("Todos")
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [selectedCraft, setSelectedCraft] = useState<(typeof craftItems)[0] | null>(null)

  const filteredBeforeAfter =
    activeFilter === "Todos" || activeFilter === "Atelier"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const filteredCraft =
    activeFilter === "Todos"
      ? craftItems
      : craftItems.filter((item) => item.category === activeFilter)

  return (
    <div ref={ref}>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden px-6 pb-20 pt-36 lg:px-10">
        <div className="absolute inset-0">
          <Image
            src="/images/ofício-chanel-2.jpg"
            alt="Restauração Chanel no atelier"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">
            Galeria
          </p>
          <h1 className="animate-on-scroll mt-6 font-serif text-4xl text-white lg:text-7xl">
            Ofício em imagens
          </h1>
          <p className="animate-on-scroll mt-6 max-w-lg text-sm leading-relaxed text-white/55">
            Antes e depois, close-ups do atelier e o trabalho de Thiago Landes —
            a prova visual do padrão Sapataria Paulista.
          </p>
        </div>
      </section>

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

      {filteredCraft.length > 0 && (
        <section className="px-6 pt-20 lg:px-10 lg:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="animate-on-scroll mb-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Atelier</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">
                Bastidores do ofício
              </h2>
            </div>
            <div className="stagger-children grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {filteredCraft.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedCraft(item)}
                  className="group relative aspect-[3/4] overflow-hidden text-left"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-accent">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-serif text-lg text-white">{item.title}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredBeforeAfter.length > 0 && activeFilter !== "Atelier" && (
        <section className="px-6 py-24 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-[1400px]">
            <div className="animate-on-scroll mb-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Resultados</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">
                Antes & Depois
              </h2>
            </div>
            <div className="stagger-children grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBeforeAfter.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group flex flex-col gap-4 border border-border/40 text-left transition-all duration-500 hover:border-accent/30"
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
                    <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.timeframe}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedItem && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes de ${selectedItem.title}`}
        >
          <div
            className="relative w-full max-w-3xl border border-border/50 bg-background"
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
              <h3 className="font-serif text-2xl text-foreground">{selectedItem.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{selectedItem.work}</p>
              <Link
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vi%20um%20caso%20parecido%20na%20galeria%20e%20gostaria%20de%20enviar%20fotos."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 self-start bg-accent px-6 py-3 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-accent/90"
              >
                Enviar fotos de um caso parecido
              </Link>
            </div>
          </div>
        </div>
      )}

      {selectedCraft && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCraft(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCraft.title}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden border border-border/50 bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCraft(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center border border-border bg-background/80 text-muted-foreground backdrop-blur hover:border-accent hover:text-accent"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
              <Image
                src={selectedCraft.src}
                alt={selectedCraft.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                {selectedCraft.category}
              </span>
              <h3 className="font-serif text-2xl text-foreground">{selectedCraft.title}</h3>
              <p className="text-sm text-muted-foreground">{selectedCraft.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
