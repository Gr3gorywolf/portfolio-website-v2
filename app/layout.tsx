import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gregory Cabral - Full Stack Developer",
  description: "Personal portfolio of Gregory Cabral, a full stack developer from Dominican Republic.",
  keywords: [
    "Gregory Cabral",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend",
    "Backend",
    "Projects",
    "Experience",
    "Contact"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "Gregory Cabral" }],
  creator: "Gregory Cabral",
  openGraph: {
    title: "Gregory Cabral - Full Stack Developer",
    description: "Explore the portfolio of Gregory Cabral, a full stack developer from Dominican Republic.",
    url: "https://gregorycabral.com",
    siteName: "Gregory Cabral Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gregory Cabral - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gregory Cabral - Full Stack Developer",
    description: "Personal portfolio of Gregory Cabral, full stack developer.",
    images: ["/og-image.png"],
    creator: "@gregorycabral",
  },
  themeColor: "#18181b",
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
