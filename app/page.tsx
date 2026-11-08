"use client"

import { Hero } from "@/components/home/hero"
import { BrandsStrip } from "@/components/home/brands-strip"
import { BeforeAfterPreview } from "@/components/home/before-after-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { FounderTeaser } from "@/components/home/founder-story"
import { ProcessTeaser } from "@/components/home/process-teaser"
import { Testimonials } from "@/components/home/testimonials"
import { CredibilityBar } from "@/components/home/credibility-bar"
import { PartnershipStory } from "@/components/home/partnership-story"
import { FinalCta } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <BeforeAfterPreview />
      <ServicesPreview />
      <FounderTeaser />
      <ProcessTeaser />
      <Testimonials />
      <CredibilityBar />
      <PartnershipStory variant="teaser" />
      <FinalCta />
    </>
  )
}
