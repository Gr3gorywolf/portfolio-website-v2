import { Repository } from "@/types/portfolio";

function getRepoInfo(repoUrl: string) {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)(\.git)?/)
  if (!match) {
    return null;
  }
  const [, username, repoName] = match
  const cleanRepoName = repoName.replace(/\.git$/, "");
  return { username, repoName: cleanRepoName }
}

export function getRepoRawUrl(repoUrl: string, branch = "main", filePath = "README.md") {
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
  branch = "main"
): string {
  const { username, repoName } = getRepoInfo(repositoryUrl) || {};
  if (!username || !repoName) {
    return "";
  }
  return `
    https://api.github.com/repos/${username}/${repoName}/commits/${branch}
`
}


export function getRepoCommitsUrl(
  repositoryUrl: string,
): string {
  const { username, repoName } = getRepoInfo(repositoryUrl) || {};
  if (!username || !repoName) {
    return "";
  }
  return `
    https://api.github.com/repos/${username}/${repoName}/commits?per_page=10
`
}

export function getRepoLastReleaseUrl(
  repositoryUrl: string,
): string {
  const { username, repoName } = getRepoInfo(repositoryUrl) || {};
  if (!username || !repoName) {
    return "";
  }
  return `
    https://api.github.com/repos/${username}/${repoName}/releases/latest
`
}