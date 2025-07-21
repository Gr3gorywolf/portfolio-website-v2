import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Complete e-commerce platform with admin panel, shopping cart, and integrated payment system.",
    appIcon: "/placeholder.svg?height=60&width=60&text=EC",
    tags: [
      { name: "Web", icon: "Globe", type: "web" },
      { name: "Backend", icon: "Server", type: "backend" },
    ],
    technologies: [
      { name: "React", devicon: "react", color: "#61DAFB" },
      { name: "Node.js", devicon: "nodejs", color: "#339933" },
      { name: "MongoDB", devicon: "mongodb", color: "#47A248" },
      { name: "Stripe", devicon: "stripe", color: "#635BFF" },
    ],
    subprojects: [
      { name: "Frontend", url: "https://github.com/yourusername/ecommerce-frontend" },
      { name: "Backend API", url: "https://github.com/yourusername/ecommerce-backend" },
      { name: "Admin Panel", url: "https://github.com/yourusername/ecommerce-admin" },
    ],
    repositories: [
      { name: "ecommerce-frontend", url: "https://github.com/yourusername/ecommerce-frontend", isMain: true },
      { name: "ecommerce-backend", url: "https://github.com/yourusername/ecommerce-backend", isMain: false },
    ],
    liveUrl: "https://ecommerce-demo.vercel.app",
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Screenshot1",
      "/placeholder.svg?height=400&width=600&text=Screenshot2",
      "/placeholder.svg?height=400&width=600&text=Screenshot3",
    ],
    featured: true,
    releases: [
      {
        name: "Major Update v2.0",
        version: "v2.0.0",
        description:
          "Complete redesign with new payment system and improved performance. Added dark mode support and mobile optimization.",
        date: "2024-01-10",
        url: "https://github.com/yourusername/ecommerce-frontend/releases/tag/v2.0.0",
      },
      {
        name: "Bug Fixes v1.5.2",
        version: "v1.5.2",
        description: "Fixed critical security vulnerabilities and improved checkout flow.",
        date: "2023-12-15",
        url: "https://github.com/yourusername/ecommerce-frontend/releases/tag/v1.5.2",
      },
    ],
  },
  {
    id: "2",
    title: "Task Manager Mobile",
    description: "Mobile app for task management with real-time sync and push notifications.",
    appIcon: "/placeholder.svg?height=60&width=60&text=TM",
    tags: [{ name: "Mobile", icon: "Smartphone", type: "mobile" }],
    technologies: [
      { name: "React Native", devicon: "react", color: "#61DAFB" },
      { name: "Firebase", devicon: "firebase", color: "#FFCA28" },
      { name: "TypeScript", devicon: "typescript", color: "#3178C6" },
    ],
    repositories: [
      { name: "task-manager-mobile", url: "https://github.com/yourusername/task-manager-mobile", isMain: true },
    ],
    gallery: [
      "/placeholder.svg?height=600&width=300&text=Mobile1",
      "/placeholder.svg?height=600&width=300&text=Mobile2",
      "/placeholder.svg?height=600&width=300&text=Mobile3",
    ],
    featured: true,
    releases: [
      {
        name: "iOS Release v1.2",
        version: "v1.2.0",
        description: "First stable release for iOS with full feature parity. Includes offline mode and improved sync.",
        date: "2024-01-05",
        url: "https://github.com/yourusername/task-manager-mobile/releases/tag/v1.2.0",
      },
    ],
  },
  {
    id: "3",
    title: "HardWatch Client",
    description: "Hardware monitoring application with real-time system metrics and alerts.",
    appIcon: "/placeholder.svg?height=60&width=60&text=HW",
    tags: [{ name: "Script", icon: "Terminal", type: "script" }],
    technologies: [
      { name: "Python", devicon: "python", color: "#3776AB" },
      { name: "React", devicon: "react", color: "#61DAFB" },
      { name: "TypeScript", devicon: "typescript", color: "#3178C6" },
    ],
    repositories: [{ name: "hardwatch-client", url: "https://github.com/Gr3gorywolf/HardWatch-client", isMain: true }],
    gallery: ["/placeholder.svg?height=400&width=600&text=Chart1", "/placeholder.svg?height=400&width=600&text=Chart2"],
    readmeUrl: "https://raw.githubusercontent.com/Gr3gorywolf/HardWatch-client/refs/heads/main/readme.md",
    featured: false,
  },
]
