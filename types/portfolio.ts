export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  bio: string
  image: string
  cvUrl: string
  socialLinks: {
    github: string
    linkedin: string
    twitter?: string
    website?: string
  }
}

export interface Skill {
  name: string
  devicon: string // Changed from icon to devicon
  years: number
  level: number // 0-100
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  startDate: string
  endDate: string
  logo: string // Changed from icon to logo
}

export interface Experience {
  id: string
  company: string
  position: string
  description: string
  startDate: string
  endDate: string
  technologies: Technology[]
  responsabilities: string[]
  logo: string // Changed from icon to logo
}

export interface Project {
  id: string
  title: string
  description: string
  appIcon: string // Changed from icon to appIcon (image URL)
  tags: ProjectTag[]
  technologies: Technology[]
  subprojects?: Subproject[] // Changed from dependencies
  repositories: Repository[]
  liveUrl?: string
  gallery: string[]
  readmeUrl?: string // Custom README URL
  featured: boolean // Add this new field
  releases?: Release[] // Add this new field
}

export interface Subproject {
  name: string
  url: string
}

export interface ProjectTag {
  name: string
  icon: string
  type: "mobile" | "web" | "backend" | "script" 
}

export interface Technology {
  name: string
  devicon: string // Changed from icon to devicon
  color: string
}

export interface Repository {
  name: string
  url: string
  isMain: boolean
}

export interface Release {
  name: string
  version: string
  description: string
  date: string
  url: string
}

export interface GitHubCommit {
  sha: string
  message: string
  author: {
    name: string
    avatar: string
  }
  date: string
  url: string
}
