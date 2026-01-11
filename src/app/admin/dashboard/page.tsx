'use client'

import { useAdminAuth } from '@/lib/context/adminAuthContext'

export default function AdminDashboardPage() {
  const { state } = useAdminAuth()
  const admin = state.admin

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">
          Admin Dashboard
        </h1>
        <p className="text-text-secondary mt-1">
          Welcome back, {admin?.firstName || 'Admin'}
        </p>
      </div>

      {/* Placeholder content - will be replaced in 08-02 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Quick Stats
          </h3>
          <p className="text-text-secondary text-sm">
            Overview cards will appear here
          </p>
        </div>

        <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Recent Activity
          </h3>
          <p className="text-text-secondary text-sm">
            Activity feed will appear here
          </p>
        </div>

        <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Pending Actions
          </h3>
          <p className="text-text-secondary text-sm">
            Action items will appear here
          </p>
        </div>
      </div>
    </div>
  )
}
