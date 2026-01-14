import type { Metadata } from 'next'

// Site-wide configuration
export const SITE_CONFIG = {
  name: 'CostFinders',
  url: 'https://www.costfinders.ai',
  description: 'Find and compare medspa deals, treatments, and pricing near you. Discover the best aesthetic treatment prices from verified providers.',
  social: {
    twitter: '@costfinders',
    instagram: '@costfinders',
  },
} as const

/**
 * Build a canonical URL from a path
 * @param path - Path relative to site root (e.g., '/california/irvine')
 * @returns Full canonical URL
 */
export function buildCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_CONFIG.url}${cleanPath}`
}

/**
 * Generate metadata for location pages (state, city, neighborhood)
 * @param city - City name (e.g., 'Irvine')
 * @param state - State name (e.g., 'California')
 * @param dealCount - Number of active deals in this location
 * @returns Next.js Metadata object
 */
export function generateLocationMetadata(
  city: string,
  state: string,
  dealCount: number
): Metadata {
  const title = `Medspa Deals in ${city}, ${state}`
  const description = `Discover ${dealCount} medspa deals and aesthetic treatment prices in ${city}, ${state}. Compare Botox, fillers, laser treatments, and more from verified providers.`
  const canonicalPath = `/${state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_CONFIG.social.twitter,
    },
    alternates: {
      canonical: buildCanonicalUrl(canonicalPath),
    },
  }
}

/**
 * Generate metadata for state-level pages
 * @param state - State name (e.g., 'California')
 * @param cityCount - Number of cities with deals
 * @param dealCount - Total deals in state
 * @returns Next.js Metadata object
 */
export function generateStateMetadata(
  state: string,
  cityCount: number,
  dealCount: number
): Metadata {
  const title = `Medspa Deals in ${state}`
  const description = `Browse ${dealCount} medspa deals across ${cityCount} cities in ${state}. Find the best prices on Botox, fillers, and aesthetic treatments.`
  const canonicalPath = `/${state.toLowerCase()}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_CONFIG.social.twitter,
    },
    alternates: {
      canonical: buildCanonicalUrl(canonicalPath),
    },
  }
}

/**
 * Generate metadata for neighborhood pages with keyword-optimized titles
 * @param neighborhood - Neighborhood name
 * @param city - City name
 * @param state - State name
 * @param stats - Stats object with dealCount and businessCount
 * @returns Next.js Metadata object
 */
export function generateNeighborhoodMetadata(
  neighborhood: string,
  city: string,
  state: string,
  stats: { dealCount: number; businessCount: number }
): Metadata {
  const title = `${neighborhood} Medspa Deals in ${city}, ${state} | Compare ${stats.dealCount} Offers`
  const description = `Compare ${stats.dealCount} medspa deals from ${stats.businessCount} verified providers in ${neighborhood}, ${city}. Save up to 50% on Botox, fillers, and aesthetic treatments. Book today!`
  const stateSlug = state.toLowerCase().replace(/\s+/g, '-')
  const citySlug = city.toLowerCase().replace(/\s+/g, '-')
  const neighborhoodSlug = neighborhood.toLowerCase().replace(/\s+/g, '-')
  const canonicalPath = `/${stateSlug}/${citySlug}/${neighborhoodSlug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_CONFIG.social.twitter,
    },
    alternates: {
      canonical: buildCanonicalUrl(canonicalPath),
    },
  }
}

/**
 * Generate metadata for provider pages
 * @param provider - Provider/business name
 * @param city - City name
 * @param state - State name
 * @param stats - Stats object with dealCount and services array
 * @returns Next.js Metadata object
 */
export function generateProviderMetadata(
  provider: string,
  city: string,
  state: string,
  stats: { dealCount: number; services?: string[] }
): Metadata {
  const title = `${provider} - Medspa Deals in ${city}, ${state}`
  const servicesText = stats.services?.slice(0, 3).join(', ') || 'aesthetic treatments'
  const description = `Explore ${stats.dealCount} exclusive deals from ${provider} in ${city}, ${state}. Save on ${servicesText} and more. Compare prices and book today!`
  const stateSlug = state.toLowerCase().replace(/\s+/g, '-')
  const citySlug = city.toLowerCase().replace(/\s+/g, '-')
  const providerSlug = provider.toLowerCase().replace(/\s+/g, '-')
  const canonicalPath = `/${stateSlug}/${citySlug}/providers/${providerSlug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_CONFIG.social.twitter,
    },
    alternates: {
      canonical: buildCanonicalUrl(canonicalPath),
    },
  }
}

/**
 * Generate metadata for category/treatment pages with keyword-optimized titles
 * @param category - Category name (e.g., "Botox")
 * @param stats - Stats object with dealCount, businessCount, and optional minPrice
 * @returns Next.js Metadata object
 */
export function generateCategoryMetadata(
  category: string,
  stats: { dealCount: number; businessCount: number; minPrice?: number }
): Metadata {
  const priceText = stats.minPrice ? ` from $${stats.minPrice}` : ''
  const title = `${category} Treatments: ${stats.dealCount} Deals${priceText} | CostFinders`
  const description = `Compare ${stats.dealCount} ${category.toLowerCase()} deals from ${stats.businessCount} verified providers. Save on treatments${priceText}. Find the best prices and book today!`
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-')
  const canonicalPath = `/treatments/${categorySlug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: buildCanonicalUrl(canonicalPath),
      siteName: SITE_CONFIG.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_CONFIG.social.twitter,
    },
    alternates: {
      canonical: buildCanonicalUrl(canonicalPath),
    },
  }
}
