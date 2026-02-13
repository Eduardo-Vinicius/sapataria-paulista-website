"use client"

import { useEffect, useRef } from "react"

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    )

    const selectors = [
      ".reveal",
      ".reveal-scale",
      ".reveal-blur",
      ".stagger",
      ".animate-on-scroll",
      ".animate-on-scroll-left",
      ".stagger-children",
    ]

    const targets = element.querySelectorAll(selectors.join(", "))
    targets.forEach((target) => observer.observe(target))

    // Also observe the element itself
    const classes = element.classList
    if (
      selectors.some((s) => classes.contains(s.replace(".", "")))
    ) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
