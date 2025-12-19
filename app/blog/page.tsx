"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Archives: Interactive Touchscreen Technology",
      excerpt:
        "Discover how modern touchscreen technology is revolutionizing the way museums, universities, and organizations preserve and share their historical archives.",
      image: "/interactive-touchscreen-display-showing-historical.jpg",
      categories: ["Technology", "Innovation"],
    },
    {
      id: 2,
      title: "5 Ways Touch Archive Enhances Visitor Engagement",
      excerpt:
        "Learn how interactive digital displays create memorable experiences for visitors and increase engagement with your historical collections.",
      image: "/modern-touchscreen-display-wall-mounted-showing-di.jpg",
      categories: ["Best Practices", "Engagement"],
    },
    {
      id: 3,
      title: "From Static Plaques to Dynamic Displays: A Case Study",
      excerpt:
        "See how one university transformed their hall of fame from traditional plaques to an engaging interactive touchscreen experience.",
      image: "/digital-display-showing-legacy-and-achievements.jpg",
      categories: ["Case Studies", "Education"],
    },
    {
      id: 4,
      title: "Cloud-Based Archive Management: Benefits and Best Practices",
      excerpt:
        "Explore the advantages of cloud-based archive systems and learn how to manage your digital collections efficiently.",
      image: "/digital-archive-management-system-on-laptop.jpg",
      categories: ["Technology", "Cloud"],
    },
    {
      id: 5,
      title: "Designing Intuitive Touchscreen Interfaces for Museums",
      excerpt:
        "Best practices for creating user-friendly touchscreen interfaces that enhance the museum visitor experience.",
      image: "/interactive-touchscreen-display-showing-historical.jpg",
      categories: ["Design", "Museums"],
    },
    {
      id: 6,
      title: "How Universities Are Preserving History with Digital Archives",
      excerpt:
        "Explore how leading universities are using digital technology to preserve and showcase their institutional history.",
      image: "/digital-display-showing-legacy-and-achievements.jpg",
      categories: ["Education", "Preservation"],
    },
  ]

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
            <div className="flex flex-col gap-8">
              {blogPosts.map((post, idx) => (
                <Card
                  key={post.id}
                  className={`hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:-translate-y-1 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="grid lg:grid-cols-[400px_1fr] gap-0">
                    {/* Featured Image */}
                    <div className="relative h-[250px] lg:h-[280px] overflow-hidden group">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                      {/* Category Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.map((category) => (
                          <span
                            key={category}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 hover:bg-orange-500 hover:text-white cursor-pointer"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 text-balance transition-colors duration-300 hover:text-orange-500 cursor-pointer">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

                      {/* Read More Button */}
                      <div>
                        <Button
                          variant="outline"
                          className="border-gray-300 text-gray-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 bg-transparent group"
                        >
                          Read More
                          <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
