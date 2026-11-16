import { useEffect, type JSX } from 'react'
import { Base } from '@/styles/base'
import { Calm } from '@/styles/calm'
import { Editorial } from '@/styles/editorial'
import { Playful } from '@/styles/playful'
import { readStyleKey, StyleSwitcher, styleInfo, type StyleKey } from '@/styles/shared'

const pages: Record<StyleKey, () => JSX.Element> = {
  base: Base,
  a: Editorial,
  b: Playful,
  c: Calm,
}

export function App() {
  const key = import.meta.env.DEV ? readStyleKey(window.location.search) : 'b'
  const Page = pages[key]
  useEffect(() => {
    document.body.style.backgroundColor = styleInfo[key].page
    document.documentElement.dataset.style = key
  }, [key])
  return (
    <>
      <Page />
      {import.meta.env.DEV && <StyleSwitcher current={key} />}
    </>
  )
}
