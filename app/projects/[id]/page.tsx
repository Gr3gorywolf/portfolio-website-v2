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
import { ProjectDetailHeaderCard } from "@/components/ProjectDetailsPage/ProjectDetailHeaderCard";
import { FloatingNav, FloatingNavItem } from "@/components/FloatingNav";
import Head from "next/head";
import { AccentColorChanger } from "@/components/AccentColorChanger";
import { ProjectDetailDemoCard } from "@/components/ProjectDetailsPage/ProjectDetailDemoCard";
import "./color-overrides.css";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import { AnimatedStaggeredGrid } from "@/components/AnimatedStaggeredGrid";

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
    const hasGallery = project?.gallery && project.gallery.length > 0;

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
    const navItem = (item: FloatingNavItem): FloatingNavItem => item;

    return (
        <>
            <div id="project-details" className="min-h-screen bg-background">
                <TopNav />
                {project.accentColor && <AccentColorChanger accent={project.accentColor} />}
                <FloatingNav
                    items={[
                        navItem({ id: "info", label: "Info", icon: "info" }),
                        ...(project?.demos ? [navItem({ id: "demo", label: "Demo", icon: "showcase" })] : []),
                        ...(hasGallery ? [navItem({ id: "gallery", label: "Gallery", icon: "gallery" })] : []),
                        ...(project?.repositories
                            ? [navItem({ id: "commits", label: "Commits", icon: "commits" })]
                            : []),
                        navItem({ id: "readme", label: "README", icon: "readme" }),
                    ]}
                />

                <div className="container max-w-6xl mx-auto px-4 py-8 pt-20">
                    <AnimatedWrapper animation="fade-in" duration={500}>
                        <Button asChild variant="ghost" className="mb-6">
                            <Link href={fromAbout ? "/about#featured-projects" : "/projects"}>
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                {fromAbout ? "Back to About Me" : "Back to Projects"}
                            </Link>
                        </Button>
                    </AnimatedWrapper>

                    {/* Project Header Card */}
                    <section id="info">
                        <AnimatedWrapper animation="slide-left">
                            <div className="mb-10" id="info">
                                <ProjectDetailHeaderCard project={project} lastCommit={lastCommit} release={release} />
                            </div>
                        </AnimatedWrapper>
                    </section>

                    {project.demos && (
                        <section id="demo">
                            <div className="mb-8">
                                <AnimatedWrapper animation="fade-up" duration={600}>
                                    <h2 className="text-2xl font-bold mb-4">Demos</h2>
                                </AnimatedWrapper>
                                <AnimatedStaggeredGrid
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                    staggerDelay={100}
                                >
                                    {project.demos.map((demo) => (
                                        <ProjectDetailDemoCard key={demo.url} demo={demo} />
                                    ))}
                                </AnimatedStaggeredGrid>
                            </div>
                        </section>
                    )}

                    {/* Gallery - Order 1 on mobile, 1 on desktop */}
                    <section id="gallery">
                        {hasGallery && (
                            <>
                                <AnimatedWrapper animation="fade-up" duration={600}>
                                    <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                                </AnimatedWrapper>
                                <LightBoxGallery
                                    animated
                                    staggerDelay={100}
                                    gridClassName="grid grid:cols-1 md:grid-cols-2 gap-4"
                                    images={project.gallery}
                                />
                            </>
                        )}
                    </section>

                    {/* Recent Commits - Order 3 on mobile, 2 on desktop */}
                    <section className="my-10" id="commits">
                        <AnimatedWrapper animation="fade-up" duration={600}>
                            <h2 className="text-2xl font-bold mb-4">Recent Commits</h2>
                        </AnimatedWrapper>
                        <Card>
                            <CardContent className="p-4">
                                {commits && (
                                    <AnimatedStaggeredGrid staggerDelay={50} className="space-y-4">
                                        {commits.map((commit, index) => (
                                            <Link
                                                key={commit.sha}
                                                href={commit.html_url}
                                                target="_blank"
                                                className="block p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <img
                                                        src={
                                                            commit.committer?.avatar_url ??
                                                            getGravatarUrl(commit.commit.committer?.email)
                                                        }
                                                        alt={"committer avatar"}
                                                        width={32}
                                                        height={32}
                                                        className="rounded-full"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-medium text-sm truncate">
                                                            {commit.commit.message}
                                                        </p>
                                                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                                            <span>
                                                                {commit.committer?.login ??
                                                                    commit.commit.committer?.name}
                                                            </span>
                                                            <span>•</span>
                                                            <span>
                                                                {humanReadableDate(commit.commit.committer.date)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </AnimatedStaggeredGrid>
                                )}
                            </CardContent>
                        </Card>
                    </section>
                    <section id="readme">
                        <div className="order-2 lg:order-3">
                            <AnimatedWrapper animation="fade-up">
                                <h2 className="text-2xl font-bold mb-4">README</h2>
                            </AnimatedWrapper>
                            <AnimatedWrapper animation="slide-left">
                                <Card>
                                    <CardContent className="p-6">
                                        {readmeUrl ? (
                                            <MarkdownRenderer readmeUrl={readmeUrl} />
                                        ) : (
                                            <p className="text-muted-foreground">No README available.</p>
                                        )}
                                    </CardContent>
                                </Card>
                            </AnimatedWrapper>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
