"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { GOOGLE_REVIEWS, TESTIMONIALS } from "@/lib/content/testimonials"

export function Testimonials() {
  const ref = useScrollAnimation()

  if (TESTIMONIALS.length === 0) return null

  return (
    <section ref={ref} className="bg-card px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal mb-14 flex flex-col items-center gap-4 text-center">
          <p className="text-[10px] uppercase tracking-ultra-wide text-accent">Depoimentos</p>
          <h2 className="font-serif text-3xl text-foreground lg:text-5xl">Quem confia no atelier</h2>
          {GOOGLE_REVIEWS.rating && GOOGLE_REVIEWS.total && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>
                {GOOGLE_REVIEWS.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} no Google ·{" "}
                {GOOGLE_REVIEWS.total} avaliações
              </span>
            </div>
          )}
        </div>

        <div className="stagger grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name + testimonial.item} className="flex flex-col gap-6 border border-border/50 bg-background p-8">
              <blockquote className="font-serif text-lg leading-relaxed text-foreground">
                {`“${testimonial.text}”`}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                {testimonial.photo && (
                  <span className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src={testimonial.photo} alt={testimonial.name} fill className="object-cover" sizes="40px" />
                  </span>
                )}
                <span className="flex flex-col">
                  <span className="text-xs font-medium text-foreground">{testimonial.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{testimonial.item}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {GOOGLE_REVIEWS.url && (
          <div className="reveal mt-12 flex justify-center">
            <Link
              href={GOOGLE_REVIEWS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
            >
              Ver todas as avaliações no Google
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
