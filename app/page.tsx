"use client"

import { Hero } from "@/components/home/hero"
import { CredibilityBar } from "@/components/home/credibility-bar"
import { ServicesPreview } from "@/components/home/services-preview"
import { BeforeAfterPreview } from "@/components/home/before-after-preview"
import { ProcessTeaser } from "@/components/home/process-teaser"
import { Testimonials } from "@/components/home/testimonials"
import { FinalCta } from "@/components/home/final-cta"
import { FounderStory } from "@/components/home/founder-story"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FounderStory />
      <CredibilityBar />
      <ServicesPreview />
      <BeforeAfterPreview />
      <ProcessTeaser />
      <Testimonials />
      <FinalCta />
    </>
  )
}
