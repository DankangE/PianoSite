import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const styleKeys = ['b', 'base', 'a', 'c'] as const
export type StyleKey = (typeof styleKeys)[number]

export const styleInfo: Record<StyleKey, { label: string; name: string; page: string }> = {
  base: { label: '이전', name: '첫 버전', page: '#0f0e07' },
  a: { label: 'A', name: '악보 노트', page: '#fbfaf6' },
  b: { label: '메인', name: '건반 놀이', page: '#fff7e8' },
  c: { label: 'C', name: '고요한 연습실', page: '#0c1814' },
}

export function readStyleKey(search: string): StyleKey {
  const value = new URLSearchParams(search).get('style')
  return styleKeys.find((key) => key === value) ?? 'b'
}

export function Screen({ className, children, ...props }: ComponentProps<'section'>) {
  return (
    <section className={cn('relative flex min-h-svh snap-start flex-col justify-center', className)} {...props}>
      {children}
    </section>
  )
}

export function Shell({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', className)}>{children}</div>
}

export function Out({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a target="_blank" rel="noreferrer" className={className} {...props}>
      {children}
    </a>
  )
}

export function StyleSwitcher({ current }: { current: StyleKey }) {
  return (
    <nav
      aria-label="디자인 시안"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full bg-black/85 p-1 font-sans text-xs text-white shadow-lg backdrop-blur"
    >
      <span className="px-2 text-white/60">시안</span>
      {styleKeys.map((key) => (
        <a
          key={key}
          href={key === 'b' ? '?' : `?style=${key}`}
          aria-current={key === current ? 'page' : undefined}
          className={cn(
            'rounded-full px-3 py-1.5 whitespace-nowrap transition-colors',
            key === current ? 'bg-white text-black' : 'hover:bg-white/15',
          )}
        >
          {styleInfo[key].label}
          <span className="hidden sm:inline"> {styleInfo[key].name}</span>
        </a>
      ))}
    </nav>
  )
}
