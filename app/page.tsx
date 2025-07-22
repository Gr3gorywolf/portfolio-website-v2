import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { User, FolderOpen } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <ThemeToggle className="fixed top-4 right-4 z-50" />

      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Portfolio</h1>
          <div className="w-24 h-1 bg-accent-orange mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link href="/about" className="group">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-accent-orange">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-accent-orange/20 transition-colors">
                    <User className="w-6 h-6 md:w-8 md:h-8 text-accent-orange" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">About Me</h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Learn more about my experience, skills and professional journey
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/projects" className="group">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-accent-orange">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-accent-orange/20 transition-colors">
                    <FolderOpen className="w-6 h-6 md:w-8 md:h-8 text-accent-orange" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">My Projects</h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Explore my work and projects I've participated in
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
