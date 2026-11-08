import { ADDRESS, INSTAGRAM_URL, OPENING_HOURS, WHATSAPP_NUMBER, YOUTUBE_URL } from "@/lib/contact"
import { SITE_URL } from "@/lib/content/site-facts"
import { GOOGLE_REVIEWS } from "@/lib/content/testimonials"

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Sapataria Paulista",
    description: "Atelier de restauração de bolsas, sapatos e tênis de luxo na Avenida Paulista.",
    url: SITE_URL,
    image: `${SITE_URL}/images/og-sapataria-paulista.jpg`,
    logo: `${SITE_URL}/icon.png`,
    telephone: `+${WHATSAPP_NUMBER}`,
    founder: { "@type": "Person", name: "Thiago Landes" },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.postalCode,
      addressCountry: "BR",
    },
    openingHoursSpecification: OPENING_HOURS.filter((hours) => hours.opens).map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    })),
    sameAs: [INSTAGRAM_URL, YOUTUBE_URL].filter(Boolean),
    ...(GOOGLE_REVIEWS.rating && GOOGLE_REVIEWS.total
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: GOOGLE_REVIEWS.rating,
            reviewCount: GOOGLE_REVIEWS.total,
          },
        }
      : {}),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
