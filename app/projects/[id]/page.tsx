"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { notFound, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { TopNav } from "@/components/top-nav"
import { ProjectCard } from "@/components/project-card"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { Lightbox } from "@/components/lightbox"
import { projects } from "@/data/projects"
import { getReadmeUrl } from "@/utils/github"
import { ArrowLeft } from "lucide-react"

// Mock commits data
const mockCommits = [
  {
    sha: "abc123",
    message: "feat: Add user authentication system",
    author: { name: "Your Name", avatar: "/placeholder.svg?height=32&width=32" },
    date: "2024-01-15",
    url: "https://github.com/repo/commit/abc123",
  },
  {
    sha: "def456",
    message: "fix: Resolve mobile responsive issues",
    author: { name: "Your Name", avatar: "/placeholder.svg?height=32&width=32" },
    date: "2024-01-14",
    url: "https://github.com/repo/commit/def456",
  },
  {
    sha: "ghi789",
    message: "docs: Update README with installation guide",
    author: { name: "Your Name", avatar: "/placeholder.svg?height=32&width=32" },
    date: "2024-01-13",
    url: "https://github.com/repo/commit/ghi789",
  },
  {
    sha: "jkl012",
    message: "refactor: Optimize database queries",
    author: { name: "Your Name", avatar: "/placeholder.svg?height=32&width=32" },
    date: "2024-01-12",
    url: "https://github.com/repo/commit/jkl012",
  },
  {
    sha: "mno345",
    message: "style: Update UI components styling",
    author: { name: "Your Name", avatar: "/placeholder.svg?height=32&width=32" },
    date: "2024-01-11",
    url: "https://github.com/repo/commit/mno345",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const searchParams = useSearchParams()
  const fromAbout = searchParams.get("from") === "about"

  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  let readmeUrl: string
  try {
    readmeUrl = getReadmeUrl(project)
  } catch (error) {
    console.error("Error generating README URL:", error)
    readmeUrl = ""
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <ThemeToggle />

      <div className="container max-w-6xl mx-auto px-4 py-8 pt-20">
        <Button asChild variant="ghost" className="mb-6">
          <Link href={fromAbout ? "/about#featured-projects" : "/projects"}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {fromAbout ? "Back to About Me" : "Back to Projects"}
          </Link>
        </Button>

        {/* Project Header Card */}
        <div className="mb-8">
          <ProjectCard project={project} showDetailButton={false} />
        </div>

        {/* Gallery and Commits Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Gallery - Order 1 on mobile, 1 on desktop */}
          <div className="order-1">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid gap-4">
              {project?.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Commits - Order 3 on mobile, 2 on desktop */}
          <div className="order-3 lg:order-2">
            <h2 className="text-2xl font-bold mb-4">Recent Commits</h2>
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {mockCommits.slice(0, 10).map((commit, index) => (
                    <Link
                      key={commit.sha}
                      href={commit.url}
                      target="_blank"
                      className="block p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={commit.author.avatar || "/placeholder.svg"}
                          alt={commit.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{commit.message}</p>
                          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                            <span>{commit.author.name}</span>
                            <span>•</span>
                            <span>{commit.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* README - Full width, Order 2 on mobile, 3 on desktop */}
        <div className="order-2 lg:order-3">
          <h2 className="text-2xl font-bold mb-4">README</h2>
          <Card>
            <CardContent className="p-6">
              {readmeUrl ? (
                <MarkdownRenderer readmeUrl={readmeUrl} />
              ) : (
                <p className="text-muted-foreground">No README available.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={project.gallery}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}
