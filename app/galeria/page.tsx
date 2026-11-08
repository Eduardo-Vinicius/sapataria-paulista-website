"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ComparisonSlider } from "@/components/comparison-slider"
import { whatsappLink } from "@/lib/contact"
import { galleryCaseMessage } from "@/lib/content/whatsapp-messages"
import { CASES, type BeforeAfterCase } from "@/lib/content/cases"
import { GALLERY_CATEGORIES, GALLERY_PHOTOS, type GalleryCategory, type GalleryPhoto } from "@/lib/content/gallery"

type Filter = "Todos" | GalleryCategory

const filters: Filter[] = [
  "Todos",
  ...GALLERY_CATEGORIES.filter(
    (category) =>
      GALLERY_PHOTOS.some((photo) => photo.category === category) ||
      CASES.some((item) => item.category === category),
  ),
]

export default function GaleriaPage() {
  const ref = useScrollAnimation()
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos")
  const [selectedCase, setSelectedCase] = useState<BeforeAfterCase | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null)

  const cases = activeFilter === "Todos" ? CASES : CASES.filter((item) => item.category === activeFilter)
  const photos =
    activeFilter === "Todos" ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((photo) => photo.category === activeFilter)

  return (
    <div ref={ref}>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden px-6 pb-20 pt-36 lg:px-10">
        <div className="absolute inset-0">
          <Image
            src="/images/oficio-chanel-2.jpg"
            alt="Pintura de bolsa Chanel no atelier"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <p className="animate-on-scroll text-[10px] uppercase tracking-ultra-wide text-accent">Galeria</p>
          <h1 className="animate-on-scroll mt-6 font-serif text-4xl text-white lg:text-7xl">Nosso trabalho</h1>
          <p className="animate-on-scroll mt-6 max-w-lg text-sm leading-relaxed text-white/55">
            Antes e depois e o dia a dia do atelier, com a marca e o serviço de cada peça.
          </p>
        </div>
      </section>

      <section className="border-b border-border/20 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                activeFilter === filter
                  ? "border border-accent bg-accent text-accent-foreground"
                  : "border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {cases.length > 0 && (
        <section className="px-6 pt-20 lg:px-10 lg:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="animate-on-scroll mb-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Resultados</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">Antes & Depois</h2>
            </div>
            <div className="stagger-children grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((item) => (
                <button
                  key={item.before}
                  onClick={() => setSelectedCase(item)}
                  className="group flex flex-col gap-4 border border-border/40 text-left transition-all duration-500 hover:border-accent/30"
                >
                  <ComparisonSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    beforeAlt={`${item.title} antes: ${item.service}`}
                    afterAlt={`${item.title} depois: ${item.service}`}
                  />
                  <div className="flex flex-col gap-1 px-5 pb-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{item.category}</span>
                    <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.service}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {photos.length > 0 && (
        <section className="px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1400px]">
            <div className="animate-on-scroll mb-10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Atelier</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">Por dentro do atelier</h2>
            </div>
            <div className="stagger-children grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {photos.map((photo) => (
                <button
                  key={photo.src}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative aspect-[3/4] overflow-hidden text-left"
                >
                  <Image
                    src={photo.src}
                    alt={`${photo.title}. ${photo.caption}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-accent">{photo.category}</span>
                    <h3 className="mt-1 font-serif text-lg text-white">{photo.title}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedCase && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCase(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes de ${selectedCase.title}`}
        >
          <div
            className="relative w-full max-w-3xl border border-border/50 bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center border border-border bg-background/80 text-muted-foreground transition-all hover:border-accent hover:text-accent"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
            <ComparisonSlider
              beforeImage={selectedCase.before}
              afterImage={selectedCase.after}
              beforeAlt={`${selectedCase.title} antes`}
              afterAlt={`${selectedCase.title} depois`}
            />
            <div className="flex flex-col gap-3 p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{selectedCase.category}</span>
              <h3 className="font-serif text-2xl text-foreground">{selectedCase.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{selectedCase.service}</p>
              <Link
                href={whatsappLink(galleryCaseMessage(selectedCase.title, selectedCase.service))}
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

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden border border-border/50 bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center border border-border bg-background/80 text-muted-foreground backdrop-blur hover:border-accent hover:text-accent"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
              <Image
                src={selectedPhoto.src}
                alt={`${selectedPhoto.title}. ${selectedPhoto.caption}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{selectedPhoto.category}</span>
              <h3 className="font-serif text-2xl text-foreground">{selectedPhoto.title}</h3>
              <p className="text-sm text-muted-foreground">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
