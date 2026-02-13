"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const start = performance.now()
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
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
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 22, suffix: "+", label: "Anos de experiencia" },
  { value: 15000, suffix: "+", label: "Itens restaurados" },
  { value: 99, suffix: "%", label: "Clientes satisfeitos" },
  { value: 48, suffix: "h", label: "Resposta media" },
]

export function CredibilityBar() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} className="border-y border-border/30 bg-background px-6 py-20 lg:px-10 lg:py-28">
      <div className="stagger mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <span className="text-[10px] uppercase tracking-ultra-wide text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
