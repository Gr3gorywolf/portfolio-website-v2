"use client";

import { useInView } from "@/hooks/useInView";
import { Lightbox } from "./LightBox";
import { useState } from "react";

interface MasonryGalleryProps {
    images: string[];
    altPrefix?: string;
    className?: string;
}

export function MasonryGallery({ images, altPrefix = "Gallery image", className = "" }: MasonryGalleryProps) {
    const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const handleOpenLightBox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <>
            <Lightbox
                images={images}
                initialIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
            <div ref={ref} className={`w-full columns-1 sm:columns-2 lg:columns-3 gap-x-4 ${className}`}>
                {images.map((src, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleOpenLightBox(index)} 
                        className={`
            w-full block break-inside-avoid mb-4
            overflow-hidden rounded-lg border bg-muted/20
            transition-all duration-500 ease-out 
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                        style={{
                            transitionDelay: isInView ? `${Math.min(index * 80, 600)}ms` : "0ms"
                        }}
                        aria-label={`${altPrefix} ${index + 1}`}
                    >
                        <img
                            src={src || "/placeholder.svg"}
                            alt={`${altPrefix} ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto block object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                        />
                    </button>
                ))}
            </div>
        </>
    );
}
