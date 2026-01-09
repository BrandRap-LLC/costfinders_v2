'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/context/authContext'
import { DashboardSidebar } from '@/components/layout/dashboardSidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { state } = useAuth()

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!state.isLoading && !state.isAuthenticated) {
      router.push('/')
    }
  }, [state.isLoading, state.isAuthenticated, router])

  // Show loading state while checking auth
  if (state.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-8 w-8 text-brand-primary" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <p className="text-text-secondary">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render dashboard until authenticated
  if (!state.isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen">
      <DashboardSidebar />
      {/* Main content with left padding for sidebar on desktop */}
      <main className="md:pl-60 pt-20 pb-20 md:pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-6">
          {children}
        </div>
      </main>
    </div>
  )
}
