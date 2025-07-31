import { GithubCommitResponse } from "@/types/GithubCommitResponse";
import { GithubReleaseResponse } from "@/types/GithubReleaseResponse";
import { getLastRepoCommitUrl, getRepoCommitsUrl, getRepoLastReleaseUrl } from "@/utils/github";
export const getReposLastCommits = async (repos: string[]) => {
    const commits: Record<string, GithubCommitResponse> = {};

    const results = await Promise.allSettled(
        repos.map(async (repo) => {
            const commitUrl = getLastRepoCommitUrl(repo);
            try {
                const response = await fetch(commitUrl, {
                    next: { revalidate: 3600 }
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch commits for ${repo}`);
                }
                const data: GithubCommitResponse = await response.json();
                return { repo, data };
            } catch (error) {
                console.error(error);
                return null;
            }
        })
    );

    for (const result of results) {
        if (result.status === "fulfilled" && result.value) {
            const { repo, data } = result.value;
            commits[repo] = data;
        }
    }

    return commits;
}

export const getRepoCommits = async (repo: string) => {
    const commitsUrl = getRepoCommitsUrl(repo);
    try {
        const response = await fetch(commitsUrl, {
            next: { revalidate: 3600 }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch commits for ${repo}`);
        }
        const data: GithubCommitResponse[] = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const getRepoLastRelease = async (repo: string) => {
    const releasesUrl = getRepoLastReleaseUrl(repo);
    try {
        const response = await fetch(releasesUrl, {
            next: { revalidate: 3600 }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch releases for ${repo}`);
        }
        const data: GithubReleaseResponse = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
