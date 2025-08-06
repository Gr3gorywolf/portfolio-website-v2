"use client"

import { useInView } from "@/hooks/useInView"
import type React from "react"

interface AnimatedWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "stagger"
  delay?: number
  duration?: number
}

export function AnimatedWrapper({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
}: AnimatedWrapperProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-[${duration}ms]`
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : ""

    switch (animation) {
      case "fade-up":
        return `${baseClasses}  ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`
      case "fade-in":
        return `${baseClasses}  ${isInView ? "opacity-100" : "opacity-0"}`
      case "slide-left":
        return `${baseClasses}  ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`
      case "slide-right":
        return `${baseClasses}  ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`
      case "scale":
        return `${baseClasses}  ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`
      case "stagger":
        return `${baseClasses}  ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`
      default:
        return `${baseClasses} `
    }
  }

  return (
    <div ref={ref} style={{ 
        transitionDelay: isInView ? `${delay}ms` : "0ms",
        transitionDuration: isInView ? `${duration}ms` : "0ms"
     }} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
