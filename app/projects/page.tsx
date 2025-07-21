"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { TopNav } from "@/components/top-nav"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilters } from "@/components/project-filters"
import { projects } from "@/data/projects"
import type { Project } from "@/types/portfolio"

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <ThemeToggle />

      <div className="container max-w-6xl mx-auto px-4 py-8 pt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <ProjectFilters projects={projects} onFilterChange={setFilteredProjects} />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
