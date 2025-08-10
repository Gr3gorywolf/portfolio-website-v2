
# Portfolio Website v2

Second version of my personal portfolio, built with **Next.js** and **Tailwind CSS**.
Live site: [gregoryc.dev](https://gregoryc.dev/) btw, you can see the details of this project inside the portfolio since this is also a personal project (Projectseption) [gregoryc.dev/projects/portfolio-website-v2](https://gregoryc.dev/projects/portfolio-website-v2)


## 🌟 Features


- 🖼 **Masonry Grid**: Projects display an image gallery in a Pinterest-like masonry grid layout.
- 🎨 **Adaptive Colors**: Each project has its own color theme applied to multiple parts of its detail view UI.
- 📦 **Scalable & Typed**: All personal information and project data are centralized in one place with strong TypeScript typing.
- ⚡ High performance using **Next.js** (App Router, image optimization, SSR/SSG).
- 🎨 Modern, fully responsive styling with **Tailwind CSS**.
- 🧩 Modular architecture with `app`, `components`, `hooks`, `data` and more.
- 🚀 Continuous deployment with **Vercel**.

---

## 📂 Project Structure

```

├── app/               # Main routes and pages
├── components/        # Reusable UI components
├── data/              # Static data (e.g., projects)
├── hooks/             # Custom React hooks
├── lib/, services/, utils/  # API calls, helpers, utilities
├── public/            # Static assets (images, favicons)
├── types/             # Global TypeScript definitions
├── next.config.mjs
├── tailwind.config.js
├── package.json
├── README.md

````

---

## 🛠 Installation & Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/Gr3gorywolf/portfolio-website-v2.git
cd portfolio-website-v2
npm install    # or yarn / pnpm
npm run dev    # start development server
````

Open `http://localhost:3000` in your browser.

---

## 📜 Available Scripts

| Command | Description                        |
| ------- | ---------------------------------- |
| `dev`   | Run development server             |
| `build` | Create production build            |
| `start` | Serve optimized production build   |
| `lint`  | Run ESLint for code quality checks |

---

## 🚀 Deployment

The site is automatically deployed to **Vercel** on every push.
It uses `next/image` optimization, static routes, and the Next.js App Router.

