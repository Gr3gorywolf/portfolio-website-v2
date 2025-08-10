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
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-b-0 border-accent-orange"></div>
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
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          h1: ({ children, style, ...props }) => <h1 style={style} {...props} className="text-2xl font-bold mb-4 text-foreground">{children}</h1>,
          h2: ({ children, style, ...props }) => <h2 style={style} {...props} className="text-xl font-semibold mb-3 text-foreground">{children}</h2>,
          h3: ({ children, style, ...props }) => <h3 style={style} {...props} className="text-lg font-medium mb-2 text-foreground">{children}</h3>,
          h4: ({ children, style, ...props }) => <h4 style={style} {...props} className="text-base font-medium mb-2 text-foreground">{children}</h4>,
          h5: ({ children, style, ...props }) => <h5 style={style} {...props} className="text-sm font-medium mb-2 text-foreground">{children}</h5>,
          h6: ({ children, style, ...props }) => <h6 style={style} {...props} className="text-xs font-medium mb-2 text-foreground">{children}</h6>,
          p: ({ children, style, ...props }) => <p style={style} {...props} className="mb-3 text-muted-foreground leading-relaxed">{children}</p>,
          ul: ({ children, style, ...props }) => <ul style={style} {...props} className="mb-3 ml-4 list-disc text-muted-foreground">{children}</ul>,
          ol: ({ children, style, ...props }) => <ol style={style} {...props} className="mb-3 ml-4 list-decimal text-muted-foreground">{children}</ol>,
          li: ({ children, style, ...props }) => <li style={style} {...props} className="mb-1">{children}</li>,
          code: ({ children, className, style, ...props }) => {
            const isInline = !className
            if (isInline) {
              return <code style={style} {...props} className="bg-muted px-1 py-0.5 rounded text-accent-orange text-sm">{children}</code>
            }
            return <code style={style} {...props} className={className}>{children}</code>
          },
          pre: ({ children, style, ...props }) => <pre style={style} {...props} className="bg-muted border rounded-lg p-4 overflow-x-auto mb-4">{children}</pre>,
          blockquote: ({ children, style, ...props }) => (
            <blockquote style={style} {...props} className="border-l-4 border-accent-orange pl-4 italic text-muted-foreground mb-4">
              {children}
            </blockquote>
          ),
          img: ({ src, alt, style, height, width, ...props }) => (
            <img src={src || "/placeholder.svg"} alt={alt} style={style} height={height} width={width} {...props} className="max-w-full h-auto rounded-lg border mb-4" />
          ),
          a: ({ href, children, style, ...props }) => (
            <a href={href} style={style} {...props} target="_blank" rel="noopener noreferrer" className="text-accent-orange hover:underline">
              {children}
            </a>
          ),
          table: ({ children, style, ...props }) => (
            <div style={style} {...props} className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-muted">{children}</table>
            </div>
          ),
          thead: ({ children, style, ...props }) => <thead style={style} {...props} className="bg-muted">{children}</thead>,
          tbody: ({ children, style, ...props }) => <tbody style={style} {...props}>{children}</tbody>,
          tr: ({ children, style, ...props }) => <tr style={style} {...props} className="border-b border-muted">{children}</tr>,
          th: ({ children, style, ...props }) => (
            <th style={style} {...props} className="border border-muted px-4 py-2 text-left font-medium text-foreground">{children}</th>
          ),
          td: ({ children, style, ...props }) => <td style={style} {...props} className="border border-muted px-4 py-2 text-muted-foreground">{children}</td>,
          hr: ({ style, ...props }) => <hr style={style} {...props} className="border-muted my-4" />,
          div: ({ children, style, ...props }) => <div style={style} {...props}>{children}</div>,
          span: ({ children, style, ...props }) => <span style={style} {...props}>{children}</span>,
          strong: ({ children, style, ...props }) => <strong style={style} {...props} className="font-bold text-foreground">{children}</strong>,
          em: ({ children, style, ...props }) => <em style={style} {...props} className="italic">{children}</em>,
          del: ({ children, style, ...props }) => <del style={style} {...props} className="line-through text-muted-foreground">{children}</del>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
