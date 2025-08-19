"use client";
import { projects } from "@/data/projects";
import { GithubCommitResponse } from "@/types/GithubCommitResponse";
import { Project } from "@/types/Portfolio";
import { getLastRepoCommitUrl, getProjectMainRepoUrl } from "@/utils/github";
import { FC, useState } from "react";
import { ProjectCard } from "../ProjectCard";
import { ProjectFilters } from "../ProjectFilters";
import { AnimatedWrapper } from "../AnimatedWrapper";
import { AnimatedStaggeredGrid } from "../AnimatedStaggeredGrid";
import { GithubRepoStatsResponse } from "@/types/GithubRepoStatsResponse";

interface Props {
    projects: Project[];
    projectCommits?: Record<string, GithubCommitResponse>;
    projectStats?: Record<string, GithubRepoStatsResponse>;
}

export const ProjectsContent: FC<Props> = ({ projects, projectCommits, projectStats }) => {
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects); 
    return (
        <>
            <AnimatedWrapper animation="fade-up" delay={200} duration={600}>
                <ProjectFilters projects={projects} onFilterChange={setFilteredProjects} />
            </AnimatedWrapper>

            {filteredProjects.length === 0 ? (
              <AnimatedWrapper animation="fade-in" delay={400} duration={600}>
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
                </div>
                </AnimatedWrapper>
            ) : (
                <AnimatedStaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={65}>
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            lastCommit={projectCommits?.[getProjectMainRepoUrl(project)]}
                            stats={projectStats?.[getProjectMainRepoUrl(project)]}
                        />
                    ))}
                </AnimatedStaggeredGrid>
            )}
        </>
    );
};
