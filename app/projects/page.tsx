import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopNav } from "@/components/TopNav";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";
import { projects } from "@/data/projects";
import type { Project } from "@/types/Portfolio";
import { GithubCommitResponse } from "@/types/GithubCommitResponse";
import { getLastRepoCommitUrl } from "@/utils/github";
import { ProjectsContent } from "@/components/ProjectsPage/ProjectsContent";
import { getReposLastCommits } from "@/services/github";
import { ProjectLoader } from "@/components/ProjectLoader";

export default async function ProjectsPage() {
  const projectsRepositories = projects.flatMap((project) => project.repositories.map((repo) => repo.url));
  const projectCommits: Record<string, GithubCommitResponse> = await getReposLastCommits(projectsRepositories);
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <ThemeToggle />

      <div className="container max-w-6xl mx-auto px-4 py-8 pt-16">
        <ProjectsContent projects={projects} projectCommits={projectCommits} />
      </div>
    </div>
  );
}
