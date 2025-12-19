import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'
import type { BlogPost } from '@/types/blog'

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    slug,
    publishedAt,
    _updatedAt
  }`

  const posts = await client.fetch(query)
  return posts
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://toucharchives.com'
  
  const blogPosts = await getBlogPosts()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/touchscreen-software`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPostPages]
}
