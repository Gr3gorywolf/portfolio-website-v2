"use client";
import { useState } from "react";
import { Lightbox } from "./LightBox";
import { Maximize2 } from "lucide-react";
import { Button } from "./ui/Button";
import { AnimatedStaggeredGrid } from "./AnimatedStaggeredGrid";

interface Props {
    images: string[];
    animated?: boolean;
    staggerDelay?: number;
    gridClassName?: string;
    imageClassName?: string;
}

export const LightBoxGallery = ({ images, gridClassName, imageClassName, animated, staggerDelay }: Props) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };
    const renderWrapper = (children: React.ReactNode[]) => {
        if (animated) {
            return (
                <div className="lightbox-gallery">
                    <AnimatedStaggeredGrid className={`${gridClassName}`} staggerDelay={staggerDelay}>
                        {children}
                    </AnimatedStaggeredGrid>
                </div>
            );
        }
        return <div className={`lightbox-gallery ${gridClassName}`}>{children}</div>;
    };
    return (
        <>
            {renderWrapper(
                images.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group">
                        <img
                            src={image || "/placeholder.svg"}
                            alt={`Project screenshot ${index + 1}`}
                            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${imageClassName}`}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button
                                size="sm"
                                variant="secondary"
                                className="bg-black/60 hover:bg-black/80 text-white border-0"
                                onClick={() => openLightbox(index)}
                            >
                                <Maximize2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))
            )}
            <Lightbox
                images={images}
                initialIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
        </>
    );
};
