import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopNav } from "@/components/TopNav";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilters } from "@/components/ProjectFilters";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";
import { GithubCommitResponse } from "@/types/githubCommitResponse";
import { getLastRepoCommitUrl } from "@/utils/github";
import { ProjectsContent } from "@/components/ProjectsPage/ProjectsContent";
import { getReposLastCommits } from "@/services/github";

export default async function ProjectsPage() {
  const projectsRepositories = projects.flatMap((project) => project.repositories.map((repo) => repo.url));
  const projectCommits: Record<string, GithubCommitResponse> = await getReposLastCommits(projectsRepositories);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <ThemeToggle />

      <div className="container max-w-6xl mx-auto px-4 py-8 pt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>
        <ProjectsContent projects={projects} projectCommits={projectCommits} />
      </div>
    </div>
  );
}
