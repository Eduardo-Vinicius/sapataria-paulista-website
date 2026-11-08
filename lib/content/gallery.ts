export const GALLERY_CATEGORIES = ["Bolsas", "Sapatos", "Tênis", "Malas", "Atelier"] as const
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]

export type GalleryPhoto = {
  src: string
  title: string
  caption: string
  category: GalleryCategory
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/oficio-chanel.jpg",
    title: "Chanel · pintura do couro caviar",
    caption: "Aplicação de tinta profissional em bolsa Chanel matelassê.",
    category: "Bolsas",
  },
  {
    src: "/images/oficio-chanel-2.jpg",
    title: "Chanel Camera Bag · pintura",
    caption: "Retoque de cor feito a pincel, camada por camada.",
    category: "Bolsas",
  },
  {
    src: "/images/thiago-65.jpg",
    title: "Louis Vuitton · tratamento da alça",
    caption: "Thiago Landes trata a alça de uma bolsa Louis Vuitton Monogram.",
    category: "Bolsas",
  },
  {
    src: "/images/oficio-lv-limpeza.jpg",
    title: "Louis Vuitton Speedy · higienização",
    caption: "Limpeza da lona e da vachetta ao redor do zíper.",
    category: "Bolsas",
  },
  {
    src: "/images/oficio-lv-interior.jpg",
    title: "Louis Vuitton · reparo interno",
    caption: "Ajuste de rebite e ferragem no forro da bolsa.",
    category: "Bolsas",
  },
  {
    src: "/images/oficio-bolsa-costura.jpg",
    title: "Bolsa · fixação de argola",
    caption: "Reparo da fixação da argola dourada com agulha curva.",
    category: "Bolsas",
  },
  {
    src: "/images/oficio-sapato.jpg",
    title: "Ferragamo · borda italiana",
    caption: "Acabamento da borda do solado de um mocassim Ferragamo.",
    category: "Sapatos",
  },
  {
    src: "/images/oficio-bancada.jpg",
    title: "Repetto · reforço",
    caption: "Corte e preparo de reforço para sapatilha Repetto.",
    category: "Sapatos",
  },
  {
    src: "/images/thiago-101.jpg",
    title: "Sandália bordada · reparo de aplicação",
    caption: "Recolocação de aplicações em sandália de festa.",
    category: "Sapatos",
  },
  {
    src: "/images/oficio-tenis.jpg",
    title: "Tênis · recostura",
    caption: "Recostura do cabedal na máquina industrial.",
    category: "Tênis",
  },
  {
    src: "/images/thiago-147.jpg",
    title: "Thiago Landes na Avenida Paulista",
    caption: "Onde tudo começou: o engraxe na calçada da Paulista.",
    category: "Atelier",
  },
  {
    src: "/images/thiago-retrato.jpg",
    title: "Thiago Landes",
    caption: "Fundador da Sapataria Paulista.",
    category: "Atelier",
  },
  {
    src: "/images/atelier-bancada.jpg",
    title: "Bancada do atelier",
    caption: "Nosso atelier na Galeria 2001.",
    category: "Atelier",
  },
]
