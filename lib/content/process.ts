import { TERMS } from "@/lib/content/site-facts"

export type ProcessStep = {
  number: string
  title: string
  description: string
  youReceive: string
  image?: { src: string; alt: string }
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Envie fotos",
    description: "Mande fotos da peça pelo WhatsApp, de frente, de lado e dos detalhes que mais incomodam.",
    youReceive: "Uma primeira avaliação do que pode ser feito.",
  },
  {
    number: "02",
    title: "Diagnóstico e orçamento",
    description: "Analisamos o material, o desgaste e definimos o serviço certo para a peça.",
    youReceive: `Orçamento por escrito e prazo, em média de ${TERMS.turnaround}. Nada começa sem a sua aprovação.`,
    image: { src: "/images/thiago-65.jpg", alt: "Thiago Landes avaliando a alça de uma bolsa Louis Vuitton" },
  },
  {
    number: "03",
    title: "Execução",
    description: "A peça passa pela bancada: higienização, hidratação, pintura, borda italiana ou reparo estrutural.",
    youReceive: "Atualizações do andamento quando necessário.",
    image: { src: "/images/oficio-chanel.jpg", alt: "Pintura de bolsa Chanel na bancada do atelier" },
  },
  {
    number: "04",
    title: "Entrega",
    description: "Revisão final de cor, acabamento e estrutura antes de liberar a peça.",
    youReceive: "Aviso de que a peça está pronta para retirada.",
  },
]
