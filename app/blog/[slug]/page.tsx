import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calendar, Tag, List } from "lucide-react"
import { client, urlFor } from "@/lib/sanity"
import type { BlogPost } from "@/types/blog"
import { PortableText } from "@portabletext/react"

interface TocItem {
  id: string
  text: string
  level: number
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    body,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "..."
  }`

  const post = await client.fetch(query, { slug })
  return post
}

function extractTableOfContents(body: any[]): TocItem[] {
  if (!body) return []
  
  const toc: TocItem[] = []
  
  body.forEach((block, index) => {
    if (block._type === 'block' && block.style === 'h2') {
      const text = block.children
        ?.map((child: any) => child.text)
        .join('') || ''
      
      if (text) {
        const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
        const level = parseInt(block.style.substring(1))
        toc.push({ id, text, level })
      }
    }
  })
  
  return toc
}

function createPortableTextComponents(toc: TocItem[]) {
  const headingIdMap = new Map<string, string>()
  let headingCounter = 0

  return {
    types: {
      image: ({ value }: any) => {
        return (
          <div className="my-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(value).width(1200).height(675).url()}
              alt={value.alt || "Blog image"}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        )
      },
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6">{children}</h1>
      ),
      h2: ({ children, value }: any) => {
        const text = value.children?.map((child: any) => child.text).join('') || ''
        const tocItem = toc.find(item => item.text === text && item.level === 2)
        return (
          <h2 id={tocItem?.id} className="text-3xl font-bold text-gray-900 mt-10 mb-5 scroll-mt-24">
            {children}
          </h2>
        )
      },
      h3: ({ children, value }: any) => {
        const text = value.children?.map((child: any) => child.text).join('') || ''
        const tocItem = toc.find(item => item.text === text && item.level === 3)
        return (
          <h3 id={tocItem?.id} className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24">
            {children}
          </h3>
        )
      },
      h4: ({ children, value }: any) => {
        const text = value.children?.map((child: any) => child.text).join('') || ''
        const tocItem = toc.find(item => item.text === text && item.level === 4)
        return (
          <h4 id={tocItem?.id} className="text-xl font-bold text-gray-900 mt-6 mb-3 scroll-mt-24">
            {children}
          </h4>
        )
      },
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-gray-700 bg-gray-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700 ml-4">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
        >
          {children}
        </a>
      )
    },
      strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      code: ({ children }: any) => (
        <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      ),
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const toc = extractTableOfContents(post.body || [])
  const portableTextComponents = createPortableTextComponents(toc)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] lg:h-[350px] bg-gradient-to-br from-primary to-primary/80">

        {/* Back Button */}
        <div className="absolute top-8 left-4 lg:left-8 z-10">
          <Link href="/blog">
            <Button
              variant="secondary"
              className="bg-white/90 hover:bg-white text-gray-900 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm lg:text-base">{formattedDate}</span>
              </div>
              {post.categories && post.categories.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4" />
                  {post.categories.map((category, idx) => (
                    <span key={category._id} className="text-sm lg:text-base">
                      {category.title}
                      {idx < post.categories!.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
              {/* Main Content */}
              <div className="max-w-4xl">
                {/* Featured Image */}
                {post.mainImage && (
                  <div className="mb-8 rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(1200).height(675).url()}
                      alt={post.title}
                      width={1200}
                      height={675}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                )}

                <Card className="border-0 shadow-none">
                  <CardContent className="p-0">
                    {post.body ? (
                      <article className="prose prose-lg max-w-none">
                        <PortableText value={post.body} components={portableTextComponents} />
                      </article>
                    ) : (
                      <div className="text-center py-16">
                        <p className="text-gray-600 text-lg">No content available for this post.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Categories Section */}
                {post.categories && post.categories.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <span
                          key={category._id}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to Blog Button */}
                <div className="mt-12 text-center">
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-gray-300 text-gray-900 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      View All Posts
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Table of Contents Sidebar */}
              {toc.length > 0 && (
                <aside className="hidden lg:block">
                  <div className="sticky top-24">
                    <Card className="border border-gray-200 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                          <List className="h-5 w-5 text-primary" />
                          <h3 className="font-bold text-gray-900 text-base">Table of Contents</h3>
                        </div>
                        <nav className="space-y-3">
                          {toc.map((item, index) => (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-all duration-200"
                            >
                              <span className="text-gray-400 font-medium mt-0.5 min-w-[20px]">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <span className="hover:underline leading-relaxed">
                                {item.text}
                              </span>
                            </a>
                          ))}
                        </nav>
                      </CardContent>
                    </Card>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
