export type Service = {
  slug: string
  title: string
  description: string
  details: string[]
  image?: { src: string; alt: string }
}

export const SERVICES: Service[] = [
  {
    slug: "pintura",
    title: "Pintura e revitalização",
    description:
      "Recuperação da cor original ou mudança de tom com tintas e pigmentos profissionais, em bolsas, sapatos e tênis.",
    details: ["Restauração da cor original", "Mudança de cor sob encomenda", "Acabamento fosco, acetinado ou brilhante"],
    image: { src: "/images/oficio-chanel.jpg", alt: "Pintura de bolsa Chanel de couro caviar no atelier" },
  },
  {
    slug: "troca-de-couro-e-forro",
    title: "Troca de couro e forro",
    description:
      "Substituição de partes de couro gastas e de forros internos, respeitando o desenho e o acabamento original da peça.",
    details: ["Troca de forro interno", "Substituição de alças e vivos", "Reposição de partes de couro"],
    image: { src: "/images/oficio-lv-interior.jpg", alt: "Reparo no forro interno de bolsa Louis Vuitton" },
  },
  {
    slug: "banho-de-metais",
    title: "Banho de metais",
    description: "Recuperação do brilho e da cor de fivelas, argolas, fechos e demais ferragens.",
    details: ["Banho em ferragens douradas e prateadas", "Polimento de metais", "Reposição de peças quando necessário"],
    image: { src: "/images/oficio-bolsa-costura.jpg", alt: "Reparo de alça e ferragem dourada em bolsa" },
  },
  {
    slug: "higienizacao",
    title: "Higienização",
    description: "Limpeza profunda que remove manchas, sujeira e odores sem agredir o material.",
    details: ["Couro, lona, camurça e tecidos", "Remoção de manchas", "Higienização interna e desodorização"],
    image: { src: "/images/oficio-lv-limpeza.jpg", alt: "Higienização de bolsa Louis Vuitton Speedy" },
  },
  {
    slug: "hidratacao-do-couro",
    title: "Hidratação do couro",
    description: "Nutrição do couro para devolver maciez, evitar ressecamento e prevenir rachaduras.",
    details: ["Hidratação profunda", "Tratamento de vachetta", "Proteção contra ressecamento"],
    image: { src: "/images/oficio-lv-detalhe.jpg", alt: "Hidratação do couro de bolsa Louis Vuitton" },
  },
  {
    slug: "borda-italiana",
    title: "Borda italiana",
    description: "Acabamento das bordas do couro com tinta própria, aplicada e lixada em camadas.",
    details: ["Pintura de bordas de alças e bolsas", "Acabamento de bordas de solados", "Correção de bordas descascadas"],
    image: { src: "/images/oficio-sapato.jpg", alt: "Acabamento da borda do solado de mocassim Ferragamo" },
  },
  {
    slug: "camurca",
    title: "Camurça",
    description: "Limpeza e recuperação de camurça e nobuck, devolvendo a textura e a cor do material.",
    details: ["Limpeza a seco e úmida", "Recuperação da textura", "Tingimento de camurça"],
  },
  {
    slug: "ziperes-e-fechos",
    title: "Zíperes e fechos",
    description: "Troca e reparo de zíperes, cursores, fechos e botões de pressão.",
    details: ["Troca de zíper", "Reparo de cursores", "Ajuste de fechos e travas"],
  },
  {
    slug: "rodas-e-carrinhos-de-malas",
    title: "Rodas e carrinhos de malas",
    description: "Troca de rodas, puxadores e carrinhos de malas de viagem.",
    details: ["Troca de rodas", "Reparo do carrinho e do puxador", "Reparo de alças"],
  },
  {
    slug: "reparos-estruturais",
    title: "Reparos estruturais",
    description: "Recostura, troca de solado e reforço da estrutura de bolsas, sapatos e tênis.",
    details: ["Recostura e reforço de costuras", "Troca e ajuste de solado", "Reforço de estrutura e palmilhas"],
    image: { src: "/images/oficio-tenis.jpg", alt: "Recostura de tênis na máquina industrial" },
  },
]

export const HOME_SERVICES = [
  { slug: "higienizacao", title: "Higienização", image: "/images/oficio-lv-limpeza.jpg" },
  { slug: "hidratacao-do-couro", title: "Hidratação do couro", image: "/images/oficio-lv-detalhe.jpg" },
  { slug: "pintura", title: "Pintura e revitalização", image: "/images/oficio-chanel.jpg" },
  { slug: "borda-italiana", title: "Borda italiana", image: "/images/oficio-sapato.jpg" },
]
