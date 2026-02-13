"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"

interface ComparisonSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(2, Math.min(98, (x / rect.width) * 100))
    setPosition(percent)
  }, [])

  const handleMouseDown = useCallback(() => {
    isDragging.current = true
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX)
    },
    [updatePosition]
  )

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden bg-primary"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      role="slider"
      aria-label="Comparacao antes e depois"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(2, p - 2))
        if (e.key === "ArrowRight") setPosition((p) => Math.min(98, p + 2))
      }}
    >
      {/* After image (full) */}
      <Image
        src={afterImage}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-px bg-primary-foreground/60"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-primary-foreground/90 backdrop-blur-sm shadow-lg">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-primary"
          >
            <path
              d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute left-3 bottom-3 z-10 bg-primary/70 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-primary-foreground/70 backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute right-3 bottom-3 z-10 bg-primary/70 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-primary-foreground/70 backdrop-blur-sm">
        Depois
      </span>
    </div>
  )
}
