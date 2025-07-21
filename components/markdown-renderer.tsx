"use client"

import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import "highlight.js/styles/github-dark.css"

interface MarkdownRendererProps {
  readmeUrl: string
}

export function MarkdownRenderer({ readmeUrl }: MarkdownRendererProps) {
  const [content, setContent] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(readmeUrl)
        if (!response.ok) {
          throw new Error(`Failed to fetch README: ${response.status}`)
        }

        const text = await response.text()
        setContent(text)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load README")
        setContent("# README\n\nFailed to load README content.")
      } finally {
        setLoading(false)
      }
    }

    fetchReadme()
  }, [readmeUrl])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-orange"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Failed to load README</p>
        <p className="text-sm text-muted-foreground mt-2">{error}</p>
      </div>
    )
  }

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-accent-orange prose-pre:bg-muted prose-pre:border">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]} // Added rehypeRaw for HTML support
        components={{
          h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 text-foreground">{children}</h1>,
          h2: ({ children }) => <h2 className="text-xl font-semibold mb-3 text-foreground">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-medium mb-2 text-foreground">{children}</h3>,
          h4: ({ children }) => <h4 className="text-base font-medium mb-2 text-foreground">{children}</h4>,
          h5: ({ children }) => <h5 className="text-sm font-medium mb-2 text-foreground">{children}</h5>,
          h6: ({ children }) => <h6 className="text-xs font-medium mb-2 text-foreground">{children}</h6>,
          p: ({ children }) => <p className="mb-3 text-muted-foreground leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="mb-3 ml-4 list-disc text-muted-foreground">{children}</ul>,
          ol: ({ children }) => <ol className="mb-3 ml-4 list-decimal text-muted-foreground">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
          code: ({ children, className }) => {
            const isInline = !className
            if (isInline) {
              return <code className="bg-muted px-1 py-0.5 rounded text-accent-orange text-sm">{children}</code>
            }
            return <code className={className}>{children}</code>
          },
          pre: ({ children }) => <pre className="bg-muted border rounded-lg p-4 overflow-x-auto mb-4">{children}</pre>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent-orange pl-4 italic text-muted-foreground mb-4">
              {children}
            </blockquote>
          ),
          img: ({ src, alt }) => (
            <img src={src || "/placeholder.svg"} alt={alt} className="max-w-full h-auto rounded-lg border mb-4" />
          ),
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-orange hover:underline">
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-muted">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => <tr className="border-b border-muted">{children}</tr>,
          th: ({ children }) => (
            <th className="border border-muted px-4 py-2 text-left font-medium text-foreground">{children}</th>
          ),
          td: ({ children }) => <td className="border border-muted px-4 py-2 text-muted-foreground">{children}</td>,
          hr: () => <hr className="border-muted my-4" />,
          // Support for HTML elements
          div: ({ children, ...props }) => <div {...props}>{children}</div>,
          span: ({ children, ...props }) => <span {...props}>{children}</span>,
          strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          del: ({ children }) => <del className="line-through text-muted-foreground">{children}</del>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
