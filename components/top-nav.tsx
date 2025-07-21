"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { User, FolderOpen, Home } from "lucide-react"

export function TopNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <div className="container max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Home className="w-5 h-5" />
            Portfolio
          </Link>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant={pathname === "/about" ? "default" : "ghost"}
              className={pathname === "/about" ? "bg-accent-orange hover:bg-accent-orange" : ""}
            >
              <Link href="/about">
                <User className="w-4 h-4 mr-2" />
                About Me
              </Link>
            </Button>

            <Button
              asChild
              variant={pathname.startsWith("/projects") ? "default" : "ghost"}
              className={pathname.startsWith("/projects") ? "bg-accent-orange hover:bg-accent-orange" : ""}
            >
              <Link href="/projects">
                <FolderOpen className="w-4 h-4 mr-2" />
                My Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
