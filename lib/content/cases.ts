export type BeforeAfterCase = {
  before: string
  after: string
  title: string
  service: string
  category: "Bolsas" | "Sapatos" | "Tênis" | "Malas"
}

export const CASES: BeforeAfterCase[] = [
  {
    before: "/images/antes-bolsa.png",
    after: "/images/depois-bolsa.png",
    title: "Bolsa de couro",
    service: "Hidratação do couro e revitalização da cor",
    category: "Bolsas",
  },
  {
    before: "/images/antes-sapato.png",
    after: "/images/depois-sapato.png",
    title: "Sapato social",
    service: "Polimento, solado e tingimento",
    category: "Sapatos",
  },
  {
    before: "/images/antes-sneaker.png",
    after: "/images/depois-sneaker.png",
    title: "Tênis",
    service: "Higienização e restauração do solado",
    category: "Tênis",
  },
]
