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
                <div className="text-center ">
                    <div className="flex flex-row justify-center my-4">
                        <AnimatedWrapper animation="stagger" duration={600} delay={100}>
                            <div className="size-72 [@media_(max-height:768px)]:size-64 lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px]">
                                <GregoryMainSVG />
                            </div>
                        </AnimatedWrapper>
                    </div>
                </div>
                <div className="text-center mt-8 mb-8">
                    <AnimatedWrapper animation="fade-in" duration={700} delay={400}>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Gregory Cabral</h1>
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="fade-in" delay={600} duration={700}>
                        <p className="text-base md:text-lg text-muted-foreground mt-2">Full Stack Developer</p>
                    </AnimatedWrapper>
                </div>
                <AnimatedWrapper animation="stagger" delay={700}>
                    <div className="flex flex-row justify-center gap-12">
                        <Link href="/about" className="group">
                            <Card className="h-full w-32 transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-accent-orange">
                                <CardContent className="p-2 text-center">
                                    <div className="mb-2">
                                        <div className="w-9 h-9 md:w-12 md:h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto  group-hover:bg-accent-orange/20 transition-colors">
                                            <User className="w-7 h-7  text-accent-orange" />
                                        </div>
                                        <h2 className="text-md  font-semibold mb-2">About Me</h2>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href="/projects" className="group">
                            <Card className="h-full w-32 transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-accent-orange">
                                <CardContent className="p-2 text-center">
                                    <div className="mb-2">
                                        <div className="w-9 h-9 md:w-12 md:h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto  group-hover:bg-accent-orange/20 transition-colors">
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
