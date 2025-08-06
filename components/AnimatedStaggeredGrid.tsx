"use client"

import { useInView } from "@/hooks/useInView"
import type React from "react"

interface StaggeredGridProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}

export function AnimatedStaggeredGrid({ children, className = "", staggerDelay = 75 }: StaggeredGridProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            transitionDelay: isInView ? `${index * staggerDelay}ms` : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
