import { Project, Repository } from "@/types/Portfolio";


function getApiBaseUrl(repoUrl: string) {
  const { username, repoName } = getRepoInfo(repoUrl) || {};
  if (!username || !repoName) {
    return "";
  }
  return `https://api.github.com/repos/${username}/${repoName}`;
}
function getRepoInfo(repoUrl: string) {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)(\.git)?/)
  if (!match) {
    return null;
  }
  const [, username, repoName] = match
  const cleanRepoName = repoName.replace(/\.git$/, "");
  return { username, repoName: cleanRepoName }
}

export function getRepoRawUrl(repoUrl: string, branch = "master", filePath = "README.md") {
  const { username, repoName } = getRepoInfo(repoUrl) || {};
  if (!username) {
    return null;
  }
  return `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/${filePath}`
}

export function getRepoReadmeUrl(project: {
  readmeUrl?: string
  repositories: Array<Repository>
}): string {
  if (project.readmeUrl) {
    return project.readmeUrl
  }

  const mainRepo = project.repositories.find((repo) => repo.isMain) || project.repositories[0]
  if (!mainRepo) {
    ""
  }

  return getRepoRawUrl(mainRepo.url) ?? ""
}

export function getLastRepoCommitUrl(
  repositoryUrl: string,
  branch = "master"
): string {

  return `
    ${getApiBaseUrl(repositoryUrl)}/commits/${branch}
`
}


export function getRepoCommitsUrl(
  repositoryUrl: string
): string {

  return `
    ${getApiBaseUrl(repositoryUrl)}/commits?per_page=10
`
}

export function getRepoStatsUrl(
  repositoryUrl: string
): string {

  return `
    ${getApiBaseUrl(repositoryUrl)}/
`
}

export function getRepoLastReleaseUrl(
  repositoryUrl: string,
): string {
  return `
    ${getApiBaseUrl(repositoryUrl)}/releases/latest
`
}


export const getProjectMainRepoUrl = (project: Project): string => {
        const mainRepo = project.repositories.find((repo) => repo.isMain);
        return mainRepo ? mainRepo.url : "";
    };