"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useRef, useState } from "react"
import { STATS, formatNumber } from "@/lib/content/site-facts"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const start = performance.now()
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="font-serif text-4xl text-foreground tabular-nums lg:text-5xl">
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export function CredibilityBar() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="border-y border-border/30 bg-background px-6 py-20 lg:px-10 lg:py-28">
      <div className="stagger mx-auto grid max-w-[1100px] gap-12 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <span className="text-[10px] uppercase tracking-ultra-wide text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
