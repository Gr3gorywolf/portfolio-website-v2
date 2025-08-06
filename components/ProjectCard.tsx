"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Devicon } from "@/components/DevIcon";
import type { Project } from "@/types/Portfolio";
import { ArrowRight, ExternalLink, Github, Tag } from "lucide-react";
import { PROJECT_TAGS } from "@/utils/constants";
import { ProjectTag } from "./ProjectTag";
import { GithubCommitResponse } from "@/types/GithubCommitResponse";
import { humanReadableDate } from "@/utils/dates";
import classNames from "classnames";
import { truncateString } from "@/utils/string";
import { get } from "http";
import { getGravatarUrl } from "@/utils/images";

interface ProjectCardProps {
  project: Project;
  lastCommit?: GithubCommitResponse;
}

export function ProjectCard({ project, lastCommit }: ProjectCardProps) {
  const hasSubprojects = project.repositories && project.repositories.length > 1;
  const mainRepo = project.repositories.find((repo) => repo.isMain) || project.repositories[0];
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
                    <img src={image || "/placeholder.svg"} alt={`${project.title} preview ${index + 2}`} className="object-cover max-h-[94px] w-full" sizes="(max-width: 768px) 25vw, 12.5vw" />
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
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-6">{project.description}</p>
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
                <Badge key={index} variant="outline" className="text-xs hover:bg-muted cursor-pointer">
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
        {lastCommit && (
          <div className="mb-4 p-2 bg-muted/50 rounded text-xs mt-auto">
            <div className="flex items-center gap-2">
              <img className="w-4 h-4 bg-accent-orange rounded-full" src={lastCommit.committer?.avatar_url ?? getGravatarUrl(lastCommit.commit.committer?.email)} alt={`${lastCommit.committer?.login} avatar`} />
              <span className="font-medium">{truncateString(lastCommit.committer?.login ?? lastCommit.commit?.author?.name, 13)}</span>
              <span className="text-muted-foreground">{humanReadableDate(lastCommit.commit?.committer.date)}</span>
            </div>
            <p className="mt-1 text-muted-foreground" title={lastCommit.commit?.message}>
              {truncateString(lastCommit.commit?.message, 90)}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div
          className={classNames("flex gap-2 ", {
            "mt-auto": !lastCommit,
          })}
        >
          <Button asChild size="sm" className="flex-1">
            <Link href={`/projects/${project.id}`}>View Details</Link>
          </Button>

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
