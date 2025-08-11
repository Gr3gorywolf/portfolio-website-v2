import type { Project } from "@/types/Portfolio"

export const projects: Project[] = [
   {
    id: "portfolio-website-v2",
    title: "Portfolio website V2",
    description: "Second version of my personal portfolio, built with Next.js and Tailwind CSS. This website showcases my work and skills.",
    appIcon: "/img/face.png",
    tags: ["web"],
    technologies: [
      { name: "NextJS", devicon: "nextjs" },
      { name: "Tailwind CSS", devicon: "tailwindcss" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "Node.js", devicon: "nodejs" }
    ],
    repositories: [
      {
        isMain: true,
        name: "Portfolio website V2",
        url: "https://github.com/Gr3gorywolf/portfolio-website-v2"
      }
    ],
    liveUrl: "https://gregoryc.dev",
    gallery: [
      "/projects-assets/portfolio-website-v2/image-1.png",
      "/projects-assets/portfolio-website-v2/image-2.png",
      "/projects-assets/portfolio-website-v2/image-3.png",
      "/projects-assets/portfolio-website-v2/image-4.png",
      "/projects-assets/portfolio-website-v2/image-5.png",
      "/projects-assets/portfolio-website-v2/image-6.png",
      "/projects-assets/portfolio-website-v2/image-7.png",
      "/projects-assets/portfolio-website-v2/image-8.png"
    ],
    featured: false,
    accentColor: "#ffffff"
  },
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
        mainBranch:"main",
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
      { name: "React", devicon: "react" },
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
        mainBranch: "main",
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
    ],
    demos: [
      {
        url: "https://raw.githubusercontent.com/Gr3gorywolf/HardWatch-ZeppOs/refs/heads/main/docs/HardWatch-Demo.gif",
        type: "gif",
        title: "HardWatch ZeppOS Demo",
      }
    ],
    featured: true,
    actions: [
      {
        "title": "Download client",
        "description": "Download the HardWatch client",
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
        mainBranch: "main",
        url: "https://github.com/Gr3gorywolf/decky-script-runner"
      }
    ],
    gallery: [
      "/projects-assets/decky-script-runner/script-runner.png",
    ],
    featured: true,
    accentColor: "#ffffff"
  },
  {
    id: "ScrapMancer",
    title: "ScrapMancer",
    description: "Scrapmancer is a tool that lets you you effortlessly create and manage web scraping cron jobs. Define your scraping jobs as JSON files and let Scrapmancer handle the rest. Ideal for automating data extraction tasks with minimal effort.",
    appIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    tags: ["web", "script"],
    technologies: [
      { name: "TypeScript", devicon: "typescript" },
      { name: "Playwright", devicon: "playwright" },
      { name: "Node.js", devicon: "nodejs" },
    ],
    repositories: [
      {
        isMain: true,
        name: "ScrapMancer",
        mainBranch: "main",
        url: "https://github.com/Gr3gorywolf/ScrapMancer"
      }
    ],
    gallery: [],
    accentColor: "#ffffff"
  },
  {
    id: "batocera_wine_manager",
    title: "Batocera Wine Manager",
    description: "Batocera Wine Manager is an application designed to manage Wine Proton on the Batocera ecosystem. It simplifies the process of installing, configuring, and managing Wine Proton to run Windows applications and games on Batocera systems improving the batocera windows experience.",
    appIcon: "https://github.com/Gr3gorywolf/batocera_wine_manager/raw/main/assets/icons/art.png?raw=true",
    tags: ["desktop"],
    technologies: [
      { name: "Dart", devicon: "dart" },
      { name: "Flutter", devicon: "flutter" },
    ],
    repositories: [
      {
        isMain: true,
        name: "Batocera Wine Manager",
        mainBranch: "main",
        url: "https://github.com/Gr3gorywolf/batocera_wine_manager"
      }
    ],
    gallery: [],
    accentColor: "#9c27b0"
  },
  {
    id: "personal-links",
    title: "Personal Links",
    description: "NextJS application to manage and share personal links, built with TypeScript and Tailwind CSS.",
    appIcon: "https://raw.githubusercontent.com/Gr3gorywolf/personal-links/refs/heads/main/public/icon.png",
    tags: ["web"],
    technologies: [
      { name: "Node.js", devicon: "nodejs" },
      { name: "Next.js", devicon: "nextjs" },
      { name: "Typescript", devicon: "typescript" },
      { name: "Tailwind CSS", devicon: "tailwindcss" },
    ],
    repositories: [
      {
        isMain: true,
        name: "Personal Links",
        mainBranch: "main",
        url: "https://github.com/Gr3gorywolf/personal-links"
      }
    ],
    gallery: [
      "/projects-assets/personal-links/screenshot.png"
    ],
    liveUrl: "https://links.gregoryc.dev/",
    accentColor: "#ff9800"
  },
  {
    id: "Mimicker",
    title: "Mimicker",
    description: "Application that allows you to run python scripts from a smartwatch with androidwear",
    appIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    tags: ["mobile"],
    technologies: [
      { name: "Flutter", devicon: "flutter" },
      { name: "Kotlin", devicon: "kotlin" },
    ],
    repositories: [
      {
        isMain: true,
        name: "Mimicker",
        url: "https://github.com/Gr3gorywolf/Mimicker"
      }
    ],
    gallery: [],
    accentColor: "#ffffff"
  },
  {
    id: "flutter-google-message-api",
    title: "Flutter Google Message API",
    description: "A plugin that allows you to use google messageApi easily for a two-way communication between a device with android wear and the phone",
    appIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    tags: ["mobile"],
    technologies: [
      { name: "Flutter", devicon: "flutter" },
      { name: "Kotlin", devicon: "kotlin" },
    ],
    repositories: [
      {
        isMain: true,
        name: "Flutter Google Message API",
        mainBranch: "main",
        url: "https://github.com/Gr3gorywolf/flutter-google-message-api"
      }
    ],
    gallery: [],
    accentColor: "#ffffff"
  },
  {
    id: "MediaBlade",
    title: "MediaBlade",
    description: "MediaBlade is a versatile application built in Flutter that facilitates scraping media content from various websites. It incorporates several features to enhance your media scraping experience.",
    appIcon: "https://github.com/Gr3gorywolf/MediaBlade/blob/master/assets/icons/icon.png?raw=true",
    tags: ["mobile"],
    technologies: [
      { name: "Dart", devicon: "dart" },
      { name: "Flutter", devicon: "flutter" },
      { name: "Kotlin", devicon: "kotlin" }
    ],
    repositories: [
      {
        isMain: true,
        name: "MediaBlade",
        url: "https://github.com/Gr3gorywolf/MediaBlade"
      }
    ],
    gallery: [
      "/projects-assets/media-blade/demo1.jpeg",
      "/projects-assets/media-blade/demo2.jpeg",
      "/projects-assets/media-blade/demo3.jpeg",
    ],
    accentColor: "#2196f3"
  },
  {
    id: "homeworkr",
    title: "Homeworkr",
    description: "Freelance-like flutter application for students, This application was made as my final project for my high school graduation.",
    appIcon: "https://github.com/Gr3gorywolf/homeworkr/blob/master/assets/img/logo.png?raw=true",
    tags: ["mobile"],
    technologies: [
      { name: "Dart", devicon: "dart" },
      { name: "Flutter", devicon: "flutter" },
      { name: "Firebase", devicon: "firebase" }
    ],
    repositories: [
      {
        isMain: true,
        name: "Homeworkr",
        url: "https://github.com/Gr3gorywolf/homeworkr"
      }
    ],
    actions: [
      {
        title: "Development Livestream VOD 1",
        description: "",
        url: "https://www.youtube.com/watch?v=2-vxdCwY9DI"
      },
      {
        title: "Development Livestream VOD 2",
        description: "",
        url: "https://www.youtube.com/watch?v=9uy63aqwFsQ"
      }
    ],
    gallery: [
      "/projects-assets/homeworkr/image-1.png",
      "/projects-assets/homeworkr/image-2.png",
      "/projects-assets/homeworkr/image-3.png",
      "/projects-assets/homeworkr/image-4.png",
      "/projects-assets/homeworkr/image-5.png",
    ],
    accentColor: "#009688"
  },


  {
    id: "my-alexa-skills",
    title: "My Alexa Skills",
    description: "Custom skill set for alexa using nodejs and express with the ssml-builder",
    appIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    tags: ["script"],
    technologies: [
      { name: "Node.js", devicon: "nodejs" },
      { name: "Express", devicon: "express" },
      { name: "SSML", devicon: "ssml" }
    ],
    repositories: [
      {
        isMain: true,
        name: "My Alexa Skills",
        url: "https://github.com/Gr3gorywolf/my-alexa-skills"
      }
    ],
    gallery: [],
    accentColor: "#ffffff"
  },

  {
    id: "portfolio-website",
    title: "Portfolio Website (V1)",
    description: "My personal portfolio website showcasing my projects and skills.",
    appIcon: "https://raw.githubusercontent.com/Gr3gorywolf/personal-links/refs/heads/main/public/icon.png",
    tags: ["web"],
    technologies: [
      { name: "Angular", devicon: "angular" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "SCSS", devicon: "sass" },
      { name: "Node.js", devicon: "nodejs" }
    ],
    repositories: [
      {
        isMain: true,
        name: "Portfolio Website V1",
        url: "https://github.com/Gr3gorywolf/portfolio-website"
      }
    ],
    gallery: [
      "/projects-assets/portfolio-website-v1/screenshot-1.png",
      "/projects-assets/portfolio-website-v1/screenshot-2.png",
      "/projects-assets/portfolio-website-v1/screenshot-3.png",
      "/projects-assets/portfolio-website-v1/screenshot-4.png",
      "/projects-assets/portfolio-website-v1/screenshot-5.png",
      "/projects-assets/portfolio-website-v1/screenshot-6.png",
      "/projects-assets/portfolio-website-v1/screenshot-7.png",
      "/projects-assets/portfolio-website-v1/screenshot-8.png",
    ],
    accentColor: "#ff9800"
  },
  {
    id: "NeonRom3r",
    title: "NeonRom3r",
    description: "Aplication that allows you to search and download roms of multiple consoles and even open it directly from the app",
    appIcon: "https://raw.githubusercontent.com/Gr3gorywolf/NeonRom3r/master/Resources/mipmap-xxxhdpi/ic_launcher.png",
    tags: ["mobile", "web"],
    technologies: [
      { name: "C#", devicon: "csharp" },
      { name: "Xamarin", devicon: "xamarin" },
      { name: "Firebase", devicon: "firebase" },
      { name: "Angular", devicon: "angular" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "SCSS", devicon: "sass" },
      { name: "Node.js", devicon: "nodejs" },
      { name: "Materialize", devicon: "materializecss" }
    ],
    repositories: [
      {
        isMain: true,
        name: "NeonRom3r Mobile",
        url: "https://github.com/Gr3gorywolf/NeonRom3r"
      },
      {
        isMain: false,
        name: "NeonRom3r Web",
        url: "https://github.com/Gr3gorywolf/neonrom3r-webpage"
      }
    ],
    liveUrl: "https://neonromer.gregoryc.dev/",
    gallery: [
      "https://neonromer.gregoryc.dev/assets/imgs/s17.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s11.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s12.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s5.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s14.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s15.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s16.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s13.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s18.png",
      "https://neonromer.gregoryc.dev/assets/imgs/s10.png",
      "https://raw.githubusercontent.com/Gr3gorywolf/neonrom3r-webpage/master/imgs/wps.png",
      "https://raw.githubusercontent.com/Gr3gorywolf/neonrom3r-webpage/master/imgs/wps2.png",
      "https://raw.githubusercontent.com/Gr3gorywolf/neonrom3r-webpage/master/imgs/wps3.png",
      "https://raw.githubusercontent.com/Gr3gorywolf/neonrom3r-webpage/master/imgs/wps4.png",
      "https://raw.githubusercontent.com/Gr3gorywolf/neonrom3r-webpage/master/imgs/wps5.png",
      "https://raw.githubusercontent.com/Gr3gorywolf/neonrom3r-webpage/master/imgs/wps6.png",
      "https://raw.githubusercontent.com/Gr3gorywolf/neonrom3r-webpage/master/imgs/wps7.png"
    ],
    accentColor: "#08a374"
  },
  {
    id: "Neonrom3r-rom-infos-scraper",
    title: "NeonRom3r Rom Infos Scraper",
    description: "A simple console application that scrap all the roms info the-eye.eu and libretro-thumbnails and then generate a json containing the info of every rom",
    appIcon: "https://raw.githubusercontent.com/Gr3gorywolf/NeonRom3r/master/Resources/mipmap-xxxhdpi/ic_launcher.png",
    tags: ["script"],
    technologies: [
      { name: "C#", devicon: "csharp" },
    ],
    repositories: [
      {
        isMain: true,
        name: "Neonrom3r-rom-infos-scraper",
        url: "https://github.com/Gr3gorywolf/Neonrom3r-rom-infos-scraper"
      }
    ],
    gallery: [],
    accentColor: "#08a374"
  },
  {
    id: "multitube",
    title: "Multitube",
    description: "Multi modules application that allows you to stream and download videos from youtube and more!.",
    appIcon: "https://raw.githubusercontent.com/Gr3gorywolf/Multitube.android/master/src/Resources/mipmap-xxxhdpi/ic_launcher_foreground.png",
    tags: ["desktop", "web", "mobile"],
    technologies: [
      { name: "Angular", devicon: "angular" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "SCSS", devicon: "sass" },
      { name: "Node.js", devicon: "nodejs" },
      { name: "Electron", devicon: "electron" },
      { name: "Xamarin.Android", devicon: "xamarin" },
      { name: "Express", devicon: "express" },
    ],
    repositories: [
      {
        isMain: true,
        name: "Mobile App",
        url: "https://github.com/Gr3gorywolf/Multitube.android"
      },
      {
        isMain: false,
        name: "Desktop App",
        url: "https://github.com/Gr3gorywolf/multitube-desktop"
      },
      {
        isMain: false,
        name: "Web Helper",
        url: "https://github.com/Gr3gorywolf/Multitubewebhelper"
      },
      {
        isMain: false,
        name: "Backend",
        url: "https://github.com/Gr3gorywolf/multitube-backend"
      }
    ],
    liveUrl: "https://multitube.gregoryc.dev/",
    readmeUrl: "https://github.com/Gr3gorywolf/Multitube.android/blob/master/README.md",
    gallery: [
      "https://raw.githubusercontent.com/Gr3gorywolf/Multitube.android/master/docs/img/screenshots/1.jpeg",
      "https://raw.githubusercontent.com/Gr3gorywolf/Multitube.android/master/docs/img/screenshots/2.jpeg",
      "https://raw.githubusercontent.com/Gr3gorywolf/Multitube.android/master/docs/img/screenshots/3.jpeg",
      "https://raw.githubusercontent.com/Gr3gorywolf/Multitube.android/master/docs/img/screenshots/5.jpeg",
      "https://raw.githubusercontent.com/Gr3gorywolf/Multitube.android/master/docs/img/screenshots/6.jpeg",
      "https://raw.githubusercontent.com/Gr3gorywolf/Multitube.android/master/docs/img/screenshots/7.jpeg"
    ],
    accentColor: "#d41c17"
  }
]
