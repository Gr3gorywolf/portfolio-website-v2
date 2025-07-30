import Image from "next/image";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopNav } from "@/components/TopNav";
import { ProjectCard } from "@/components/ProjectCard";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Lightbox } from "@/components/LightBox";
import { projects } from "@/data/projects";
import { getRepoReadmeUrl } from "@/utils/github";
import { ArrowLeft } from "lucide-react";
import { LightBoxGallery } from "@/components/LightBoxGallery";
import { getReposLastCommits, getRepoCommits, getRepoLastRelease } from "@/services/github";
import { humanReadableDate } from "@/utils/dates";
import { getGravatarUrl } from "@/utils/images";
import { ProjectDetailHeaderCard } from "@/components/ProjectDetailHeaderCard";
import { FloatingNav } from "@/components/FloatingNav";
import Head from "next/head";
import { AccentColorChanger } from "@/components/ColorChanger";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
  params: { id: string };
};

export default async function ProjectDetailPage({ params, searchParams }: Props) {
  const fromAbout = searchParams.from === "about";
  const project = projects.find((p) => p.id === params.id);
  const mainRepo = project?.repositories.find((repo) => repo.isMain) || project?.repositories[0];
  const commits = await getRepoCommits(mainRepo?.url || "");
  const release = mainRepo ? (await getRepoLastRelease(mainRepo.url)) ?? undefined : undefined;
  const lastCommit = commits?.[0];

  if (!project) {
    notFound();
  }

  let readmeUrl: string;
  try {
    readmeUrl = getRepoReadmeUrl(project);
  } catch (error) {
    console.error("Error generating README URL:", error);
    readmeUrl = "";
  }

  return (
    <>
      <div className="min-h-screen bg-background">
        <TopNav />
        <ThemeToggle />
        {project.accentColor && <AccentColorChanger accent={project.accentColor} />}
        <FloatingNav page="project-details" />

        <div className="container max-w-6xl mx-auto px-4 py-8 pt-20">
          <Button asChild variant="ghost" className="mb-6">
            <Link href={fromAbout ? "/about#featured-projects" : "/projects"}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {fromAbout ? "Back to About Me" : "Back to Projects"}
            </Link>
          </Button>

          {/* Project Header Card */}
          <div className="mb-10" id="info">
            <ProjectDetailHeaderCard project={project} lastCommit={lastCommit} release={release} />
          </div>

          {/* Gallery - Order 1 on mobile, 1 on desktop */}
          <div>
            <h2 className="text-2xl font-bold mb-4" id="gallery">
              Gallery
            </h2>
            <LightBoxGallery gridClassName="grid grid:cols-1 md:grid-cols-2 gap-4" images={project.gallery} />
          </div>

          {/* Recent Commits - Order 3 on mobile, 2 on desktop */}
          <div className="my-10">
            <h2 className="text-2xl font-bold mb-4" id="commits">
              Recent Commits
            </h2>
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {commits &&
                    commits.map((commit, index) => (
                      <Link key={commit.sha} href={commit.html_url} target="_blank" className="block p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                        <div className="flex items-start gap-3">
                          <img src={commit.committer?.avatar_url ?? getGravatarUrl(commit.commit.committer?.email)} alt={"committer avatar"} width={32} height={32} className="rounded-full" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{commit.commit.message}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                              <span>{commit.committer?.login ?? commit.commit.committer?.name}</span>
                              <span>•</span>
                              <span>{humanReadableDate(commit.commit.committer.date)}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* README - Full width, Order 2 on mobile, 3 on desktop */}
          <div className="order-2 lg:order-3" id="readme">
            <h2 className="text-2xl font-bold mb-4">README</h2>
            <Card>
              <CardContent className="p-6">{readmeUrl ? <MarkdownRenderer readmeUrl={readmeUrl} /> : <p className="text-muted-foreground">No README available.</p>}</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
