import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/content/site-facts"

const routes = ["", "/servicos", "/galeria", "/processo", "/sobre", "/avaliacao", "/contato", "/privacidade"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
