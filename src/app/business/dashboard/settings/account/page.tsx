'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { CaretLeft, Crown, CheckCircle } from '@phosphor-icons/react'
import { useBusinessAuth } from '@/lib/context/businessAuthContext'
import { getBusinessById } from '@/lib/mock-data/businesses'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TierComparison } from '@/components/features/tierComparison'

export default function AccountSettingsPage() {
  const router = useRouter()
  const { state } = useBusinessAuth()
  const business = state.owner?.businessId
    ? getBusinessById(state.owner.businessId)
    : null

  // Get current tier, default to 'free' for display if business exists
  const currentTier = business?.tier ?? 'free'

  const handleSelectTier = (tier: 'free' | 'paid') => {
    if (tier === 'paid' && currentTier !== 'paid') {
      // Route to checkout page (to be built in 10-02)
      router.push('/business/dashboard/settings/account/checkout')
    }
  }

  return (
    <div className="space-y-8">
      {/* Back Link */}
      <Link
        href="/business/dashboard/settings"
        className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
      >
        <CaretLeft size={18} weight="light" />
        <span>Back to Settings</span>
      </Link>

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Account & Billing</h1>
        <p className="text-text-secondary mt-1">
          Manage your subscription plan and billing settings
        </p>
      </div>

      {/* Current Plan Status */}
      <Card variant="glass" padding="lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center">
              <Crown
                size={28}
                weight={currentTier === 'paid' ? 'fill' : 'light'}
                className="text-brand-primary"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-text-primary">
                  {currentTier === 'paid' ? 'Professional Plan' : 'Free Plan'}
                </h2>
                <Badge variant={currentTier === 'paid' ? 'brand' : 'default'} size="sm">
                  {currentTier === 'paid' ? 'Active' : 'Current'}
                </Badge>
              </div>
              <p className="text-sm text-text-secondary mt-0.5">
                {currentTier === 'paid'
                  ? 'You have access to all premium features'
                  : 'Upgrade to unlock premium features'}
              </p>
            </div>
          </div>
          {currentTier === 'paid' && (
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle size={20} weight="fill" />
              <span className="text-sm font-medium">Fully Activated</span>
            </div>
          )}
        </div>
      </Card>

      {/* Tier Comparison */}
      <TierComparison currentTier={currentTier} onSelectTier={handleSelectTier} />

      {/* Billing Info (placeholder for future) */}
      {currentTier === 'paid' && (
        <Card variant="glass" padding="lg">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Billing Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-text-muted mb-1">Next billing date</p>
              <p className="text-text-primary font-medium">February 15, 2025</p>
            </div>
            <div>
              <p className="text-text-muted mb-1">Payment method</p>
              <p className="text-text-primary font-medium">Visa ending in 4242</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-glass-border">
            <p className="text-xs text-text-muted">
              Billing management coming soon. Contact support for billing inquiries.
            </p>
          </div>
        </Card>
      )}
    </div>
  )
}
