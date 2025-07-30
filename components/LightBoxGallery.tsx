"use client";
import { useState } from "react";
import { Lightbox } from "./LightBox";

interface Props {
  images: string[];
  gridClassName?: string;
  imageClassName?: string;
}

export const LightBoxGallery = ({ images, gridClassName, imageClassName }: Props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  return (
    <>
      <div className={`lightbox-gallery ${gridClassName}`}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group" onClick={() => openLightbox(index)}>
            <img src={image || "/placeholder.svg"} alt={`Project screenshot ${index + 1}`} className={`object-cover group-hover:scale-105 transition-transform duration-300 ${imageClassName}`} />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Lightbox images={images} initialIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </>
  );
};
