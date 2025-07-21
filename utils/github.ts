export function getGitHubRawUrl(repoUrl: string, branch = "main", filePath = "README.md"): string {
  // Convert GitHub repo URL to raw URL
  // From: https://github.com/username/repo
  // To: https://raw.githubusercontent.com/username/repo/branch/file

  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/)
  if (!match) {
    throw new Error("Invalid GitHub repository URL")
  }

  const [, username, repo] = match
  const cleanRepo = repo.replace(/\.git$/, "") // Remove .git suffix if present

  return `https://raw.githubusercontent.com/${username}/${cleanRepo}/${branch}/${filePath}`
}

export function getReadmeUrl(project: {
  readmeUrl?: string
  repositories: Array<{ url: string; isMain: boolean }>
}): string {
  // If custom README URL is provided, use it
  if (project.readmeUrl) {
    return project.readmeUrl
  }

  // Otherwise, generate from main repository
  const mainRepo = project.repositories.find((repo) => repo.isMain) || project.repositories[0]
  if (!mainRepo) {
    throw new Error("No repository found")
  }

  return getGitHubRawUrl(mainRepo.url)
}
