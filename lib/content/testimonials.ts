export type Testimonial = {
  text: string
  name: string
  item: string
  photo?: string
}

export const TESTIMONIALS: Testimonial[] = []

export const GOOGLE_REVIEWS = {
  rating: null as number | null,
  total: null as number | null,
  url: null as string | null,
}
