export type Milestone = {
  year: string | null
  title: string
  text: string
  image?: { src: string; alt: string }
}

export const TIMELINE: Milestone[] = [
  {
    year: null,
    title: "O começo",
    text: "Aos 13 anos, Thiago engraxava sapatos na Avenida Paulista. Ali aprendeu a olhar o couro, encontrar o brilho certo e respeitar cada peça.",
  },
  {
    year: null,
    title: "A virada",
    text: "Do engraxe para a restauração: o primeiro ponto próprio e os primeiros clientes fiéis, que passaram a confiar a ele peças cada vez mais especiais.",
  },
  {
    year: null,
    title: "Formação internacional",
    text: "Treinamentos da Vibram em Milão e imersão com Sergio Alberine trouxeram para o atelier técnicas e materiais do mais alto padrão.",
  },
  {
    year: null,
    title: "O atelier hoje",
    text: "Na Galeria 2001, ao lado do Conjunto Nacional, uma equipe de artesãos, fábrica própria e insumos importados da Itália.",
    image: { src: "/images/atelier-bancada.jpg", alt: "Bancada do atelier da Sapataria Paulista na Galeria 2001" },
  },
  {
    year: null,
    title: "As marcas na bancada",
    text: "Hermès, Chanel, Louis Vuitton, Ferragamo e tênis de coleção passam todos os dias pelas mãos da equipe.",
    image: { src: "/images/oficio-chanel.jpg", alt: "Pintura de bolsa Chanel no atelier" },
  },
  {
    year: null,
    title: "Luxo se cuida",
    text: "A filosofia da casa: cuidar para que cada peça dure gerações.",
  },
]

export const FOUNDER_VIDEO_URL: string | null = null

export const TEAM_PHOTOS: { src: string; alt: string }[] = []
