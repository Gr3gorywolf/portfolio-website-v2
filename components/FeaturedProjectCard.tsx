"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Devicon } from "@/components/DevIcon";
import type { Project } from "@/types/Portfolio";
import { ExternalLink, Github, Globe, Smartphone, Server, Terminal, ArrowRight } from "lucide-react";
import { ProjectTag } from "./ProjectTag";
import { GithubRepoStatsResponse } from "@/types/GithubRepoStatsResponse";
import { GitHubStats } from "./GithubStats";

const tagIconMap: { [key: string]: any } = {
    Globe,
    Smartphone,
    Server,
    Terminal,
};

interface FeaturedProjectCardProps {
    project: Project;
    stats?: GithubRepoStatsResponse;
}

export function FeaturedProjectCard({ project, stats }: FeaturedProjectCardProps) {
    const hasSubprojects = project.repositories && project.repositories.length > 1;
    const mainRepo = project.repositories.find((repo) => repo.isMain) || project.repositories[0];
    const previewImage = project.gallery && project.gallery.length > 0 ? project.gallery[0] : null;

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group relative">
            <div className="grid md:grid-cols-[35%_65%] h-full relative z-10">
                <div className="relative h-48 md:h-full bg-muted/20">
                    {previewImage ? (
                        <img
                            src={previewImage || "/placeholder.svg"}
                            alt={`${project.title} preview`}
                            className="object-cover  h-full max-h-80 w-full"
                            sizes="(max-width: 768px) 100vw, 35vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-muted/40 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <img
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

                <CardContent className="p-4 md:p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                    src={project.appIcon || "/placeholder.svg"}
                                    alt={`${project.title} icon`}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-lg leading-tight mb-1">{project.title}</h3>
                                <div className="flex flex-wrap gap-1">
                                    {project.tags.map((tag, index) => {
                                        return <ProjectTag key={index} type={tag} />;
                                    })}
                                </div> 
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm  line-clamp-3">{project.description}</p>
                        {stats && <GitHubStats stats={stats} variant="compact" className="mb-4 mt-2"/>}
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                                {project.technologies.slice(0, 4).map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded"
                                    >
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

                    {hasSubprojects && (
                        <div className="mb-4">
                            <h4 className="text-sm font-medium mb-2">Repositories:</h4>
                            <div className="flex flex-wrap gap-1">
                                {project.repositories.map((repository, index) => (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                        className="text-xs hover:bg-muted cursor-pointer"
                                    >
                                        <Link href={repository.url} target="_blank" className="flex items-center gap-1">
                                            <Github className="w-3 h-3" />
                                            {repository.name}
                                        </Link>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline" size="sm" className="bg-transparent ">
                            <Link href={`/projects/${project.id}?from=about`}>
                                View Details
                                <ArrowRight className="w-3 h-3 mr-1" />
                            </Link>
                        </Button>

                        {!hasSubprojects && (
                            <Button asChild variant="outline" size="sm">
                                <Link href={mainRepo.url} target="_blank">
                                    <Github className="w-3 h-3 mr-1" />
                                    Repository
                                </Link>
                            </Button>
                        )}

                        {project.liveUrl && (
                            <Button asChild variant="outline" size="sm">
                                <Link href={project.liveUrl} target="_blank">
                                    <ExternalLink className="w-3 h-3 mr-1" />
                                    View Site
                                </Link>
                            </Button>
                        )}
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}
