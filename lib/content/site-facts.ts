export const SITE_URL = "https://sapatariapaulista.com.br"

export const FACTS = {
  yearsOfCraft: 24,
  piecesRestored: 15000,
  teamSize: 40,
}

export const STATS = [
  { value: FACTS.yearsOfCraft, suffix: "+", label: "Anos de ofício" },
  { value: FACTS.piecesRestored, suffix: "+", label: "Peças restauradas" },
  { value: FACTS.teamSize, suffix: "+", label: "Artesãos na equipe" },
]

export const TERMS = {
  turnaround: "45 a 60 dias",
  payment: "40% de entrada na aprovação do orçamento e o restante na retirada",
}

export const HASHTAG = "#LuxoSeCuida"

export function formatNumber(value: number) {
  return value.toLocaleString("pt-BR")
}
