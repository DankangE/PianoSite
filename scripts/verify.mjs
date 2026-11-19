import { existsSync, readFileSync } from 'node:fs'
import { about, blog, campuses, hero, nav, programs, stories } from '../src/model.ts'

const problems = []
const check = (ok, message) => ok || problems.push(message)

for (const c of campuses) {
  check(/^0\d{1,2}-\d{3,4}-\d{4}$/.test(c.phone), `${c.name} 전화번호 형식: ${c.phone}`)
  check(!c.kakao || /^https:\/\/pf\.kakao\.com\/_\w+$/.test(c.kakao), `${c.name} 카카오 채널 주소: ${c.kakao}`)
  check(
    /^https:\/\/(place\.map\.kakao\.com\/\d+|map\.naver\.com\/p\/entry\/place\/\d+)$/.test(c.map.href),
    `${c.name} 지도 링크: ${c.map.href}`,
  )
  check(c.schools.length > 0, `${c.name} 가까운 학교가 비었습니다`)
  check(c.path === `/${c.id}`, `${c.name} 페이지 주소는 /${c.id}여야 합니다: ${c.path}`)
  check(c.title.startsWith(`${c.name} | `), `${c.name} 페이지 제목은 학원 이름으로 시작해야 합니다: ${c.title}`)
}
check(new Set(campuses.map((c) => c.id)).size === campuses.length, '학원 id가 겹칩니다')

for (const s of stories) {
  check(/^\d{4}-\d{2}-\d{2}$/.test(s.date), `${s.title} 날짜 형식: ${s.date}`)
  check(s.href.startsWith(`${blog}/`), `${s.title} 링크가 블로그 글이 아닙니다`)
}
const dates = stories.map((s) => s.date)
check(
  dates.every((d, i) => i === 0 || dates[i - 1] >= d),
  '소식은 최신순이어야 합니다',
)

const photos = [hero, about, ...programs, ...stories]
  .flatMap((x) => (x.photo ? [x.photo] : []))
  .concat(campuses.map((c) => c.map.image))
for (const p of photos) check(existsSync(new URL(`../public${p}`, import.meta.url)), `사진 없음: ${p}`)

check(nav.at(-1)?.id === 'contact', '마지막 메뉴는 상담이어야 합니다')

const copy =
  readFileSync(new URL('../src/model.ts', import.meta.url), 'utf8') +
  readFileSync(new URL('../index.html', import.meta.url), 'utf8')
const formal = copy.match(/[가-힣]*(습니다|입니다|합니다)/g)
check(!formal, `문안은 해요체로 씁니다: ${formal?.join(', ')}`)

if (problems.length) {
  console.error(problems.join('\n'))
  process.exit(1)
}
console.log(`ok: 학원 ${campuses.length}, 수업 ${programs.length}, 소식 ${stories.length}, 사진 ${photos.length}`)
