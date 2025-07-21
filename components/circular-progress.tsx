"use client"

import { useState, useEffect, useRef } from "react"
import type React from "react"

interface CircularProgressProps {
  percentage: number
  size?: number
  strokeWidth?: number
  children?: React.ReactNode
  showPercentage?: boolean
  animate?: boolean
}

export function CircularProgress({
  percentage,
  size = 80,
  strokeWidth = 8,
  children,
  showPercentage = false,
  animate = true,
}: CircularProgressProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible && animate) {
      const duration = 750 // Reduced from 1500ms to 750ms (double speed)
      const steps = 60
      const stepValue = percentage / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const newPercentage = Math.min(currentStep * stepValue, percentage)
        setAnimatedPercentage(newPercentage)

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    } else if (!animate) {
      setAnimatedPercentage(percentage)
    }
  }, [isVisible, percentage, animate])

  return (
    <div
      ref={elementRef}
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="progress-circle" width={size} height={size}>
        <circle
          className="text-muted-foreground/20"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="transition-all duration-300 ease-in-out"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="var(--accent-orange)"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transition: animate ? "stroke-dashoffset 0.1s ease-out" : "stroke-dashoffset 0.3s ease-in-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {showPercentage && isHovered ? (
          <div className="text-sm font-bold text-accent-orange">{Math.round(animatedPercentage)}%</div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
