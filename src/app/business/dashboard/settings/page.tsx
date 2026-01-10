'use client'

import Link from 'next/link'
import { User, Plugs, CreditCard, CaretRight } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'

const settingsLinks = [
  {
    title: 'Profile',
    description: 'Update your business information and details',
    href: '/business/dashboard/profile',
    icon: User,
  },
  {
    title: 'Integrations',
    description: 'Connect scheduling and booking software',
    href: '/business/dashboard/settings/integrations',
    icon: Plugs,
  },
  {
    title: 'Account',
    description: 'Manage subscription and billing',
    href: '#',
    icon: CreditCard,
    disabled: true,
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Settings</h1>
        <p className="text-text-secondary mt-1">
          Manage your business settings and integrations
        </p>
      </div>

      <div className="grid gap-4">
        {settingsLinks.map((link) => {
          const Icon = link.icon
          const content = (
            <Card
              className={`p-5 transition-all duration-200 ${
                link.disabled
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:bg-glass-bg-hover cursor-pointer'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                  <Icon size={24} weight="light" className="text-brand-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary">
                    {link.title}
                    {link.disabled && (
                      <span className="ml-2 text-xs font-normal text-text-muted">
                        (Coming Soon)
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-text-secondary mt-0.5">
                    {link.description}
                  </p>
                </div>
                {!link.disabled && (
                  <CaretRight size={20} weight="light" className="text-text-muted" />
                )}
              </div>
            </Card>
          )

          if (link.disabled) {
            return <div key={link.title}>{content}</div>
          }

          return (
            <Link key={link.title} href={link.href}>
              {content}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
