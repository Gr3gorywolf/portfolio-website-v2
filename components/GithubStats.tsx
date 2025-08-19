"use client";

import { useState, useEffect } from "react";
import { Star, GitFork, Eye, AlertCircle } from "lucide-react";
import { GithubRepoStatsResponse } from "@/types/GithubRepoStatsResponse";
import { formatNumber } from "@/utils/string";

interface GitHubStatsProps {
    stats: GithubRepoStatsResponse;
    variant?: "compact" | "detailed";
    className?: string;
}

export function GitHubStats({ stats, variant = "compact", className = "" }: GitHubStatsProps) {

    // Detailed variant
    if (variant === "detailed") {
        return (
            <div className={`grid grid-cols-2 gap-4 ${className}`}>
                <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <div>
                        <div className="font-medium">{formatNumber(stats.stargazers_count)}</div>
                        <div className="text-xs text-muted-foreground">Stars</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-blue-500" />
                    <div>
                        <div className="font-medium">{formatNumber(stats.forks)}</div>
                        <div className="text-xs text-muted-foreground">Forks</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-green-500" />
                    <div>
                        <div className="font-medium">{formatNumber(stats.watchers)}</div>
                        <div className="text-xs text-muted-foreground">Watchers</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <div>
                        <div className="font-medium">{formatNumber(stats.open_issues_count)}</div>
                        <div className="text-xs text-muted-foreground">Issues</div>
                    </div>
                </div>
            </div>
        );
    }

    // Compact variant
    return (
        <div className={`flex items-center gap-3 text-xs text-muted-foreground ${className}`}>
            <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-white" />
                <span>{formatNumber(stats.stargazers_count)}</span>
            </div>
            <div className="flex items-center gap-1">
                <GitFork className="w-3 h-3 text-white" />
                <span>{formatNumber(stats.forks)}</span>
            </div>
            <div className="flex items-center gap-1">
                <Eye className="w-3 h-3 text-white" />
                <span>{formatNumber(stats.watchers)}</span>
            </div>
            <div className="flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-white" />
                <span>{formatNumber(stats.open_issues_count)}</span>
            </div>
        </div>
    );
}
