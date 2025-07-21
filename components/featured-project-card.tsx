"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Devicon } from "@/components/devicon"
import type { Project } from "@/types/portfolio"
import { ExternalLink, Github, Globe, Smartphone, Server, Terminal, ArrowRight } from "lucide-react"

const tagIconMap: { [key: string]: any } = {
  Globe,
  Smartphone,
  Server,
  Terminal,
}

interface FeaturedProjectCardProps {
  project: Project
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const hasSubprojects = project.subprojects && project.subprojects.length > 0
  const mainRepo = project.repositories.find((repo) => repo.isMain) || project.repositories[0]
  const previewImage = project.gallery && project.gallery.length > 0 ? project.gallery[0] : null

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group relative">
      {/* Animated border */}
      <div className="absolute inset-0 rounded-lg">
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-accent-orange/20 transition-colors duration-300" />
        <div className="absolute top-0 left-0 w-0 h-0.5 bg-accent-orange group-hover:w-full transition-all duration-700 ease-out" />
        <div className="absolute top-0 right-0 w-0.5 h-0 bg-accent-orange group-hover:h-full transition-all duration-700 ease-out delay-200" />
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent-orange group-hover:w-full transition-all duration-700 ease-out delay-400" />
        <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-accent-orange group-hover:h-full transition-all duration-700 ease-out delay-600" />
      </div>

      {/* Changed grid proportions: 35% image, 65% content */}
      <div className="grid md:grid-cols-[35%_65%] h-full relative z-10">
        {/* Left side - Preview Image (35%) */}
        <div className="relative h-48 md:h-full bg-muted/20">
          {previewImage ? (
            <Image
              src={previewImage || "/placeholder.svg"}
              alt={`${project.title} preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          ) : (
            <div className="w-full h-full bg-muted/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Image
                    src={project.appIcon || "/placeholder.svg"}
                    alt={`${project.title} icon`}
                    width={32}
                    height={32}
                    className="rounded object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">No preview available</p>
              </div>
            </div>
          )}
        </div>

        {/* Right side - Project Info (65%) */}
        <CardContent className="p-4 md:p-6 flex flex-col justify-between">
          <div>
            {/* Header with icon and title */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={project.appIcon || "/placeholder.svg"}
                  alt={`${project.title} icon`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg leading-tight mb-1">{project.title}</h3>
                {/* Project Type */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => {
                    const TagIcon = tagIconMap[tag.icon]
                    return (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1 text-xs h-5">
                        <TagIcon className="w-2.5 h-2.5" />
                        {tag.name}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

            {/* Technologies - Simplified */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                    <Devicon name={tech.devicon} size={12} />
                    {tech.name}
                  </div>
                ))}
                {project.technologies.length > 4 && (
                  <div className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                    +{project.technologies.length - 4} more
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm" className="bg-accent-orange hover:bg-accent-orange/90">
              <Link href={`/projects/${project.id}?from=about`}>
                <ArrowRight className="w-3 h-3 mr-1" />
                View Details
              </Link>
            </Button>

            {/* Show GitHub button only if no subprojects */}
            {!hasSubprojects && (
              <Button asChild variant="outline" size="sm">
                <Link href={mainRepo.url} target="_blank">
                  <Github className="w-3 h-3 mr-1" />
                  Repo
                </Link>
              </Button>
            )}

            {project.liveUrl && (
              <Button asChild variant="outline" size="sm">
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Demo
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
