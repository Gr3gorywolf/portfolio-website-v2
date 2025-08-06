"use client";

import { projects } from "@/data/projects";
import { useParams } from "next/navigation";

interface ProjectLoaderProps {
    variant?: "grid" | "detail" | "card";
    color?: string;
}

export function ProjectLoader({ variant = "grid", color }: ProjectLoaderProps) {
    const params = useParams();
    const project = projects.find((p) => p.id === params?.id);
    const projectColor = project?.accentColor;
    const loaderColor = color || projectColor || "var(--accent-orange)";
    const renderCenterLoader = () => {
        return (
            <div className="fixed inset-0 mt-[61px]  backdrop-blur-sm flex items-center justify-center z-50" style={{ backgroundColor: `${loaderColor}08` }}>
                <div className="text-center flex flex-col items-center">
                    <div
                        className="w-16 h-16 rounded-full border-4 border-muted animate-spin mb-4"
                        style={{ borderTopColor: loaderColor }}
                    />
                </div>
            </div>
        );
    };

    if (variant === "detail") {
        return (
            <div className="container max-w-6xl mx-auto px-4 py-8 pt-20">
                {renderCenterLoader()}
                {/* Back button skeleton */}
                <div className="animate-pulse mb-6">
                    <div className="h-10 bg-muted rounded w-32"></div>
                </div>

                {/* Project header skeleton */}
                <div className="animate-pulse mb-8">
                    <div className="bg-card border rounded-lg overflow-hidden">
                        <div className="p-6 pb-4 border-b" style={{ backgroundColor: `${loaderColor}08` }}>
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 bg-muted rounded-xl"></div>
                                <div className="flex-1 space-y-3">
                                    <div className="h-8 bg-muted rounded w-2/3"></div>
                                    <div className="flex gap-2">
                                        <div className="h-6 bg-muted rounded w-16"></div>
                                        <div className="h-6 bg-muted rounded w-20"></div>
                                    </div>
                                    <div className="h-4 bg-muted rounded w-full"></div>
                                    <div className="h-4 bg-muted rounded w-3/4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 grid lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-6">
                                <div className="space-y-3">
                                    <div className="h-6 bg-muted rounded w-48"></div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <div key={i} className="h-12 bg-muted rounded-lg"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-6 bg-muted rounded w-32"></div>
                                <div className="space-y-3">
                                    <div className="h-12 bg-muted rounded"></div>
                                    <div className="h-12 bg-muted rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery and commits skeleton */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="h-8 bg-muted rounded w-24"></div>
                        <div className="space-y-4">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="aspect-video bg-muted rounded-lg"></div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-8 bg-muted rounded w-36"></div>
                        <div className="bg-card border rounded-lg p-4 space-y-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-muted rounded w-3/4"></div>
                                        <div className="h-3 bg-muted rounded w-1/2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* README skeleton */}
                <div className="space-y-4">
                    <div className="h-8 bg-muted rounded w-24"></div>
                    <div className="bg-card border rounded-lg p-6 space-y-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-4 bg-muted rounded"
                                style={{ width: `${Math.random() * 40 + 60}%` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "card") {
        return (
            <div className="bg-card border rounded-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-muted"></div>
                <div className="p-4 space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-lg"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-5 bg-muted rounded w-3/4"></div>
                            <div className="flex gap-1">
                                <div className="h-4 bg-muted rounded w-12"></div>
                                <div className="h-4 bg-muted rounded w-16"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                    <div className="flex gap-2 mt-4">
                        <div className="h-8 bg-muted rounded flex-1"></div>
                        <div className="h-8 w-8 bg-muted rounded"></div>
                        <div className="h-8 w-8 bg-muted rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Grid variant (default)
    return (
        <div className="container max-w-6xl mx-auto px-4 py-8 pt-20">
            {renderCenterLoader()}
            {/* Header skeleton */}
            <div className="animate-pulse text-center mb-8">
                <div className="h-10 bg-muted rounded w-64 mx-auto mb-4"></div>
                <div className="w-24 h-1 bg-muted mx-auto"></div>
            </div>

            {/* Filters skeleton */}
            <div className="animate-pulse mb-8">
                <div className="bg-card border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="h-6 bg-muted rounded w-20"></div>
                        <div className="h-6 bg-muted rounded w-16"></div>
                    </div>
                </div>
            </div>

            {/* Projects grid skeleton */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <ProjectLoader key={i} variant="card" color={color} />
                ))}
            </div>
        </div>
    );
}
