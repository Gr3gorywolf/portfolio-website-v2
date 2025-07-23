"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Devicon } from "@/components/devicon";
import type { Project } from "@/types/portfolio";
import { ExternalLink, Github, Tag } from "lucide-react";
import { PROJECT_TAGS } from "@/utils/constants";
import { ProjectTag } from "./ProjectTag";

interface ProjectCardProps {
  project: Project;
  showDetailButton?: boolean;
}

export function ProjectCard({ project, showDetailButton = true }: ProjectCardProps) {
  const hasSubprojects = project.repositories && project.repositories.length > 1;
  const mainRepo = project.repositories.find((repo) => repo.isMain) || project.repositories[0];

  // Redesigned layout for detail page (when showDetailButton is false)
  if (!showDetailButton) {
    return (
      <Card className="w-full relative overflow-hidden group">
        <CardContent className="p-0 relative z-10">
          {/* Header Section */}
          <div className="p-6 pb-4 border-b bg-muted/20">
            <div className="flex flex-col md:flex-row  gap-4">
              {/* Project Icon */}
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md ">
                <img src={project.appIcon || "/placeholder.svg"} alt={`${project.title} icon`} width={80} height={80} className="w-full h-full object-cover " />
              </div>

              {/* Title and Tags */}
              <div className="flex-1 min-w-0 items-start">
                <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => {
                    return <ProjectTag type={tag} key={index} />;
                  })}
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-6 grid lg:grid-cols-3 gap-6">
            {/* Left Column - Technologies and Subprojects */}
            <div className="lg:col-span-2 space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <Devicon name={tech.devicon} size={20} />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subprojects */}
              {hasSubprojects && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Repositories:</h3>
                  <div className="grid gap-2">
                    {project.repositories!.map((repository, index) => (
                      <Link key={index} href={repository.url} target="_blank" className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group">
                        <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent-orange" />
                        <span className="font-medium">{repository.name}</span>
                        <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Releases */}
              {project.releases && project.releases.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Latest Release</h3>
                  <Link href={project.releases[0].url} target="_blank" className="block p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group">
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-accent-orange mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{project.releases[0].name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {project.releases[0].version}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{project.releases[0].description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Released: {project.releases[0].date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            View Release
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Last Commit */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Latest Activity</h3>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent-orange rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">YN</span>
                    </div>
                    <div>
                      <p className="font-medium">Your Name</p>
                      <p className="text-sm text-muted-foreground">2024-01-15</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">feat: Update dependencies and improve performance</p>
                </div>
              </div>
            </div>

            {/* Right Column - Action Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Actions</h3>

              <div className="space-y-3">
                {project.actions?.map((action, index) => (
                  <Button asChild  variant="outline" className="w-full justify-start bg-transparent h-12">
                    <Link href={action.url} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <div className="text-left w-full">
                        <div className="font-medium">{action.title}</div>
                        <p className="text-xs opacity-90 ">{action.description}</p>
                      </div>
                    </Link>
                  </Button>
                ))}
                {project.liveUrl && (
                  <Button asChild variant="outline" className="w-full justify-start bg-transparent h-12">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <div className="text-left w-full">
                        <div className="font-medium">View Live Page</div>
                        <p className="text-xs opacity-90">See it in action</p>
                      </div>
                    </Link>
                  </Button>
                )}

                {/* Show GitHub button only if no subprojects */}
                {!hasSubprojects && (
                  <Button asChild variant="outline" className="w-full justify-start h-12 bg-transparent">
                    <Link href={mainRepo.url} target="_blank">
                      <Github className="w-4 h-4 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">View Repository</div>
                        <div className="text-xs opacity-90">Source code</div>
                      </div>
                    </Link>
                  </Button>
                )}

                {/* Latest Release Button */}
                {project.releases && project.releases.length > 0 && (
                  <Button asChild variant="outline" className="w-full justify-start h-12 bg-transparent">
                    <Link href={project.releases[0].url} target="_blank">
                      <Tag className="w-4 h-4 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Latest Release</div>
                        <div className="text-xs opacity-90">{project.releases[0].version}</div>
                      </div>
                    </Link>
                  </Button>
                )}

                {/* Additional info cards */}
                <div className="pt-4 space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="text-sm font-medium mb-1">Project Status</div>
                    <div className="text-xs text-muted-foreground">Active Development</div>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="text-sm font-medium mb-1">Last Updated</div>
                    <div className="text-xs text-muted-foreground">January 15, 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Original layout for project listing page with gallery and animated border
  return (
    <Card className="h-full flex flex-col overflow-hidden relative group ">
      {/* Gallery Section */}
      <div className="relative h-48 max-h-48 bg-muted/20 z-10">
        {project.gallery && project.gallery.length > 0 ? (
          <div className={`grid ${project.gallery.length >= 2 ? "grid-cols-2" : "grid-cols-1"} h-full gap-1`}>
            {/* Main image - takes left half */}
            <div className="relative">
              <img src={project.gallery[0] || "/placeholder.svg"} alt={`${project.title} preview`} className={`object-cover h-full max-h-48 ${project.gallery.length === 1 ? "w-full" : ""}`} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>

            {/* Secondary images - right half */}
            {project.gallery.length > 1 && (
              <div className="grid grid-rows-2 gap-1 max-h-48">
                {project.gallery.slice(1, 3).map((image, index) => (
                  <div key={index} className="relative">
                    <img src={image || "/placeholder.svg"} alt={`${project.title} preview ${index + 2}`} fill className="object-cover" sizes="(max-width: 768px) 25vw, 12.5vw" />
                    {/* Overlay for additional images count */}
                    {index === 1 && project.gallery.length > 3 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">+{project.gallery.length - 3} more</span>
                      </div>
                    )}
                  </div>
                ))}

                {/* Fill empty slots if less than 3 images */}
                {project.gallery.length === 2 && (
                  <div className="relative bg-muted/40 flex items-center justify-center h-full">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-muted-foreground/30 rounded"></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          // Fallback when no gallery images
          <div className="w-full h-full bg-muted/40 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                <div className="w-6 h-6 bg-muted-foreground/30 rounded"></div>
              </div>
              <p className="text-xs text-muted-foreground">No preview available</p>
            </div>
          </div>
        )}
      </div>

      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
            <img src={project.appIcon || "/placeholder.svg"} alt={`${project.title} icon`} width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
            {/* Project Types - Moved here, right below title */}
            <div className="flex flex-wrap gap-1 mt-1">
              {project.tags.map((tag, index) => {
                return <ProjectTag type={tag} key={index} />;
              })}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col pt-0 relative z-10">
        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                <Devicon name={tech.devicon} size={12} />
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* Subprojects */}
        {hasSubprojects && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Repositories:</h4>
            <div className="flex flex-wrap gap-1">
              {project.repositories.map((repository, index) => (
                <Badge key={index} variant="outline" className="text-xs hover:bg-muted cursor-pointer" asChild>
                  <Link href={repository.url} target="_blank" className="flex items-center gap-1">
                    <Github className="w-3 h-3" />
                    {repository.name}
                  </Link>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Last Commit - Mock data */}
        <div className="mb-4 p-2 bg-muted/50 rounded text-xs mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent-orange rounded-full"></div>
            <span className="font-medium">Your Name</span>
            <span className="text-muted-foreground">2024-01-15</span>
          </div>
          <p className="mt-1 text-muted-foreground">feat: Update dependencies</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 ">
          {showDetailButton && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link href={`/projects/${project.id}`}>View Details</Link>
            </Button>
          )}

          {/* Show GitHub button only if no subprojects */}
          {!hasSubprojects && (
            <Button asChild variant="outline" size="sm">
              <Link href={mainRepo.url} target="_blank">
                <Github className="w-4 h-4" />
              </Link>
            </Button>
          )}

          {project.liveUrl && (
            <Button asChild variant="outline" size="sm">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
