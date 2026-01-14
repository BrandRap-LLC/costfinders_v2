/**
 * FAQ content helpers for SEO pages
 * Provides templated FAQ content for category and state pages
 */

export interface FaqItem {
  question: string
  answer: string
}

/**
 * Get FAQ items for a treatment category page
 * @param categoryName - Name of the treatment category (e.g., "Botox")
 * @returns Array of FAQ items specific to this category
 */
export function getCategoryFaqs(categoryName: string): FaqItem[] {
  const lowerName = categoryName.toLowerCase()

  return [
    {
      question: `How much does ${categoryName} typically cost?`,
      answer: `${categoryName} prices vary by provider, location, and treatment area. On CostFinders, you can compare ${lowerName} deals from verified medspas to find the best prices in your area. Many providers offer introductory discounts of 20-50% off regular pricing.`,
    },
    {
      question: `How do I find reputable ${categoryName} providers?`,
      answer: `Look for board-certified practitioners and licensed medspas. On CostFinders, all listed providers are verified and you can read reviews from real patients. We recommend scheduling consultations with 2-3 providers before making your decision.`,
    },
    {
      question: `What should I expect during a ${categoryName} treatment?`,
      answer: `${categoryName} procedures vary in duration and technique. Most medspa treatments take 15-60 minutes. Your provider will explain the process during your consultation, including preparation, the procedure itself, and aftercare instructions.`,
    },
    {
      question: `Are ${categoryName} results permanent?`,
      answer: `Results from ${lowerName} treatments vary by type. Some treatments offer long-lasting results while others require maintenance sessions. Your provider will discuss expected duration and recommended follow-up during your consultation.`,
    },
  ]
}

/**
 * Get FAQ items for a state page
 * @param stateName - Name of the state (e.g., "California")
 * @returns Array of FAQ items specific to medspas in this state
 */
export function getStateFaqs(stateName: string): FaqItem[] {
  return [
    {
      question: `How do I find a reputable medspa in ${stateName}?`,
      answer: `Look for medspas with licensed practitioners, positive patient reviews, and transparent pricing. CostFinders lists verified providers across ${stateName}, making it easy to compare services and read authentic reviews before booking.`,
    },
    {
      question: `Are medspa prices regulated in ${stateName}?`,
      answer: `Medspa pricing is not regulated, which is why prices can vary significantly between providers. CostFinders helps you compare deals from multiple medspas in ${stateName} to ensure you're getting fair pricing for your treatments.`,
    },
    {
      question: `What treatments are most popular at ${stateName} medspas?`,
      answer: `Popular treatments at ${stateName} medspas include Botox, dermal fillers, laser treatments, chemical peels, and body contouring. Browse our deals to see current offers on these and other aesthetic treatments near you.`,
    },
    {
      question: `How can I save money on medspa treatments in ${stateName}?`,
      answer: `Compare deals on CostFinders to find the best prices across ${stateName}. Many medspas offer introductory discounts, package deals, and seasonal promotions. Signing up for provider newsletters can also give you access to exclusive offers.`,
    },
  ]
}
