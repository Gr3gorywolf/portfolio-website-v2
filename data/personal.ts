import type { PersonalInfo, SkillCategory, Education, Experience } from "@/types/Portfolio"

export const personalInfo: PersonalInfo = {
  name: "Gregory Alexander Cabral De Los Santos",
  title: "Full Stack Developer",
  email: "gregoryalexandercabral@gmail.com",
  phone: "+1 (829) 325-1377",
  location: "La Romana, Dominican Republic",
  bio: `Full-Stack Software Developer with over 8 years of experience working across React.js, Node.js, TypeScript, and Flutter. I specialize in building high-quality, maintainable, and scalable applications across web and mobile platforms. On the frontend, I’m highly proficient with React, Next.js, Redux, Tailwind, and component-driven development. On the backend, I’ve delivered APIs and services using Node.js, Express, Laravel, and Flask, and I’m comfortable working with both SQL (MySQL, SQLite) and NoSQL (MongoDB) databases.
      <br><br>
      I have strong experience building and maintaining cross-platform mobile apps using Flutter, React Native, and Xamarin, including platform-specific optimizations and real-time functionality with WebSockets. I’m also well-versed in CI/CD workflows (GitHub Actions, Jenkins), containerization with Docker, and working in cloud environments such as Google Cloud. I'm quick to adapt to new stacks and tools, and consistently bring a product-focused mindset to every project I join—whether it's modernizing legacy codebases, optimizing performance, or delivering full-featured applications from scratch.
`,
  image: "/img/profile.jpg",
  cvUrl: "/cv.pdf",
  socialLinks: {
    github: "https://github.com/gr3gorywolf",
    linkedin: "https://www.linkedin.com/in/gregory-alexander-cabral-de-los-santos-79835614b/",
    website: "https://links.gregoryc.dev",
  },
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", devicon: "javascript", years: 8, level: 95 },
      { name: "TypeScript", devicon: "typescript", years: 8, level: 90 },
      { name: "Python", devicon: "python", years: 3, level: 70 },
      { name: "Java", devicon: "java", years: 1, level: 50 },
      { name: "C#", devicon: "csharp", years: 2, level: 65 },
      { name: "PHP", devicon: "php", years: 4, level: 78 },
      { name: "Dart", devicon: "dart", years: 3, level: 78 },
      { name: "Bash", devicon: "bash", years: 3, level: 60 },
    ],
  },
  {
    title: "Web Frameworks & Libraries",
    skills: [
      { name: "React", devicon: "react", years: 7, level: 95 },
      { name: "Next.js", devicon: "nextjs", years: 3, level: 90 },
      { name: "Vue.js", devicon: "vuejs", years: 2, level: 75 },
      { name: "Angular", devicon: "angular", years: 2, level: 70 },
      { name: "MUI", devicon: "mui", years: 3, level: 80 },
      { name: "Bootstrap", devicon: "bootstrap", years: 3, level: 80 },
      { name: "Tailwind", devicon: "tailwindcss", years: 2, level: 90 },
      { name: "JQuery", devicon: "jquery", years: 3, level: 75 },
      { name: "Socket.io", devicon: "socketio", years: 4, level: 85 },
    ],
  },
  {
    title: "Mobile Frameworks",
    skills: [
      { name: "Flutter", devicon: "flutter", years: 3, level: 90 },
      { name: "React Native", devicon: "react", years: 4, level: 90 },
      { name: "Xamarin", devicon: "xamarin", years: 2, level: 60 },
      { name: "Native Android", devicon: "android", years: 1, level: 60 },
      { name: "Expo", devicon: "expo", years: 4, level: 90 },
    ],
  },
  {
    title: "Backend Frameworks",
    skills: [
      { name: "Node.js", devicon: "nodejs", years: 7, level: 95 },
      { name: "Express", devicon: "express", years: 7, level: 95 },
      { name: "Laravel", devicon: "laravel", years: 4, level: 85 },
      { name: "Flask", devicon: "flask", years: 1, level: 60 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", devicon: "mongodb", years: 3, level: 78 },
      { name: "MySQL", devicon: "mysql", years: 2, level: 65 },
      { name: "SQLite", devicon: "sqlite", years: 3, level: 75 },
    ],
  },
  {
    title: "Testing Frameworks",
    skills: [
      { name: "Jest", devicon: "jest", years: 3, level: 80 },
      { name: "Playwright", devicon: "playwright", years: 3, level: 80 },
    ],
  },
  {
    title: "CI/CD & Containerization",
    skills: [
      { name: "Docker", devicon: "docker", years: 3, level: 80 },
      { name: "GitHub Actions", devicon: "github", years: 2, level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "VSCode", devicon: "vscode", years: 7, level: 90 },
      { name: "Jira", devicon: "jira", years: 6, level: 90 },
      { name: "Git", devicon: "git", years: 7, level: 90 },
      { name: "Windows", devicon: "windows", years: 10, level: 100 },
      { name: "Linux", devicon: "linux", years: 7, level: 75 },
      { name: "MacOS", devicon: "apple", years: 6, level: 75 },
    ],
  },
  {
    title: "Agile & Methodologies",
    skills: [
      { name: "Scrum", devicon: "scrum", years: 6, level: 90 },
    ],
  },
]

export const education: Education[] = [
  {
    id: "1",
    institution: "Dominico Americano",
    degree: "Basic / Advanced English",
    startDate: "2017-01",
    endDate: "2018-09",
    logo: "/img/dominico_americano.png",
  },
  {
    id: "2",
    institution: "Universidad Dominicana O&M",
    degree: "Systems Engineering",
    startDate: "2017-01",
    endDate: "2021-11",
    logo: "/img/oym.jpg",
  },
  {
    id: "3",
    institution: "Alianza Juvenil",
    degree: "Basic C#",
    startDate: "2015-03",
    endDate: "2015-07",
    logo: "/img/Logo-Alianza.jpg",
  },
  {
    id: "4",
    institution: "Alianza Juvenil",
    degree: "Office Package and Basic Operating Systems Usage",
    startDate: "2014-02",
    endDate: "2014-11",
    logo: "/img/Logo-Alianza.jpg",
  },
  {
    id: "5",
    institution: "Calasanz San Eduardo",
    degree: "Bachelor’s Degree",
    startDate: "2010-01",
    endDate: "2016-08",
    logo: "/img/calasanz_logo.png",
  },
]

export const experience: Experience[] = [
  {
    id: "1",
    company: "DevourGo",
    position: "FullStack Developer",
    description: `
      Devour is the pioneering force behind DevourGO, a cutting-edge web3-powered platform revolutionizing the food ordering landscape through blockchain technology and exclusive rewards. Worked remotely as a contractor.
    `,
    responsabilities:[
      "Maintain and debug the DevourGo application.",
      "Implement dark theme for the main application.",
      "Create an Overwolf application that tracks in-game events to reward users.",
      "Add user interaction features to their Discord bot.",
      "Implement GitHub Actions CI to build the Overwolf app for both development and production environments.",
      "Develop several scripts to improve the overall developer experience."
    ],
    technologies: [
      { name: "Nodejs", devicon: "nodejs",  color: "#339933" },
      { name: "React", devicon: "react",  color: "#61DAFB" },
      { name: "Typescript", devicon: "typescript",  color: "#007ACC" },
      { name: "Magic link", devicon: "magic", color: "#FF4081" },
      { name: "Web3", devicon: "web3", color: "#FFFFFF" },
      { name: "MongoDB", devicon: "mongodb", color: "#47A248" },
      { name: "Express", devicon: "express", color: "#000000" },
      { name: "Swagger", devicon: "swagger", color: "#85EA2D" },
      { name: "Discord.js", devicon: "discord", color: "#7289DA" },
      { name: "Overwolf SDK", devicon: "overwolf", color: "#FF4B4B" },
      { name: "Google Cloud", devicon: "googlecloud", color: "#4285F4" },
      { name: "Github Actions", devicon: "github", color: "#181717" },
      { name: "NX", devicon: "nx", color: "#E03C31" },
      { name: "Docker", devicon: "docker", color: "#2496ED" }
    ],
    startDate: "2024-06",
    endDate: "2025-06",
    logo: "/img/devourgo.webp",
  },
  {
    id: "2",
    company: "Verizon",
    position: "Front end/ Adobe Target developer",
    description: `
      Verizon is the world's second-largest telecommunications company by revenue and its mobile network is the largest wireless carrier in the United States. Worked remotely as a contractor through Newtech.
    `,
    responsabilities:[
      "Creation of several campaign banners and elements.",
      "Design and implementation of various Adobe Target multivariate tests.",
      "Improved several existing campaigns."
    ],
    technologies: [
      { name: "HTML", devicon: "html5", color: "#E34F26" },
      { name: "CSS", devicon: "css3", color: "#1572B6" },
      { name: "Javascript", devicon: "javascript", color: "#F7DF1E" },
      { name: "JQuery", devicon: "jquery", color: "#0769AD" },
      { name: "Adobe Target", devicon: "adobetarget", color: "#FF6F20" }
    ],
    startDate: "2024-01",
    endDate: "2024-05",
    logo: "/img/verizon.png",
  },
  {
    id: "3",
    company: "Constant Contact",
    position: "Front end developer",
    description: `
      Constant Contact is an online marketing company headquartered in Waltham, Massachusetts. Worked remotely as a contractor through Newtech.
    `,
    responsabilities:[
      "Maintain and debug the Constant Contact’s events application.",
      "Design several features with pixel perfect design requirements.",
      "Port the application’s lerna monorepo into a modern NX monorepo.",
      "Implement Paypal on the front-end to receive payments from customers.",
      "Refactor several legacy React class components into functional components.",
      "Make a scrapping tool to migrate backend constants from properties format to JSON for frontend usage.",
      "Correct bugs on proprietary frontend components library (FEKIT)."
    ],
    technologies: [
      { name: "Nodejs", devicon: "nodejs", color: "#339933" },
      { name: "React", devicon: "react", color: "#61DAFB" },
      { name: "PropTypes", devicon: "react", color: "#F7DF1E" },
      { name: "Redux", devicon: "redux", color: "#764ABC" },
      { name: "NX", devicon: "nx", color: "#E03C31" },
      { name: "Jest", devicon: "jest", color: "#C21325" },
      { name: "Playwright", devicon: "playwright", color: "#0E1E25" },
      { name: "Jenkins", devicon: "jenkins", color: "#D24939" }
    ],
    startDate: "2022-03",
    endDate: "2023-11",
    logo: "/img/constant-contact-logo-icon.png",
  },
  {
    id: "4",
    company: "Version.do",
    position: "Full-stack developer",
    description: `
      Version.do enriches the software industry in eastern Dominican Republic, providing development, quality management, and design services to local and international companies.
    `,
    responsabilities:[
      "Maintenance and debugging of a freelancing web application.",
      "Contributed to development of multiple web/mobile applications for the government sector.",
      "Designed and developed a dates mobile application."
    ],
    technologies: [
      { name: "PHP", devicon: "php", color: "#899B9A" },
      { name: "Laravel", devicon: "laravel", color: "#FF2D20" },
      { name: "Yii", devicon: "yii", color: "#880E4F" },
      { name: "MySql", devicon: "mysql", color: "#4479A1" },
      { name: "MongoDB", devicon: "mongodb", color: "#47A248" },
      { name: "JavaScript", devicon: "javascript", color: "#F7DF1E" },
      { name: "Vue", devicon: "vuejs", color: "#42B883" },
      { name: "Angular", devicon: "angular", color: "#DD0031" },
      { name: "React", devicon: "react", color: "#61DAFB" },
      { name: "React Native", devicon: "react", color: "#61DAFB" },
      { name: "NodeJS", devicon: "nodejs", color: "#339933" }
    ],
    startDate: "2019-10",
    endDate: "2022-03",
    logo: "/img/version-do2.jpg",
  },
  {
    id: "5",
    company: "Banmovil EIRL",
    position: "Full-stack developer",
    description: `
      Banmovil EIRL provides a mobile/web application for lottery game plays from users' phones.
    `,
    responsabilities:[
      "Refactored a native android application.",
      "Ported a Xamarin android application to Xamarin forms.",
      "Maintenance of application backend.",
      "Ported a native mobile application to a PWA."
    ],
    technologies: [
      { name: "PHP", devicon: "php", color: "#899B9A" },
      { name: "Laravel", devicon: "laravel", color: "#FF2D20" },
      { name: "MySQL", devicon: "mysql", color: "#4479A1" },
      { name: "Jquery", devicon: "jquery", color: "#0769AD" },
      { name: "JavaScript", devicon: "javascript", color: "#F7DF1E" },
      { name: "Xamarin android", devicon: "xamarin", color: "#61DAFB" },
      { name: "Xamarin forms", devicon: "xamarin", color: "#61DAFB" }
    ],
    startDate: "2019-07",
    endDate: "2020-01",
    logo: "/img/banmovil.png",
  },
  {
    id: "6",
    company: "Self-Employee Freelancer",
    position: "Full-stack developer",
    description: `
      Worked on several small projects, gaining experience with various frontend/backend frameworks and libraries.
    `,
    responsabilities:[
      "Designed a real estate web application.",
      "Designed a travel booking web application.",
      "Developed a food and services delivery mobile application."
    ],
    technologies: [
      { name: "Angular", devicon: "angular", color: "#DD0031" },
      { name: "Native android", devicon: "android", color: "#A4C639" },
      { name: "Materialize.css", devicon: "materializecss", color: "#E0E0E0" },
      { name: "Nodejs", devicon: "nodejs", color: "#339933" }
    ],
    startDate: "2018-01",
    endDate: "2019-10",
    logo: "/img/freelance.png",
  },
]
