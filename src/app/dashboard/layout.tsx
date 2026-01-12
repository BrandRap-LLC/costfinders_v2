'use client'

import { useAuth } from '@/lib/context/authContext'
import { AuthenticatedDashboardLayout } from '@/components/layout/authenticatedDashboardLayout'
import { DashboardSidebar } from '@/components/layout/dashboardSidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { state } = useAuth()

  return (
    <AuthenticatedDashboardLayout
      sidebar={<DashboardSidebar />}
      isLoading={state.isLoading}
      isAuthenticated={state.isAuthenticated}
      redirectPath="/"
    >
      {children}
    </AuthenticatedDashboardLayout>
  )
}
