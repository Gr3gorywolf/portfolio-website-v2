"use client";
import { Demo } from "@/types/Portfolio";
import { Pause, Play, Maximize2 } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Lightbox } from "../LightBox";

interface Props {
    demo: Demo;
}
export const ProjectDetailDemoCard: FC<Props> = ({ demo }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const toggleVideo = (videoElement: HTMLVideoElement) => {
        if (isVideoPlaying) {
            videoElement.pause();
        } else {
            videoElement.play();
        }
        setIsVideoPlaying(!isVideoPlaying);
    };
    const openFullscreen = (element: HTMLVideoElement | HTMLImageElement) => {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    };

    const renderContent = () => {
        // For video demos
        if (demo.type === "video") {
            return (
                <div className="relative aspect-video bg-black">
                    <video
                        ref={(el) => {
                            if (el) {
                                el.onended = () => {
                                    setIsVideoPlaying(false);
                                };
                            }
                        }}
                        className="w-full  object-cover h-60"
                        poster={demo.thumbnail}
                        preload="metadata"
                        muted
                        loop
                    >
                        <source src={demo.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Video Controls Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    className="bg-black/60 hover:bg-black/80 text-white border-0"
                                    onClick={(e) => {
                                        const video = e.currentTarget.parentElement?.parentElement?.parentElement?.querySelector(
                                            "video"
                                        ) as HTMLVideoElement;
                                        if (video) toggleVideo(video);
                                    }}
                                >
                                    {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                </Button>

                                <Button
                                    size="sm"
                                    variant="secondary"
                                    className="bg-black/60 hover:bg-black/80 text-white border-0"
                                    onClick={(e) => {
                                        const video = e.currentTarget.parentElement?.parentElement?.parentElement?.querySelector(
                                            "video"
                                        ) as HTMLVideoElement;
                                        if (video) openFullscreen(video);
                                    }}
                                >
                                    <Maximize2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                </div>
            );
        }
        // For image or GIF demos
        return (
            <div className="relative aspect-video group cursor-pointer">
                <img
                    src={demo.url || "/placeholder.svg"}
                    alt={demo.title || `${demo.type} demo`}
                    className="object-cover h-60 w-full"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                        size="sm"
                        variant="secondary"
                        className="bg-black/60 hover:bg-black/80 text-white border-0"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <Maximize2 className="w-4 h-4" />
                    </Button>
                </div>

                {/* GIF indicator */}
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">GIF</div>
            </div>
        );
    };

    return (
        <>
            {demo.type === "gif" && (
                <Lightbox
                    images={[demo.url]}
                    initialIndex={0}
                    isOpen={isLightboxOpen}
                    onClose={() => setIsLightboxOpen(false)}
                />
            )}
            <Card className="overflow-hidden group">
                <CardContent className="p-0 relative ">
                    {renderContent()}
                    {demo.title && (
                        <div className="p-3 bg-muted/50">
                            <h3 className="text-sm font-medium text-center">{demo.title}</h3>
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    );
};
