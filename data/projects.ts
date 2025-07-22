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
    releases: []
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
    readmeUrl: "https://raw.githubusercontent.com/Gr3gorywolf/HardWatch-client/refs/heads/main/readme.md",
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
      "https://private-user-images.githubusercontent.com/26353631/387413515-299b625e-ffd8-40cc-b0e2-de650ac8c462.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMyMjE0NTMsIm5iZiI6MTc1MzIyMTE1MywicGF0aCI6Ii8yNjM1MzYzMS8zODc0MTM1MTUtMjk5YjYyNWUtZmZkOC00MGNjLWIwZTItZGU2NTBhYzhjNDYyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzIyVDIxNTIzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE1NGVmMTI2MTdmNjE1MDZiMDAyMDA2MWVlMWJjYTA2Yjc2ZTM0NmQzMWIwMWMwODk3NWU4NDA3MzlkMjg1ODMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.F7XeszZdiuFicQz5GPxAKrYpgsAAMug7xa73JMAPafY", 
    ],
    featured: true,
  }
]
