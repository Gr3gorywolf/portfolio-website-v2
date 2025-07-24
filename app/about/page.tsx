import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FloatingNav, FloatingNavItem } from "@/components/FloatingNav";
import { CircularProgress } from "@/components/circular-progress";
import { ThemeToggle } from "@/components/theme-toggle";
import { TopNav } from "@/components/top-nav";
import { Devicon } from "@/components/devicon";
import { personalInfo, skillCategories, education, experience } from "@/data/personal";
import { Download, Github, Linkedin, Twitter, Globe, Mail, Phone, MapPin, Calendar, FolderOpen, Briefcase, Code, GraduationCap, User } from "lucide-react";

// Add import at the top
import { FeaturedProjectCard } from "@/components/featured-project-card";
import { projects } from "@/data/projects";



export default  function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <ThemeToggle />
      <FloatingNav page="about" />

      <div className="container max-w-6xl mx-auto px-4 py-8 pt-20">
        {/* Personal Info Section */}
        <section id="personal" className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="flex justify-center lg:justify-start">
              <img src={personalInfo.image || "/placeholder.svg"} alt={personalInfo.name} className="rounded-lg object-cover" />
            </div>
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{personalInfo.name}</CardTitle>
                  <p className="text-xl text-accent-orange">{personalInfo.title}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{personalInfo.location}</span>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button asChild className="bg-accent-orange hover:bg-accent-orange/90">
                      <Link href={personalInfo.cvUrl}>
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </Link>
                    </Button>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Link href={personalInfo.socialLinks.github} className="text-muted-foreground hover:text-accent-orange">
                      <Github className="w-5 h-5" />
                    </Link>
                    <Link href={personalInfo.socialLinks.linkedin} className="text-muted-foreground hover:text-accent-orange">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                    {personalInfo.socialLinks.twitter && (
                      <Link href={personalInfo.socialLinks.twitter} className="text-muted-foreground hover:text-accent-orange">
                        <Twitter className="w-5 h-5" />
                      </Link>
                    )}
                    {personalInfo.socialLinks.website && (
                      <Link href={personalInfo.socialLinks.website} className="text-muted-foreground hover:text-accent-orange">
                        <Globe className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: personalInfo.bio }}></p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-orange"></div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 border-4 border-accent-orange">
                    <Image src={exp.logo || "/placeholder.svg"} alt={exp.company} width={64} height={64} className="rounded-full object-cover" />
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      <p className="text-accent-orange font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                      <ul className="list-disc list-inside mt-2 ml-1 space-y-1">
                        {exp.responsabilities.map((responsability, index) => (
                          <li key={index} className="text-muted-foreground d-block">
                            {responsability}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech, index) => (
                          <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                            <Devicon name={tech.devicon} size={12} />
                            {tech.name}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-orange"></div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 border-4 border-accent-orange">
                    <Image src={edu.logo || "/placeholder.svg"} alt={edu.institution} width={35} height={35} className="object-cover " />
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-16" id="featured-projects">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Here are some of my most notable projects that showcase my skills and experience</p>
          </div>

          <div className="space-y-6 mb-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent-orange hover:bg-accent-orange/90">
              <Link href="/projects">
                <FolderOpen className="w-4 h-4 mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="space-y-4">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="overflow-hidden">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-base">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-1">
                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-11 gap-2">
                    {category.skills
                      .sort((a, b) => b.years - a.years)
                      .map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-center mb-3 flex flex-col cursor-pointer items-center hover:scale-105 transition-transform duration-300">
                          <Devicon name={skill.devicon} whiteBackgroundWhenBlack={true} className="mb-1" size={35} />
                          <h3 className="text-sm font-medium mt-1">{skill.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {skill.years} {skill.years === 1 ? "year" : "years"}
                          </p>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
