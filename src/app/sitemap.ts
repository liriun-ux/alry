// app/sitemap.ts
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://alry.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/youtube', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tiktok', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/facebook', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/google', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/agente-ia', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/sitio-web', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
