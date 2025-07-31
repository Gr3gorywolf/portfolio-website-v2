"use client";

import { useEffect, useLayoutEffect } from "react";

type Props = {
    accent: string;
};

export const AccentColorChanger = ({ accent }: Props) => {
    function lighten(color: string, percent: number): string {
        const num = parseInt(color.replace("#", ""), 16);
        const r = Math.min(255, ((num >> 16) & 0xff) + 255 * percent);
        const g = Math.min(255, ((num >> 8) & 0xff) + 255 * percent);
        const b = Math.min(255, (num & 0xff) + 255 * percent);
        return `#${((1 << 24) + (Math.floor(r) << 16) + (Math.floor(g) << 8) + Math.floor(b)).toString(16).slice(1)}`;
    }

    function darken(color: string, percent: number): string {
        const num = parseInt(color.replace("#", ""), 16);
        const r = Math.max(0, ((num >> 16) & 0xff) - 255 * percent);
        const g = Math.max(0, ((num >> 8) & 0xff) - 255 * percent);
        const b = Math.max(0, (num & 0xff) - 255 * percent);
        return `#${((1 << 24) + (Math.floor(r) << 16) + (Math.floor(g) << 8) + Math.floor(b)).toString(16).slice(1)}`;
    }

    useLayoutEffect(() => {
        const light = lighten(accent, 0.3);
        const dark = darken(accent, 0.2);
        const root = document.documentElement;
        const defaultStyles = {
            "accent-orange": document.documentElement.style.getPropertyValue("--accent-orange"),
            "accent-orange-light": document.documentElement.style.getPropertyValue("--accent-orange-light"),
            "accent-orange-dark": document.documentElement.style.getPropertyValue("--accent-orange-dark"),
        };
        root.style.setProperty("--accent-orange", accent);
        root.style.setProperty("--accent-orange-light", light);
        root.style.setProperty("--accent-orange-dark", dark);

        return () => {
            root.style.setProperty("--accent-orange", defaultStyles["accent-orange"]);
            root.style.setProperty("--accent-orange-light", defaultStyles["accent-orange-light"]);
            root.style.setProperty("--accent-orange-dark", defaultStyles["accent-orange-dark"]);
        };
    }, [accent]);

    return null;
};
