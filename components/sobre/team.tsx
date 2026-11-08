import Image from "next/image"
import { TEAM_PHOTOS } from "@/lib/content/timeline"
import { FACTS } from "@/lib/content/site-facts"

export function Team() {
  if (TEAM_PHOTOS.length === 0) return null

  return (
    <section className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col gap-4 lg:max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Equipe e fábrica</p>
          <h2 className="font-serif text-3xl text-foreground lg:text-5xl">Mais de {FACTS.teamSize} artesãos</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_PHOTOS.map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
