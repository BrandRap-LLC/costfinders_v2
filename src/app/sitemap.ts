import type { MetadataRoute } from 'next'

// Orange County cities for SEO sitemap
const ORANGE_COUNTY_CITIES = [
  'Costa Mesa',
  'Foothill Ranch',
  'Irvine',
  'Laguna Beach',
  'Laguna Hills',
  'Laguna Woods',
  'Lake Forest',
  'Mission Viejo',
  'Newport Beach',
  'Santa Ana',
  'Tustin',
]

// Slugify helper for URL-safe strings
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.costfinders.ai'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // California state page (future)
  const statePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/california`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Orange County city pages (future routes: /california/{city-slug})
  const cityPages: MetadataRoute.Sitemap = ORANGE_COUNTY_CITIES.map((city) => ({
    url: `${baseUrl}/california/${slugify(city)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticPages, ...statePages, ...cityPages]
}
