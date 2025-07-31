"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/Card"
import { Devicon } from "@/components/DevIcon"
import type { Project } from "@/types/Portfolio"
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react"
import { PROJECT_TAGS } from "@/utils/constants"

interface ProjectFiltersProps {
  projects: Project[]
  onFilterChange: (filteredProjects: Project[]) => void
}

export function ProjectFilters({ projects, onFilterChange }: ProjectFiltersProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(false) // Default collapsed

  // Get unique project types
  const projectTypes = Array.from(new Set(projects.flatMap((project) => project.tags)))

  // Get unique technologies
  const allTechnologies = Array.from(
    new Map(projects.flatMap((project) => project.technologies).map((tech) => [tech.name, tech])).values(),
  )

  const applyFilters = (types: string[], technologies: string[]) => {
    let filtered = projects

    if (types.length > 0) {
      filtered = filtered.filter((project) => project.tags.some((tag) => types.includes(tag)))
    }

    if (technologies.length > 0) {
      filtered = filtered.filter((project) => project.technologies.some((tech) => technologies.includes(tech.name)))
    }

    onFilterChange(filtered)
  }

  const toggleType = (type: string) => {
    const newTypes = selectedTypes.includes(type) ? selectedTypes.filter((t) => t !== type) : [...selectedTypes, type]

    setSelectedTypes(newTypes)
    applyFilters(newTypes, selectedTechnologies)
  }

  const toggleTechnology = (technology: string) => {
    const newTechnologies = selectedTechnologies.includes(technology)
      ? selectedTechnologies.filter((t) => t !== technology)
      : [...selectedTechnologies, technology]

    setSelectedTechnologies(newTechnologies)
    applyFilters(selectedTypes, newTechnologies)
  }

  const clearFilters = () => {
    setSelectedTypes([])
    setSelectedTechnologies([])
    onFilterChange(projects)
  }

  const hasActiveFilters = selectedTypes.length > 0 || selectedTechnologies.length > 0

  return (
    <Card className="mb-8">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Filters</span>
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2">
                {selectedTypes.length + selectedTechnologies.length}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4 mr-1" />
                Clear
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div
          className={`space-y-4 transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {/* Project Types */}
          <div className="mt-2">
            <h4 className="text-sm font-medium mb-2">Project Types</h4>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => {
                const Icon = PROJECT_TAGS[type]?.icon || null
                return (<Button
                  key={type}
                  variant={selectedTypes.includes(type) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleType(type)}
                  className={`capitalize flex flex-row gap-1 ${
                    selectedTypes.includes(type) ? "bg-accent-orange hover:bg-accent-orange/90" : ""
                  }`}
                >
                 {Icon && <Icon className="w-3 h-3" />} {type}
                </Button>
              );
              })}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-medium mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <Button
                  key={tech.name}
                  variant={selectedTechnologies.includes(tech.name) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTechnology(tech.name)}
                  className={`flex items-center gap-1 ${
                    selectedTechnologies.includes(tech.name) ? "bg-accent-orange hover:bg-accent-orange/90" : ""
                  }`}
                >
                  <Devicon name={tech.devicon} size={14} />
                  {tech.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
