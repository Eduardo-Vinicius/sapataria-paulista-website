import { FOUNDER_VIDEO_URL } from "@/lib/content/timeline"

function youtubeEmbedUrl(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/)
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : null
}

export function FounderVideo() {
  if (!FOUNDER_VIDEO_URL) return null

  const embed = youtubeEmbedUrl(FOUNDER_VIDEO_URL)

  return (
    <section className="px-6 pb-8 lg:px-10">
      <div className="mx-auto max-w-[1000px]">
        <div className="relative aspect-video w-full overflow-hidden border border-border/50 bg-card">
          {embed ? (
            <iframe
              src={embed}
              title="Thiago Landes conta a história da Sapataria Paulista"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video src={FOUNDER_VIDEO_URL} controls playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
          )}
        </div>
      </div>
    </section>
  )
}
