import { ArrowRight, ArrowUpRight, Guitar } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  about,
  blog,
  brand,
  campuses,
  contact,
  formatDate,
  hero,
  lessons,
  nav,
  notes,
  programs,
  stories,
  storiesIntro,
  telHref,
  ui,
} from '@/model'
import { Out, Screen, Shell } from '@/styles/shared'

const pill =
  'inline-flex h-12 items-center gap-2 rounded-full px-6 font-sans text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-a-accent'

export function Editorial() {
  return (
    <div className="bg-a-paper text-a-ink selection:bg-a-accent selection:text-a-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Lessons />
        <Stories />
        <Contact />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-a-rule bg-a-paper/90 backdrop-blur">
      <Shell className="flex h-16 items-center justify-between">
        <a href="#top" className="font-a-display text-lg font-bold">
          {brand.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {nav.slice(0, -1).map((item, i) => (
            <a key={item.id} href={`#${item.id}`} className="group">
              <span className="mr-1.5 font-a-display text-a-accent">0{i + 1}</span>
              <span className="group-hover:underline group-hover:underline-offset-4">{item.label}</span>
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-a-accent underline underline-offset-4"
        >
          {ui.contactCta} <ArrowRight className="size-4" />
        </a>
      </Shell>
    </header>
  )
}

// 반짝반짝 작은 별 첫 소절: 도 도 솔 솔 라 라 솔(2분음표). 높은음자리표 기준 y 좌표.
const tune = [
  { x: 110, y: 105 },
  { x: 190, y: 105 },
  { x: 270, y: 75 },
  { x: 350, y: 75 },
  { x: 430, y: 67.5 },
  { x: 510, y: 67.5 },
  { x: 600, y: 75, half: true },
]

function FirstTune({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 700 124" aria-hidden className={cn('pointer-events-none overflow-visible', className)}>
      {[30, 45, 60, 75, 90].map((y) => (
        <line key={y} x1="0" x2="700" y1={y} y2={y} className="stroke-a-rule" strokeWidth="1.2" />
      ))}
      <line x1="660" x2="660" y1="30" y2="90" className="stroke-a-rule" strokeWidth="1.2" />
      <line x1="665" x2="665" y1="30" y2="90" className="stroke-a-rule" strokeWidth="3" />
      {tune.map((note, i) => (
        <g key={i} className={i === 0 ? 'text-a-accent' : 'text-a-ink'}>
          {note.y > 97 && (
            <line x1={note.x - 14} x2={note.x + 14} y1="105" y2="105" className="stroke-a-rule" strokeWidth="1.2" />
          )}
          <ellipse
            cx={note.x}
            cy={note.y}
            rx="8.5"
            ry="6"
            transform={`rotate(-22 ${note.x} ${note.y})`}
            fill={note.half ? 'none' : 'currentColor'}
            stroke="currentColor"
            strokeWidth={note.half ? 2.2 : 0}
          />
          <line
            x1={note.x + 7.6}
            x2={note.x + 7.6}
            y1={note.y - 2}
            y2={note.y - 46}
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </g>
      ))}
    </svg>
  )
}

function SectionHead({
  index,
  eyebrow,
  title,
  body,
}: {
  index: number
  eyebrow: string
  title: string
  body?: string
}) {
  return (
    <div className="grid gap-6 border-b border-a-rule pb-6 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="flex items-center gap-3 text-sm text-a-muted">
          <span className="font-a-display text-a-accent">0{index}</span>
          <span className="h-px w-8 bg-a-accent" />
          {eyebrow}
        </p>
        <h2 className="mt-3 font-a-display text-[clamp(2rem,4vw,3rem)] leading-tight font-bold">{title}</h2>
      </div>
      {body && <p className="max-w-sm text-[15px] leading-[1.75] text-a-muted">{body}</p>}
    </div>
  )
}

function Hero() {
  return (
    <Screen id="top" className="pt-24 pb-16">
      <Shell>
        <p className="text-sm text-a-muted">{hero.eyebrow}</p>
        <h1 className="mt-3 font-a-display text-[clamp(2.5rem,6.8vw,6rem)] leading-[1.2] font-bold">
          {hero.title.map((line) => (
            <span key={line} className="block lg:whitespace-nowrap">
              {line}
            </span>
          ))}
        </h1>
        <FirstTune className="mt-8 w-full" />
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a href="#contact" className={cn(pill, 'bg-a-ink text-a-paper hover:bg-a-accent')}>
            {ui.contactCta}
          </a>
          <a href="#lessons" className="font-sans text-[15px] font-medium underline underline-offset-4">
            {ui.lessonsCta}
          </a>
        </div>
      </Shell>
    </Screen>
  )
}

function About() {
  return (
    <Screen id="about" className="border-t border-a-rule pt-24 pb-16">
      <Shell>
        <SectionHead index={1} eyebrow={about.eyebrow} title={about.title} />
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <p className="font-a-display text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.7]">{about.body}</p>
            <dl className="mt-10 border-t border-a-ink">
              {campuses.map((campus) => (
                <div key={campus.id} className="grid grid-cols-[1fr_auto] gap-4 border-b border-a-rule py-4">
                  <dt className="font-a-display text-xl font-bold">{campus.name}</dt>
                  <dd className="text-right text-sm text-a-muted">
                    {campus.area.replace('광진구 ', '')} · {campus.owner}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <figure>
            <img
              src={about.photo}
              alt={about.alt}
              className="aspect-[4/3] w-full rounded-sm object-cover md:aspect-[4/5] md:max-h-[56svh]"
            />
            <figcaption className="mt-3 flex items-start justify-between gap-4 text-sm text-a-muted">
              <span>{about.caption}</span>
              <Out
                href={blog}
                className="inline-flex shrink-0 items-center gap-1 text-a-accent underline underline-offset-4"
              >
                {ui.blog} <ArrowUpRight className="size-3.5" />
              </Out>
            </figcaption>
          </figure>
        </div>
      </Shell>
    </Screen>
  )
}

function Lessons() {
  return (
    <Screen id="lessons" className="bg-a-card py-24">
      <Shell>
        <SectionHead index={2} eyebrow={lessons.eyebrow} title={lessons.title} body={lessons.body} />
        <ol>
          {programs.map((program, i) => (
            <li
              key={program.id}
              className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-5 gap-y-2 border-b border-a-rule py-5 md:grid-cols-[3rem_14rem_1fr_auto]"
            >
              <span className="font-a-display text-2xl text-a-accent">{i + 1}</span>
              <div>
                <h3 className="font-a-display text-xl font-bold">{program.title}</h3>
                <p className="text-xs text-a-muted">{program.tag}</p>
              </div>
              <p className="col-span-3 row-start-2 text-[15px] leading-[1.75] text-a-ink/80 md:col-span-1 md:col-start-3 md:row-start-1">
                {program.body}
              </p>
              <div className="col-start-3 row-start-1 size-14 overflow-hidden rounded-full border border-a-ink/15 md:col-start-4 md:size-16">
                {program.photo ? (
                  <img src={program.photo} alt="" className="size-full object-cover" />
                ) : (
                  <div className="grid size-full place-items-center bg-a-ink text-a-paper">
                    <Guitar className="size-6" strokeWidth={1.5} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {notes.map((note) => (
            <div key={note.title} className="border-t-2 border-a-accent pt-4">
              <h3 className="font-a-display text-lg font-bold">{note.title}</h3>
              <p className="mt-2 text-sm leading-[1.75] text-a-muted">{note.body}</p>
            </div>
          ))}
        </div>
      </Shell>
    </Screen>
  )
}

function Stories() {
  const featured = stories.filter((story) => story.photo)
  const rest = stories.filter((story) => !story.photo)
  return (
    <Screen id="stories" className="py-24">
      <Shell>
        <SectionHead index={3} eyebrow={storiesIntro.eyebrow} title={storiesIntro.title} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="grid content-start gap-6 sm:grid-cols-2">
            {featured.map((story) => (
              <Out key={story.href} href={story.href} className="group">
                <img
                  src={story.photo}
                  alt=""
                  className="aspect-[4/3] w-full rounded-sm object-cover grayscale-[20%] transition group-hover:grayscale-0"
                />
                <time dateTime={story.date} className="mt-3 block font-a-display text-sm text-a-accent">
                  {formatDate(story.date)}
                </time>
                <h3 className="mt-1 font-a-display text-lg font-bold group-hover:underline group-hover:underline-offset-4">
                  {story.title}
                </h3>
                <p className="mt-1 text-sm leading-[1.75] text-a-muted">{story.body}</p>
              </Out>
            ))}
          </div>
          <ul className="border-t border-a-ink">
            {rest.map((story) => (
              <li key={story.href} className="border-b border-a-rule">
                <Out href={story.href} className="group grid gap-x-5 py-3.5 sm:grid-cols-[6rem_1fr]">
                  <time dateTime={story.date} className="font-a-display text-sm text-a-accent">
                    {formatDate(story.date)}
                  </time>
                  <div>
                    <h3 className="font-a-display font-bold group-hover:underline group-hover:underline-offset-4">
                      {story.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-[1.7] text-a-muted lg:line-clamp-1">{story.body}</p>
                  </div>
                </Out>
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </Screen>
  )
}

function Contact() {
  return (
    <Screen id="contact" className="bg-a-ink pt-24 pb-8 text-a-paper">
      <Shell className="flex flex-1 flex-col justify-center">
        <div className="grid gap-6 border-b border-a-paper/20 pb-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="flex items-center gap-3 text-sm text-a-paper/60">
              <span className="font-a-display text-a-accent">04</span>
              <span className="h-px w-8 bg-a-accent" />
              {contact.eyebrow}
            </p>
            <h2 className="mt-3 font-a-display text-[clamp(2rem,4vw,3rem)] leading-tight font-bold">{contact.title}</h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-a-paper/70">{contact.body}</p>
        </div>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {campuses.map((campus) => (
            <article key={campus.id}>
              <Out href={campus.map.href} className="group relative block overflow-hidden rounded-sm">
                <img
                  src={campus.map.image}
                  alt={`${campus.name} 위치 지도, ${campus.address}`}
                  className="aspect-[2/1] w-full object-cover sepia-[25%] transition group-hover:sepia-0"
                />
                <span className="absolute top-3 left-3 bg-a-paper px-2.5 py-1 text-xs text-a-ink">
                  {campus.map.label} ↗
                </span>
                <span className="absolute right-2 bottom-1 text-[10px] text-a-ink/50">{campus.map.credit}</span>
              </Out>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-a-display text-2xl font-bold">{campus.name}</h3>
                <span className="text-xs text-a-paper/50">{campus.license}</span>
              </div>
              <p className="mt-1 text-sm text-a-paper/70">
                {campus.address} · {campus.landmark}
              </p>
              <p className="text-sm text-a-paper/50">
                {ui.schools} {campus.schools.join(', ')} · {campus.owner}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={telHref(campus.phone)}
                  className={cn(pill, 'bg-a-paper text-a-ink hover:bg-a-accent hover:text-a-paper')}
                >
                  {campus.phone}
                </a>
                {campus.kakao && (
                  <Out href={campus.kakao} className={cn(pill, 'border border-a-paper/40 hover:bg-a-paper/10')}>
                    {ui.kakao}
                  </Out>
                )}
              </div>
            </article>
          ))}
        </div>
      </Shell>
      <Shell className="mt-10 flex flex-col gap-2 border-t border-a-paper/15 pt-5 text-xs text-a-paper/50 sm:flex-row sm:justify-between">
        <span>{campuses.map((campus) => `${campus.name} ${campus.license}`).join(' · ')}</span>
        <Out href={blog} className="underline underline-offset-4">
          {ui.blogFooter}
        </Out>
      </Shell>
    </Screen>
  )
}
