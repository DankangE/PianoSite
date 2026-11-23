import { useEffect, type JSX } from 'react'
import { campusByPath, isFeesPath } from '@/model'
import { Base } from '@/styles/base'
import { Calm } from '@/styles/calm'
import { Editorial } from '@/styles/editorial'
import { CampusPage, FeesPage, Playful } from '@/styles/playful'
import { readStyleKey, StyleSwitcher, styleInfo, type StyleKey } from '@/styles/shared'

const pages: Record<StyleKey, () => JSX.Element> = {
  base: Base,
  a: Editorial,
  b: Playful,
  c: Calm,
}

export function App({ path }: { path: string }) {
  const campus = campusByPath(path)
  const feesPage = isFeesPath(path)
  const sub = campus || feesPage
  const key = import.meta.env.DEV && !sub ? readStyleKey(window.location.search) : 'b'
  const Page = pages[key]
  useEffect(() => {
    document.body.style.backgroundColor = styleInfo[key].page
    document.documentElement.dataset.style = key
  }, [key])
  return (
    <>
      {campus ? <CampusPage campus={campus} /> : feesPage ? <FeesPage /> : <Page />}
      {import.meta.env.DEV && !sub && <StyleSwitcher current={key} />}
    </>
  )
}
