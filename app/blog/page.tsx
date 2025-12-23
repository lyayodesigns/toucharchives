import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { client, urlFor } from "@/lib/sanity"
import type { BlogPost } from "@/types/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Digital Hall of Fame Insights & Resources",
  description:
    "Explore articles, guides, and insights about digital hall of fame displays, interactive touchscreen technology, and recognition systems. Learn best practices for showcasing your legacy.",
  keywords: [
    "digital hall of fame blog",
    "touchscreen display articles",
    "recognition display guides",
    "hall of fame best practices",
    "interactive display insights",
    "digital signage blog",
    "museum technology",
    "athletic hall of fame tips",
  ],
  openGraph: {
    title: "Blog - Digital Hall of Fame Insights & Resources | Touch Archive",
    description:
      "Explore articles, guides, and insights about digital hall of fame displays, interactive touchscreen technology, and recognition systems.",
    type: "website",
    url: "https://toucharchives.com/blog",
    images: [
      {
        url: "/Touchstone Kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Touch Archive Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Digital Hall of Fame Insights & Resources",
    description:
      "Explore articles, guides, and insights about digital hall of fame displays and interactive touchscreen technology.",
    images: ["/Touchstone Kiosk.jpg"],
  },
  alternates: {
    canonical: "https://toucharchives.com/blog",
  },
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    categories[]->{
      _id,
      title
    },
    publishedAt,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "..."
  }`

  const posts = await client.fetch(query)
  return posts
}

async function getCategories(): Promise<{ _id: string; title: string; count: number }[]> {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "count": count(*[_type == "post" && references(^._id)])
  }`

  const categories = await client.fetch(query)
  return categories
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  const categories = await getCategories()

  return (
    <main className="min-h-screen bg-white">
      {/* Page Title Section */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            {/* <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">Blog Posts</span>
            </div> */}

            {/* Page Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Blog Posts</h1>
          </div>
        </div>
      </section>

      {/* Blog List with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
              {/* Main Content - Blog Posts */}
              <div>
                {blogPosts.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-gray-600 text-lg">No blog posts found. Add posts in your Sanity Studio.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, idx) => (
                      <Card
                        key={post._id}
                        className="hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:-translate-y-1 flex flex-col"
                      >
                        {/* Featured Image */}
                        <Link href={`/blog/${post.slug.current}`} className="relative h-[220px] overflow-hidden group">
                          {post.mainImage ? (
                            <Image
                              src={urlFor(post.mainImage).width(800).height(600).url()}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground">No image</span>
                            </div>
                          )}
                        </Link>

                        {/* Content */}
                        <CardContent className="p-6 flex flex-col flex-grow">
                          {/* Category Tags */}
                          {post.categories && post.categories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.categories.map((category) => (
                                <span
                                  key={category._id}
                                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                                >
                                  {category.title}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Title */}
                          <Link href={`/blog/${post.slug.current}`}>
                            <h2 className="text-xl font-bold text-gray-900 mb-3 text-balance transition-colors duration-300 hover:text-primary cursor-pointer line-clamp-2">
                              {post.title}
                            </h2>
                          </Link>

                          {/* Excerpt */}
                          {post.excerpt && <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{post.excerpt}</p>}

                          {/* Read More Button */}
                          <div className="mt-auto">
                            <Link href={`/blog/${post.slug.current}`}>
                              <Button
                                variant="outline"
                                className="border-gray-300 text-gray-900 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent group w-full"
                              >
                                Read More
                                <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar - Categories */}
              <aside className="lg:sticky lg:top-4 h-fit">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category._id}
                        href={`/blog?category=${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <span className="text-gray-700 group-hover:text-primary transition-colors">
                          {category.title}
                        </span>
                        <span className="text-gray-500 text-sm">({category.count})</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
