'use client'

import { useState } from 'react'
import { Lock, UserPlus } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AuthModal } from '@/components/features/authModal'

type AuthView = 'signUp' | 'signIn'

interface ClaimCTAProps {
  dealId: string
}

export function ClaimCTA({ dealId: _dealId }: ClaimCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalView, setModalView] = useState<AuthView>('signUp')

  const handleSignUp = () => {
    setModalView('signUp')
    setIsModalOpen(true)
  }

  const handleSignIn = () => {
    setModalView('signIn')
    setIsModalOpen(true)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleSuccess = () => {
    // TODO: Refresh deal data to show business details after verification
    // For now, modal closes and user is signed in
  }

  // Always show auth wall since we don't have auth yet
  return (
    <>
      <Card variant="glass" padding="lg">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Lock Icon */}
          <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
            <Lock size={32} weight="fill" className="text-brand-primary" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-text-primary">
              Business Details Hidden
            </h3>
            <p className="text-sm text-text-secondary">
              Create a free account to reveal the business name, location, and
              contact details — then claim this deal.
            </p>
          </div>

          {/* Actions */}
          <div className="w-full space-y-3">
            <Button
              size="lg"
              className="w-full"
              onClick={handleSignUp}
              type="button"
            >
              <UserPlus size={20} weight="bold" />
              Create Free Account
            </Button>

            <button
              type="button"
              onClick={handleSignIn}
              className="text-sm text-brand-primary hover:text-brand-secondary transition-colors"
            >
              Already have an account? Sign in
            </button>
          </div>

          {/* Trust indicator */}
          <p className="text-xs text-text-muted">
            Your information is secure and never shared without permission.
          </p>
        </div>
      </Card>

      <AuthModal
        isOpen={isModalOpen}
        onClose={handleClose}
        initialView={modalView}
        onSuccess={handleSuccess}
      />
    </>
  )
}
