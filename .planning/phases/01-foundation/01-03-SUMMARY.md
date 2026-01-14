---
phase: 01-foundation
plan: 03
subsystem: database, api
tags: [typescript, mock-data, fixtures, supabase-schema]

# Dependency graph
requires:
  - phase: 01-01
    provides: project structure with src/types, src/lib directories
  - phase: 01-02
    provides: design tokens for styling test page
provides:
  - Complete TypeScript type definitions for deals, businesses, consumers, claims, locations
  - Mock data fixtures covering all business tiers and treatment categories
  - Query utilities for filtering, sorting, and accessing mock data
  - toAnonymousDeal helper implementing "anonymous until committed" pattern
affects: [phase-2, phase-3, phase-4, phase-5, phase-6, phase-7, all-ui-phases]

# Tech tracking
tech-stack:
  added: []
  patterns: [supabase-schema-types, anonymous-deal-pattern, query-utilities]

key-files:
  created:
    - src/types/deal.ts
    - src/types/business.ts
    - src/types/consumer.ts
    - src/types/claim.ts
    - src/types/location.ts
    - src/types/index.ts
    - src/lib/mock-data/locations.ts
    - src/lib/mock-data/businesses.ts
    - src/lib/mock-data/deals.ts
    - src/lib/mock-data/consumers.ts
    - src/lib/mock-data/utils.ts
    - src/lib/mock-data/index.ts
  modified:
    - src/app/page.tsx

key-decisions:
  - "AnonymousDeal type excludes businessId, adds locationArea and rating for consumer-facing views"
  - "All mock data uses ISO timestamps and UUID-style IDs matching Supabase conventions"
  - "Query utilities return AnonymousDeal by default, raw Deal only via explicit getDealById"

patterns-established:
  - "Anonymous until committed: toAnonymousDeal() converts Deal to consumer-safe view"
  - "Type-safe mock data: All fixtures typed against interfaces"
  - "Query utility pattern: getActiveDeals(), getDealsByCategory(), filterDeals(), sortDeals()"

issues-created: []

# Metrics
duration: 8min
completed: 2026-01-09
---

# Phase 1.3: Mock Data Layer Summary

**TypeScript types and fixtures for 12 deals, 6 businesses, 3 cities with query utilities implementing the anonymous-until-committed pattern**

## Performance

- **Duration:** 8 min
- **Started:** 2026-01-09T05:16:27Z
- **Completed:** 2026-01-09T05:23:56Z
- **Tasks:** 3
- **Files modified:** 13

## Accomplishments
- Complete type system for deals, businesses, consumers, claims, and locations matching Supabase schema structure
- Mock fixtures covering all 3 business tiers (unclaimed, free, paid) and 4 treatment categories (botox, fillers, facials, laser)
- Query utilities with filtering by category/city/price/discount and sorting by price/discount/popularity/date
- toAnonymousDeal helper that correctly implements the "anonymous until committed" business reveal pattern

## Task Commits

Each task was committed atomically:

1. **Task 1: Create core TypeScript type definitions** - `ffe9f31` (feat)
2. **Task 2: Create mock data fixtures** - `799d2a8` (feat)
3. **Task 3: Create data access utilities and barrel export** - `27c91b3` (feat)

**Plan metadata:** [pending] (docs: complete mock data layer plan)

## Files Created/Modified
- `src/types/deal.ts` - Deal, AnonymousDeal interfaces, TreatmentCategory type
- `src/types/business.ts` - Business, RevealedBusiness interfaces, tier/status types
- `src/types/consumer.ts` - Consumer, ConsumerPreferences interfaces
- `src/types/claim.ts` - Claim interface with ClaimStatus type
- `src/types/location.ts` - City, LocationArea, UserLocation interfaces
- `src/types/index.ts` - Barrel export for all types
- `src/lib/mock-data/locations.ts` - 3 cities, 7 location areas
- `src/lib/mock-data/businesses.ts` - 6 businesses across all tiers
- `src/lib/mock-data/deals.ts` - 12 deals across 4 categories
- `src/lib/mock-data/consumers.ts` - 3 consumers, 4 claims
- `src/lib/mock-data/utils.ts` - Query utilities with filtering/sorting
- `src/lib/mock-data/index.ts` - Barrel export for mock data
- `src/app/page.tsx` - Updated with mock data test display

## Decisions Made
- All types use string IDs (UUID-style) and ISO timestamp strings to match Supabase conventions
- AnonymousDeal excludes businessId but includes locationArea, rating, and reviewCount from the associated business
- Query utilities default to returning AnonymousDeal for consumer safety, raw Deal only via explicit getDealById

## Deviations from Plan

None - plan executed exactly as written

## Issues Encountered
None

## Next Phase Readiness
- Foundation phase complete (3/3 plans)
- Type system ready for all UI component development
- Mock data available via `@/lib/mock-data` for all phases
- Test page confirms: 12 active deals, 3 cities, 5 featured deals
- Ready to proceed to Phase 2: Location Discovery

---
*Phase: 01-foundation*
*Completed: 2026-01-09*
