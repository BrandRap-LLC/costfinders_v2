'use client'

import { CaretDown } from '@phosphor-icons/react'

export interface FaqItem {
  question: string
  answer: string
}

interface FaqProps {
  items: FaqItem[]
  className?: string
}

/**
 * FAQ - Accessible accordion component using semantic details/summary elements
 * Renders expandable FAQ items with glassmorphic styling
 */
export function Faq({ items, className = '' }: FaqProps) {
  if (items.length === 0) return null

  return (
    <section className={className}>
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            className="group bg-glass-bg backdrop-blur-lg border border-glass-border rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-white/5 transition-colors">
              <span className="text-text-primary font-medium pr-4">
                {item.question}
              </span>
              <CaretDown
                size={18}
                weight="bold"
                className="text-text-tertiary group-open:rotate-180 transition-transform flex-shrink-0"
              />
            </summary>
            <div className="px-4 pb-4 text-text-secondary">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
