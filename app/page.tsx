import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { User, FolderOpen } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GregoryMainSVG } from "@/components/SVGs/GregoryMain";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";

export default function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
            <ThemeToggle className="fixed top-4 right-4 z-50" />

            <div className="container max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex flex-row justify-center my-4">
                        <AnimatedWrapper animation="stagger" delay={450}>
                            <div className="h-72 lg:h-[550px] w-72 lg:w-[550px]">
                                <GregoryMainSVG />
                            </div>
                        </AnimatedWrapper>
                    </div>
                </div>
                <AnimatedWrapper animation="stagger" delay={100}>
                    <div className="flex flex-row justify-center gap-12">
                        <Link href="/about" className="group">
                            <Card className="h-full w-36 transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-accent-orange">
                                <CardContent className="p-5 text-center">
                                    <div className="mb-4">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto  group-hover:bg-accent-orange/20 transition-colors">
                                            <User className="w-7 h-7  text-accent-orange" />
                                        </div>
                                        <h2 className="text-md  font-semibold mb-2">About Me</h2>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/projects" className="group">
                            <Card className="h-full w-36 transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-accent-orange">
                                <CardContent className="p-5 text-center">
                                    <div className="mb-4">
                                        <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto  group-hover:bg-accent-orange/20 transition-colors">
                                            <FolderOpen className="w-7 h-7  text-accent-orange" />
                                        </div>
                                        <h2 className="text-md  font-semibold mb-2">My Projects</h2>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </AnimatedWrapper>
            </div>
        </div>
    );
}
