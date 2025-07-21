"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { User, Code, GraduationCap, Briefcase, FolderOpen } from "lucide-react"

const navItems = [
  { id: "personal", label: "Personal", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "featured-projects", label: "Projects", icon: FolderOpen },
  { id: "skills", label: "Skills", icon: Code },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("personal")

  useEffect(() => {
    let isMounted = true

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          if (isMounted) {
            setActiveSection(entry.target.id)
          }
        }
      })
    }

    const observer = new window.IntersectionObserver(handleIntersect, {
      root: document,
      rootMargin: "-100px 0px 0px 0px",
      threshold: 0.1,
    })

    navItems.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      isMounted = false
      observer.disconnect()
    }

  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust for fixed header
        behavior: "smooth"
      })
      console.log(`Scrolled to section: ${sectionId}`, element, element.offsetTop)
    }
  }

  return (
    <>
      {/* Desktop Navigation - Vertical Left */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm border rounded-lg p-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="icon"
                onClick={() => scrollToSection(item.id)}
                className={activeSection === item.id ? "bg-accent-orange hover:bg-accent-orange" : ""}
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Mobile Navigation - Horizontal Bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="flex gap-2 bg-card/90 backdrop-blur-sm border rounded-full px-4 py-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full ${activeSection === item.id ? "bg-accent-orange hover:bg-accent-orange" : ""}`}
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}
