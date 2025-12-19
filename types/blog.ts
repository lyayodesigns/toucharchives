export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  categories?: Array<{
    _id: string
    title: string
  }>
  publishedAt: string
  _updatedAt?: string
  excerpt?: string
  body?: any
}
