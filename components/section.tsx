"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className, id, dark }: SectionProps) {
  const ref = useScrollAnimation()

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "px-6 py-20 lg:px-8 lg:py-28",
        dark && "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
