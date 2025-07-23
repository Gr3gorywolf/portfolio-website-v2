import { DeviconName } from "@/components/devicon"
import { PROJECT_TAGS } from "@/utils/constants"

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
  devicon: DeviconName
  years: number
  level: number
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
  appIcon: string
  tags: (keyof typeof PROJECT_TAGS)[]
  technologies: Technology[]
  repositories: Repository[]
  actions?: Action[]
  liveUrl?: string
  gallery: string[]
  readmeUrl?: string
  featured?: boolean
  releases?: Release[]
}


export interface Action{
  title: string
  description: string
  url: string
}
export interface Subproject {
  name: string
  url: string
}

export interface Technology {
  name: string
  devicon: DeviconName
  color?: string
}

export interface Repository {
  name: string
  url: string
  isMain?: boolean
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
