import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "refugio-musical",
    title: "Refugio Musical",
    description: "Refugio musical is a online radio station based on La Romana Dominican Republic managed by Jose Cabral (My father)",
    appIcon: "https://github.com/Gr3gorywolf/refugio-musical/blob/main/public/logo.png?raw=true",
    tags: ["web"],
    technologies: [
      { name: "NextJS", devicon: "nextjs" },
      { name: "Tailwind CSS", devicon: "tailwindcss" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "Node.js", devicon: "nodejs" },
      { name: "AzuraCast", devicon: "azuracast" }
    ],
    repositories: [
      {
        isMain: true,
        name: "Refugio Musical",
        url: "https://github.com/Gr3gorywolf/refugio-musical"
      }
    ],
    liveUrl: "https://refugiomusical.com",
    gallery: [
      "/projects-assets/refugio-musical/refugio.png",
      "/projects-assets/refugio-musical/refugio-2.png",
    ],
    featured: true,
    accentColor: "#f44336"
  },
  {
    id: "HardWatch",
    title: "HardWatch",
    description: "HardWatch is an application designed to monitor and collect real-time system performance metrics. It sends this data to the HardWatch Server and allows remote execution of commands via a web interface or the ZeppOS app.",
    appIcon: "https://raw.githubusercontent.com/Gr3gorywolf/HardWatch-client/refs/heads/main/icon.ico",
    tags: ["web", "script", "backend", "mobile"],
    technologies: [
      { name: "NextJS", devicon: "nextjs" },
      { name: "Tailwind CSS", devicon: "tailwindcss" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "Node.js", devicon: "nodejs" },
      { name: "Python", devicon: "python" },
      { name: "ZeppOs SDK", devicon: "zeppos" }
    ],
    repositories: [
      {
        isMain: true,
        name: "HardWatch Client",
        url: "https://github.com/Gr3gorywolf/HardWatch-client"
      },
      {
        name: "HardWatch Server",
        url: "https://github.com/Gr3gorywolf/HardWatch-server"
      },
      {
        name: "HardWatch ZeppOS App",
        url: "https://github.com/Gr3gorywolf/HardWatch-ZeppOs"
      }
    ],
    gallery: [
      "/projects-assets/hardwatch/hardwatch.png",
      "/projects-assets/hardwatch/hardwatch-2.png",
      "/projects-assets/hardwatch/hardwatch-3.png",
      "https://raw.githubusercontent.com/Gr3gorywolf/HardWatch-ZeppOs/refs/heads/main/docs/HardWatch-Demo.gif"
    ],
    featured: true,
    actions: [
      {
        "title": "Download client",
        "description": "Download the HardWatch client for your system",
        "url": "https://github.com/Gr3gorywolf/HardWatch-client/releases/latest"
      },
      {
        "title": "Setup server",
        "description": "Download and setup the HardWatch server",
        "url": "https://github.com/Gr3gorywolf/HardWatch-server/releases/latest"
      },
      {
        "title": "Install ZeppOS app",
        "description": "Download the HardWatch ZeppOS app",
        "url": "https://github.com/Gr3gorywolf/HardWatch-ZeppOs"
      }
    ],
    readmeUrl: "https://raw.githubusercontent.com/Gr3gorywolf/HardWatch-client/refs/heads/main/readme.md",
    accentColor: "#4caf50"
  },
  {
    id: "decky-script-runner",
    title: "Decky Script Runner",
    description: "Decky Script Runner is a plugin designed for the Steam Deck, offering a powerful environment to run, manage, and edit scripts. With a focus on flexibility, it supports running multiple scripts simultaneously, editing and uploading script through the integrated sideloader, and sharing scripts within a community-driven repository.",
    appIcon: "https://github.com/Gr3gorywolf/decky-script-runner/blob/main/assets/logo.png?raw=true",
    tags: ["web", "script", "mobile"],
    technologies: [
      { name: "React", devicon: "react" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "Node.js", devicon: "nodejs" },
      { name: "Python", devicon: "python" },
      { name: "Decky API", devicon: "decky" }
    ],
    repositories: [
      {
        isMain: true,
        name: "Decky Script Runner",
        url: "https://github.com/Gr3gorywolf/decky-script-runner"
      }
    ],
    gallery: [
      "/projects-assets/decky-script-runner/script-runner.png",
    ],
    featured: true,
    accentColor: "#ffffff"
  }
]
