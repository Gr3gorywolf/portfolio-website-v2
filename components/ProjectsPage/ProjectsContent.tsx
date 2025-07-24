"use client";
import { projects } from "@/data/projects";
import { GithubCommitResponse } from "@/types/githubCommitResponse";
import { Project } from "@/types/portfolio";
import { getLastRepoCommitUrl } from "@/utils/github";
import { FC, useState } from "react";
import { ProjectCard } from "../project-card";
import { ProjectFilters } from "../ProjectFilters";

interface Props {
  projects: Project[];
  projectCommits?: Record<string, GithubCommitResponse>;
}

export const ProjectsContent: FC<Props> = ({ projects, projectCommits }) => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const getProjectMainRepoUrl = (project: Project): string => {
    const mainRepo = project.repositories.find((repo) => repo.isMain);
    return mainRepo ? mainRepo.url : "";
  };
  return (
    <>
      <ProjectFilters projects={projects} onFilterChange={setFilteredProjects} />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} lastCommit={projectCommits?.[getProjectMainRepoUrl(project)]} />
          ))}
        </div>
      )}
    </>
  );
};
