import { Card } from '@/components/ui/card'

interface DealCardSkeletonProps {
  variant?: 'grid' | 'list'
}

export function DealCardSkeleton({ variant = 'grid' }: DealCardSkeletonProps) {
  const isGrid = variant === 'grid'

  return (
    <Card
      variant="glass"
      padding="none"
      className={`overflow-hidden ${isGrid ? '' : 'flex'}`}
    >
      {/* Image Skeleton */}
      <div
        className={`
          bg-bg-tertiary animate-pulse
          ${isGrid ? 'aspect-[4/3]' : 'w-48 shrink-0 aspect-square'}
        `}
      />

      {/* Content Skeleton */}
      <div className={`p-4 flex flex-col ${isGrid ? '' : 'flex-1'}`}>
        {/* Title Placeholder */}
        <div className="h-5 bg-bg-tertiary rounded animate-pulse w-3/4" />

        {/* Description Placeholders - List variant only */}
        {!isGrid && (
          <div className="mt-2 space-y-2">
            <div className="h-3 bg-bg-tertiary rounded animate-pulse w-full" />
            <div className="h-3 bg-bg-tertiary rounded animate-pulse w-4/5" />
          </div>
        )}

        {/* Price Placeholders */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-6 w-16 bg-bg-tertiary rounded animate-pulse" />
          <div className="h-4 w-12 bg-bg-tertiary rounded animate-pulse" />
        </div>

        {/* Unit Placeholder */}
        <div className="mt-2 h-3 w-20 bg-bg-tertiary rounded animate-pulse" />

        {/* Location & Rating Placeholders */}
        <div className="mt-3 flex items-center gap-4">
          <div className="h-4 w-24 bg-bg-tertiary rounded animate-pulse" />
          <div className="h-4 w-16 bg-bg-tertiary rounded animate-pulse" />
        </div>

        {/* Business Hidden Placeholder */}
        <div className="mt-3 pt-3 border-t border-glass-border">
          <div className="h-4 w-32 bg-bg-tertiary rounded animate-pulse" />
        </div>
      </div>
    </Card>
  )
}
