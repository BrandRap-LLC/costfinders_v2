import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <MagnifyingGlass size={48} weight="light" className="text-[#FF6D00]" />
      <h1 className="text-4xl font-bold">CostFinders</h1>
      <p className="text-[var(--color-text-secondary)]">
        Find and compare medspa pricing in your area
      </p>
    </main>
  )
}
