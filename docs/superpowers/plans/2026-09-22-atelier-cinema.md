# Atelier Cinema Implementation Plan

> **For agentic workers:** Execute task-by-task. Checkboxes track progress.

**Goal:** Full-site cinematic premium upgrade centered on Thiago Landes and real atelier photography.

**Architecture:** Keep Next.js App Router + existing dark/gold/serif system. Swap assets, rewrite key home/about/services sections, refine motion in globals.css.

**Tech Stack:** Next.js, Tailwind, existing scroll-animation hooks.

## Global Constraints

- No wife photo until provided
- Keep WhatsApp placeholders as-is
- Prefer real `public/images/thiago-*` and `oficio-*` assets
- Dark mode + gold accent + Playfair/Inter unchanged at token level

---

### Task 1: Home hero + founder cinematic block
- [x] Upgrade `hero.tsx` (atmosphere, typography, ken-burns)
- [x] Rewrite `founder-story.tsx` with 147 + 65/101 strip

### Task 2: Home supporting sections
- [x] Services preview with oficio photos
- [x] Process teaser + Final CTA imagery/copy
- [x] Credibility bar copy alignment

### Task 3: Sobre / Serviços / Processo
- [x] Thiago-first Sobre
- [x] Serviços with real photos
- [x] Processo steps with oficio images

### Task 4: Galeria / Contato / motion polish
- [x] Galeria craft mosaic + existing before/after
- [x] Contato atmosphere
- [x] Motion utilities in globals.css
