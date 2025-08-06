import { GithubCommitResponse } from "@/types/GithubCommitResponse";
import { GithubReleaseResponse } from "@/types/GithubReleaseResponse";
import { Project } from "@/types/Portfolio";
import { Github, ExternalLink, Tag, Badge } from "lucide-react";
import { FC } from "react";
import { Devicon } from "../DevIcon";
import { ProjectTag } from "../ProjectTag";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { humanReadableDate } from "@/utils/dates";
import { getGravatarUrl } from "@/utils/images";
import { truncateString } from "@/utils/string";
import Link from "next/link";
import { DateTime } from "luxon";

interface Props {
  project: Project;
  lastCommit?: GithubCommitResponse;
  release?: GithubReleaseResponse;
}

export const ProjectDetailHeaderCard: FC<Props> = ({ project, lastCommit, release }) => {
  const hasSubprojects = project.repositories && project.repositories.length > 1;
  const mainRepo = project.repositories.find((repo) => repo.isMain) || project.repositories[0];
  const getProjectStatus = () => {
    if (!lastCommit || !lastCommit.commit?.committer?.date) return "Unknown";
    const lastCommitDate = DateTime.fromISO(lastCommit.commit.committer.date);
    const now = DateTime.now();
    const diffMonths = now.diff(lastCommitDate, "months").months;
    return diffMonths > 6 ? "Completed" : "Active development";
  };

  const getLastUpdated = () => {
    if (!lastCommit || !lastCommit.commit?.committer?.date) return "Unknown";
    return humanReadableDate(lastCommit.commit.committer.date);
  };

  return (
    <>
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
                <p className="text-muted-foreground text-md leading-relaxed ">{project.description}</p>
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
                  <h3 className="text-lg font-semibold mb-3">Repositories</h3>
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
              {release && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Latest Release</h3>
                  <Link href={release.html_url} target="_blank" className="block p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group">
                    <div className="flex items-center gap-3">
                      <Tag className="w-6 h-6 text-accent-orange mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{release.name}</h4>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Released: {humanReadableDate(release.created_at)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Last Commit */}
              {lastCommit && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Latest Activity</h3>
                  <Link href={lastCommit.html_url} target="_blank" className=" block p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                      <img className="h-10 w-10 rounded-full" src={lastCommit.committer?.avatar_url ?? getGravatarUrl(lastCommit.commit.committer?.email)} alt="" />
                      <div>
                        <p className="font-medium">{truncateString(lastCommit.committer?.login ?? lastCommit.commit?.author?.name, 13)}</p>
                        <p className="text-sm text-muted-foreground">{humanReadableDate(lastCommit.commit?.committer.date)}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{truncateString(lastCommit.commit?.message, 180)}</p>
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column - Action Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Actions</h3>

              <div className="space-y-3">
                {project.actions?.map((action, index) => (
                  <Button asChild variant="outline" className="w-full justify-start bg-transparent h-12 action-button">
                    <Link href={action.url} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <div className="text-left w-full">
                        <div className="font-medium wrap-text">{action.title}</div>
                        <p className="text-xs opacity-90 wrap-text">{action.description}</p>
                      </div>
                    </Link>
                  </Button>
                ))}
                {project.liveUrl && (
                  <Button asChild variant="outline" className="w-full justify-start bg-transparent h-12 action-button">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <div className="text-left w-full">
                        <div className="font-medium">View Live Page</div>
                      </div>
                    </Link>
                  </Button>
                )}

                {/* Show GitHub button only if no subprojects */}
                {!hasSubprojects && (
                  <Button asChild variant="outline" className="w-full justify-start h-12 bg-transparent action-button">
                    <Link href={mainRepo.url} target="_blank">
                      <Github className="w-4 h-4 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">View Repository</div>
                      </div>
                    </Link>
                  </Button>
                )}

                {/* Additional info cards */}
                <div className="pt-4 space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="text-sm font-medium mb-1">Project Status</div>
                    <div className="text-xs text-muted-foreground">{getProjectStatus()}</div>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="text-sm font-medium mb-1">Last Updated</div>
                    <div className="text-xs text-muted-foreground">{getLastUpdated()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
