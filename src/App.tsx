import { useEffect, type JSX } from 'react'
import { campusByPath } from '@/model'
import { Base } from '@/styles/base'
import { Calm } from '@/styles/calm'
import { Editorial } from '@/styles/editorial'
import { CampusPage, Playful } from '@/styles/playful'
import { readStyleKey, StyleSwitcher, styleInfo, type StyleKey } from '@/styles/shared'

const pages: Record<StyleKey, () => JSX.Element> = {
  base: Base,
  a: Editorial,
  b: Playful,
  c: Calm,
}

export function App({ path }: { path: string }) {
  const campus = campusByPath(path)
  const key = import.meta.env.DEV && !campus ? readStyleKey(window.location.search) : 'b'
  const Page = pages[key]
  useEffect(() => {
    document.body.style.backgroundColor = styleInfo[key].page
    document.documentElement.dataset.style = key
  }, [key])
  return (
    <>
      {campus ? <CampusPage campus={campus} /> : <Page />}
      {import.meta.env.DEV && !campus && <StyleSwitcher current={key} />}
    </>
  )
}
