# CostFinders

## What This Is

CostFinders is a price transparency and lead generation platform for medical spas. Consumers browse anonymized deals, compare pricing that's typically hidden, and claim deals to reveal business details. Businesses receive pre-qualified leads who already understand pricing. This build is the **complete UI** with mock data — a functional Next.js application ready for backend integration by a separate team.

## Core Value

**Deal discovery UX that makes finding and comparing medspa pricing effortless.** The browse → filter → compare → claim flow must feel intuitive, fast, and premium. Everything else supports this core experience.

## Requirements

### Validated

(None yet — ship to validate)

### Active

**Consumer Experience**
- [ ] Location-first discovery (auto-detect + manual override)
- [ ] Deal browsing with filters (treatment type, price range, location)
- [ ] Anonymized deal cards (pricing visible, business hidden until claim)
- [ ] Account creation with email + SMS verification UI
- [ ] Business reveal on account creation
- [ ] Save deals to favorites
- [ ] Claim deals with preferred time request form
- [ ] Claim status tracking (Pending → Contacted → Booked → Completed)
- [ ] Deal alerts preferences (email/SMS toggles)
- [ ] User profile and settings

**Business Experience**
- [ ] Claim existing profile flow (find pre-created business, verify ownership)
- [ ] Create new business flow (if not in system)
- [ ] Business dashboard with deal management
- [ ] Lead inbox with claim details
- [ ] In-platform messaging with leads
- [ ] Performance analytics dashboard
- [ ] Business profile editing
- [ ] Scheduling integrations placeholder ("Coming Soon" UI)

**Admin Experience**
- [ ] Deal moderation (approve, reject, request changes)
- [ ] User management (consumers and businesses)
- [ ] Content management (categories, locations, treatments)
- [ ] Platform reporting and metrics
- [ ] Data management tools UI

**Monetization UI**
- [ ] Business tier system (Unclaimed → Free → Paid)
- [ ] Subscription billing UI (Stripe-ready)
- [ ] Sponsored placements configuration
- [ ] Per-lead pricing settings
- [ ] Admin overrides for all monetization settings

**Platform Foundation**
- [ ] Role-based views (consumer, business, admin) in single app
- [ ] Glassmorphic design system per style guide
- [ ] Responsive design (mobile-first, desktop-enhanced)
- [ ] SSG + SEO best practices
- [ ] Mock data layer structured for Supabase integration

### Out of Scope

- Native mobile apps (iOS/Android) — web only for v1
- Real backend integration — mock data, separate team handles backend
- Scraping/data collection tools — admin UI only, no actual scraping
- Scheduling system integrations — "Coming Soon" placeholder only
- Payment processing — UI only, no Stripe connection
- Real email/SMS sending — UI flows only

## Context

**Business Model Insight**: Businesses don't need to sign up for deals to appear — CostFinders scrapes public sources. Three business tiers exist:
1. **Unclaimed** — scraped data, leads collected by CostFinders, business account pre-created
2. **Free** — business claims profile, can edit info/deals
3. **Paid** — premium placements, featured spots, newsletter inclusion, priority lead routing

**Go-to-Market**: New city launches may have scraped deals without active business partnerships. Platform collects leads, then reaches out to businesses to claim their free account. Monetization happens as traffic/leads prove valuable.

**"Anonymous Until Committed"**: Core differentiator. Consumers see pricing and location area, but business name/contact hidden until account creation + verification. This creates qualified leads.

**Tech Context**: Existing Supabase database with deal data. Backend team will integrate later. This UI must be structured to match their schema expectations.

**Design Direction**: Glassmorphic, medium-dark theme, strategic whitespace, Phosphor icons, app-like navigation patterns. References: Kayak (comparison UX), Groupon (deal presentation), Zocdoc (booking flows).

## Constraints

- **Stack**: Next.js 16 (App Router) + React + TypeScript + Tailwind CSS v4 per CLAUDE.md
- **Hosting**: Vercel deployment
- **Images**: Cloudinary for image storage/optimization
- **SEO**: SSG where possible, meta tags, structured data
- **Icons**: Phosphor icons only
- **Design**: Glassmorphic style, grounded shadows, Manrope font
- **Structure**: Layered component architecture (ui → patterns → features → layout)
- **Mock Data**: Must align with Supabase schema structure for smooth handoff

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| UI-only build with mock data | Separate team handles backend; allows parallel development | — Pending |
| Single app with role-based views | Simpler deployment, shared components, unified codebase | — Pending |
| Location-first discovery | Medspa services are local; location is primary filter | — Pending |
| Account creation triggers reveal | Ensures verified contact info before showing business details | — Pending |
| Three-tier business model | Supports gradual monetization as markets develop | — Pending |
| Core medspa categories only | Focus on Botox, fillers, facials, lasers for v1 mock data | — Pending |

---
*Last updated: 2026-01-09 after initialization*
