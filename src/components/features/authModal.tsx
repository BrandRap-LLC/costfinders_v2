'use client'

import { useEffect, useState } from 'react'
import { EmailVerification } from '@/components/features/emailVerification'
import { SignInForm } from '@/components/features/signInForm'
import { SignUpForm } from '@/components/features/signUpForm'
import { Modal } from '@/components/ui/modal'
import { useAuth } from '@/lib/context/authContext'

type AuthView = 'signUp' | 'signIn' | 'emailVerification'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialView?: 'signUp' | 'signIn'
  onSuccess?: () => void
}

export function AuthModal({
  isOpen,
  onClose,
  initialView = 'signUp',
  onSuccess,
}: AuthModalProps) {
  const { state } = useAuth()
  const [currentView, setCurrentView] = useState<AuthView>(initialView)
  const [pendingEmail, setPendingEmail] = useState<string | null>(null)

  // Reset state when modal opens or initialView changes
  useEffect(() => {
    if (isOpen) {
      setCurrentView(initialView)
      setPendingEmail(null)
    }
  }, [isOpen, initialView])

  const handleSignUpSuccess = (email: string) => {
    // Don't close modal - switch to email verification
    setPendingEmail(email)
    setCurrentView('emailVerification')
  }

  const handleSignInSuccess = () => {
    // Check if user needs verification
    if (state.user?.verificationStatus === 'unverified') {
      setPendingEmail(state.user.email)
      setCurrentView('emailVerification')
    } else {
      // Already verified - close modal
      onSuccess?.()
      onClose()
    }
  }

  const handleVerificationComplete = () => {
    onSuccess?.()
    onClose()
  }

  const handleSwitchToSignIn = () => {
    setCurrentView('signIn')
  }

  const handleSwitchToSignUp = () => {
    setCurrentView('signUp')
  }

  const getHeaderTitle = () => {
    switch (currentView) {
      case 'signUp':
        return 'Create Account'
      case 'signIn':
        return 'Welcome Back'
      case 'emailVerification':
        return 'Verify Email'
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="space-y-6">
        {/* Header */}
        <h2 className="text-xl font-semibold text-text-primary text-center">
          {getHeaderTitle()}
        </h2>

        {/* Content */}
        {currentView === 'signUp' && (
          <SignUpForm
            onSuccess={handleSignUpSuccess}
            onSwitchToSignIn={handleSwitchToSignIn}
          />
        )}

        {currentView === 'signIn' && (
          <SignInForm
            onSuccess={handleSignInSuccess}
            onSwitchToSignUp={handleSwitchToSignUp}
          />
        )}

        {currentView === 'emailVerification' && pendingEmail && (
          <EmailVerification
            email={pendingEmail}
            onVerified={handleVerificationComplete}
          />
        )}
      </div>
    </Modal>
  )
}
