// Raw data exports

export { businesses } from './businesses'
export { claims, consumers } from './consumers'
export { deals, toAnonymousDeal } from './deals'
export { cities, locationAreas } from './locations'

// Query utilities
export {
  DEFAULT_CITY,
  type DealFilters,
  // Filtering & Sorting
  filterDeals,
  findNearestCity,
  // Locations
  getActiveCities,
  // Deals
  getActiveDeals,
  getAnonymousDealById,
  getAreasForCity,
  // Businesses
  getBusinessById,
  getBusinessForDeal,
  getCityById,
  getCityByName,
  getClaimById,
  // Claims
  getClaimsByConsumer,
  getClaimsByStatus,
  // Consumers
  getConsumerById,
  getDealById,
  getDealsByCategory,
  getDealsByCity,
  getFeaturedDeals,
  getSponsoredDeals,
  type SortOption,
  sortDeals,
} from './utils'
