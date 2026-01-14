# Phase 35: Mobile Table Alternatives

## Overview

Add card-based mobile variants for tables currently missing responsive patterns. Following the established `BillingHistory` component pattern where desktop shows `<table>` and mobile shows card-based layouts.

**Pattern Reference**: `src/components/features/billingHistory.tsx` (lines 69-160)
- Desktop: `hidden sm:block` wrapping `<table>`
- Mobile: `sm:hidden` wrapping card layout with `space-y-3`

## Audit Results

| File | Has Mobile? | Scope |
|------|-------------|-------|
| `dealList.tsx` | ❌ | Complex - 6 columns, actions |
| `analyticsDashboard.tsx` | ❌ | Medium - DealPerformanceTable |
| `sponsored/page.tsx` | ❌ | Medium - Boost History table |
| `reports/page.tsx` | ❌ | Simple - Business Activity table |
| `monetization/page.tsx` | ❌ | Simple - Credit Packages table |
| `data/page.tsx` | ❌ | Medium - Activity Log table |

Already have mobile views (no action): `billingHistory.tsx`, `consumerTable.tsx`, `businessTable.tsx`

## Tasks

### 35-01: DealList Mobile Cards
**File**: `src/components/features/dealManagement/dealList.tsx`
**Scope**: Lines 234-384 (table section)

Add mobile card view for business deal management table:
- [ ] Wrap existing table in `hidden md:block`
- [ ] Add `md:hidden` card section after table
- [ ] Card layout: deal title/badges top, category + price middle, status + performance + actions bottom
- [ ] Preserve all action buttons (edit, pause/play, delete, boost)

**Checkpoint**: Visual verification on mobile viewport

---

### 35-02: DealPerformanceTable Mobile Cards
**File**: `src/components/features/analytics/analyticsDashboard.tsx`
**Scope**: `DealPerformanceTable` function (lines 132-240)

Add mobile card view for analytics deal performance:
- [ ] Wrap existing table in `hidden sm:block`
- [ ] Add `sm:hidden` card section
- [ ] Card layout: deal title (with crown icon), views/claims/conversion inline, status badge

**Checkpoint**: Visual verification

---

### 35-03: Boost History Mobile Cards
**File**: `src/app/business/dashboard/deals/sponsored/page.tsx`
**Scope**: Section 3 table (lines 283-316)

Add mobile card view for boost history:
- [ ] Wrap existing table in `hidden sm:block`
- [ ] Add `sm:hidden` card section
- [ ] Card layout: deal title + boost type badge top, dates + impressions middle, cost + status bottom

**Checkpoint**: Visual verification

---

### 35-04: Business Activity Mobile Cards
**File**: `src/app/admin/dashboard/reports/page.tsx`
**Scope**: Business Activity table (lines 231-260)

Add mobile card view for admin reports business activity:
- [ ] Wrap existing table in `hidden sm:block`
- [ ] Add `sm:hidden` card section
- [ ] Card layout: metric name with value and change indicator

**Checkpoint**: Visual verification

---

### 35-05: Credit Packages Mobile Cards
**File**: `src/app/admin/dashboard/monetization/page.tsx`
**Scope**: Credit Packages table (lines 276-327)

Add mobile card view for monetization credit packages:
- [ ] Wrap existing table in `hidden sm:block`
- [ ] Add `sm:hidden` card section
- [ ] Card layout: package name + credits, price/per-lead, savings badge

**Checkpoint**: Visual verification

---

### 35-06: Activity Log Mobile Cards
**File**: `src/app/admin/dashboard/data/page.tsx`
**Scope**: Activity Log table (lines 448-501)

Add mobile card view for admin activity log:
- [ ] Wrap existing table in `hidden sm:block`
- [ ] Add `sm:hidden` card section
- [ ] Card layout: timestamp + admin top, action + details middle, status badge bottom

**Checkpoint**: Visual verification

---

## Implementation Notes

### Breakpoint Convention
- Use `sm:` breakpoint (640px) for simpler tables
- Use `md:` breakpoint (768px) for complex tables with many actions (dealList)
- Match existing patterns in the file when applicable

### Card Structure Pattern
```tsx
{/* Mobile Card View */}
<div className="sm:hidden space-y-3">
  {items.map((item) => (
    <div
      key={item.id}
      className="p-4 bg-glass-bg rounded-xl border border-glass-border"
    >
      {/* Primary info */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-sm font-medium text-text-primary">{item.title}</p>
          <p className="text-xs text-text-tertiary mt-0.5">{item.subtitle}</p>
        </div>
        <Badge variant="..." size="sm">{item.status}</Badge>
      </div>
      {/* Secondary info / actions */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-glass-border">
        {/* ... */}
      </div>
    </div>
  ))}
</div>
```

### Testing
Each task includes visual verification checkpoint. Test at 375px viewport width (iPhone SE).

## Success Criteria

- [ ] All 6 tables have mobile card alternatives
- [ ] Mobile views show all essential information from table
- [ ] Actions remain accessible on mobile
- [ ] Consistent styling with existing mobile patterns (billingHistory, consumerTable)
- [ ] No horizontal scroll on mobile for any table section
