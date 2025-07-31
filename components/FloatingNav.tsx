"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import {
    User,
    Briefcase,
    GraduationCap,
    FolderOpen,
    Code,
    Image,
    FileText,
    Info,
    GitCommitVertical,
    BookOpenText,
    GitGraph,
    Video,
} from "lucide-react";

const icons = {
    info: Info,
    gallery: Image,
    commits: GitCommitVertical,
    readme: BookOpenText,
    code: Code,
    user: User,
    experience: Briefcase,
    education: GraduationCap,
    projects: FolderOpen,
    skills: Code,
    showcase: Video,
};

export interface FloatingNavItem {
    id: string;
    label: string;
    icon: keyof typeof icons;
}
interface Props {
    items: FloatingNavItem[];
}

export function FloatingNav({ items }: Props) {
    const navItems = items?.length > 0 ? items : [];
    const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? "");

useEffect(() => {
    const handleScroll = () => {
        const sections = navItems
            .map((item) => {
                const el = document.getElementById(item.id);
                if (!el) return null;
                const rect = el.getBoundingClientRect();
                return {
                    id: item.id,
                    top: rect.top,
                };
            })
            .filter(Boolean) as { id: string; top: number }[];

        const visibleSections = sections.filter(
            (section) => section.top >= 0 && section.top < window.innerHeight / 2
        );

        const nearest = visibleSections.length
            ? visibleSections.sort((a, b) => a.top - b.top)[0]
            : sections
                  .filter((s) => s.top < 0)
                  .sort((a, b) => b.top - a.top)[0];

        if (nearest && nearest.id !== activeSection) {
            setActiveSection(nearest.id);
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Ejecutar inmediatamente

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [navItems, activeSection]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 61, // Adjust for fixed header
                behavior: "smooth",
            });
            console.log(`Scrolled to section: ${sectionId}`, element, element.offsetTop);
        }
    };

    return (
        <>
            {/* Desktop Navigation - Vertical Left */}
            <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
                <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm border rounded-lg p-2">
                    {navItems.map((item) => {
                        const Icon = icons[item.icon];
                        return (
                            <Button
                                key={item.id}
                                variant={activeSection === item.id ? "default" : "ghost"}
                                size="icon"
                                onClick={() => scrollToSection(item.id)}
                                className={activeSection === item.id ? "bg-accent-orange hover:bg-accent-orange" : ""}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="sr-only">{item.label}</span>
                            </Button>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Navigation - Horizontal Bottom */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
                <div className="flex gap-2 bg-card/90 backdrop-blur-sm border rounded-full px-4 py-2 shadow-lg">
                    {navItems.map((item) => {
                        const Icon = icons[item.icon];
                        return (
                            <Button
                                key={item.id}
                                variant={activeSection === item.id ? "default" : "ghost"}
                                size="sm"
                                onClick={() => scrollToSection(item.id)}
                                className={`rounded-full ${
                                    activeSection === item.id ? "bg-accent-orange hover:bg-accent-orange" : ""
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="sr-only">{item.label}</span>
                            </Button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
