import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { client, urlFor } from "@/lib/sanity"
import type { BlogPost } from "@/types/blog"

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

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-white">
      {/* Page Title Section */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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

      {/* Blog List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {blogPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No blog posts found. Add posts in your Sanity Studio.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {blogPosts.map((post, idx) => (
                  <Card
                    key={post._id}
                    className="hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:-translate-y-1"
                  >
                    <div className="grid lg:grid-cols-[400px_1fr] gap-0">
                      {/* Featured Image */}
                      <Link href={`/blog/${post.slug.current}`} className="relative h-[250px] lg:h-[280px] overflow-hidden group">
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
                      <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                        {/* Category Tags */}
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories.map((category) => (
                              <span
                                key={category._id}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                              >
                                {category.title}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <Link href={`/blog/${post.slug.current}`}>
                          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 text-balance transition-colors duration-300 hover:text-primary cursor-pointer">
                            {post.title}
                          </h2>
                        </Link>

                        {/* Excerpt */}
                        {post.excerpt && <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>}

                        {/* Read More Button */}
                        <div>
                          <Link href={`/blog/${post.slug.current}`}>
                            <Button
                              variant="outline"
                              className="border-gray-300 text-gray-900 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent group"
                            >
                              Read More
                              <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
