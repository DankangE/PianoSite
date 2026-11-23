import { ArrowLeft, ArrowUpRight, Clock, Guitar, MessageCircle, Phone, Receipt } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  about,
  blog,
  brand,
  type Campus,
  campuses,
  contact,
  fees,
  formatDate,
  formatHours,
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

const box = 'rounded-[26px] border-2 border-b-ink shadow-[5px_5px_0_var(--color-b-ink)]'
const chunky =
  'inline-flex h-12 items-center gap-2 rounded-full border-2 border-b-ink px-6 font-b-display text-lg shadow-[3px_3px_0_var(--color-b-ink)] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none'
const tones = ['bg-b-coral', 'bg-b-sky', 'bg-b-mint', 'bg-b-yellow'] as const
const tilt = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]', 'rotate-[1.5deg]'] as const
const solfege = ['도', '레', '미'] as const

export function Playful() {
  return (
    <div className="bg-b-bg text-b-ink selection:bg-b-yellow">
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

export function CampusPage({ campus }: { campus: Campus }) {
  const sibling = campuses.find((other) => other.id !== campus.id)
  return (
    <div className="bg-b-bg text-b-ink selection:bg-b-yellow">
      <Header home="/" />
      <main>
        <Screen id="top" className="pt-24 pb-12">
          <Shell className="grid items-center gap-10 py-6 md:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="inline-block -rotate-2 rounded-full border-2 border-b-ink bg-b-mint px-3 py-1 font-b-display">
                {campus.area} · {campus.landmark}
              </span>
              <h1 className="mt-5 font-b-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.15]">{campus.name}</h1>
              <p className="mt-4 max-w-md text-[17px] leading-[1.8]">{campus.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/" className={cn(chunky, 'bg-white')}>
                  <ArrowLeft className="size-4" /> {ui.home}
                </a>
                {sibling && (
                  <a href={sibling.path} className={cn(chunky, 'bg-b-sky text-white')}>
                    {ui.sibling} {sibling.name}
                  </a>
                )}
              </div>
            </div>
            <CampusCard campus={campus} />
          </Shell>
        </Screen>
        <Lessons />
      </main>
    </div>
  )
}

export function FeesPage() {
  const campus = campuses.find((other) => other.id === fees.campusId)!
  return (
    <div className="bg-b-bg text-b-ink selection:bg-b-yellow">
      <Header home="/" />
      <main>
        <section id="top" className="pt-28 pb-16">
          <Shell className="max-w-3xl">
            <span className="inline-block -rotate-2 rounded-full border-2 border-b-ink bg-b-mint px-3 py-1 font-b-display">
              {fees.eyebrow}
            </span>
            <h1 className="mt-5 font-b-display text-[clamp(2.4rem,6vw,4rem)] leading-[1.15]">{fees.heading}</h1>
            <p className="mt-4 max-w-xl text-[17px] leading-[1.8]">{fees.body}</p>
            <p className="mt-3 text-sm text-b-ink/70">
              {fees.labels.asOf} {formatDate(fees.asOf)} {fees.labels.basis} · {fees.labels.checked}{' '}
              {formatDate(fees.checked)}
            </p>
            <div className={cn('mt-8 overflow-hidden bg-white', box)}>
              <table className="w-full text-left text-[15px]">
                <thead className="bg-b-yellow font-b-display">
                  <tr className="border-b-2 border-b-ink">
                    <th scope="col" className="px-4 py-3 font-normal">
                      {fees.columns.course}
                    </th>
                    <th scope="col" className="px-4 py-3 font-normal">
                      {fees.columns.hours}
                    </th>
                    <th scope="col" className="px-4 py-3 text-right font-normal">
                      {fees.columns.fee}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fees.rows.map((row) => (
                    <tr key={row.course + row.hours} className="border-b border-b-ink/15 last:border-b-0">
                      <th scope="row" className="px-4 py-2.5 font-normal">
                        {row.course}
                      </th>
                      <td className="px-4 py-2.5 whitespace-nowrap">{row.hours}</td>
                      <td className="px-4 py-2.5 text-right font-b-display whitespace-nowrap">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-6 list-disc space-y-1.5 pl-5 text-sm leading-[1.7]">
              {fees.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-[1.7]">
              {fees.labels.source}{' '}
              <Out href={fees.source.href} className="underline underline-offset-4">
                {fees.source.label}
              </Out>
              {` · ${fees.labels.registry} `}
              <Out href={fees.registry.href} className="underline underline-offset-4">
                {fees.registry.label}
              </Out>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={telHref(campus.phone)} className={cn(chunky, 'bg-b-yellow')}>
                <Phone className="size-4" /> {campus.phone}
              </a>
              <a href={campus.path} className={cn(chunky, 'bg-white')}>
                <ArrowLeft className="size-4" /> {campus.name}
              </a>
            </div>
          </Shell>
        </section>
      </main>
    </div>
  )
}

function KeysMark() {
  return (
    <span aria-hidden className="flex h-7 overflow-hidden rounded-md border-2 border-b-ink bg-white">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="relative w-2.5 border-r border-b-ink last:border-r-0">
          {i < 3 && <span className="absolute top-0 -right-[3px] z-10 h-3.5 w-1.5 bg-b-ink" />}
        </span>
      ))}
    </span>
  )
}

function Keys({ className }: { className?: string }) {
  const blackAfter = [true, true, false, true, true, true, false]
  return (
    <div aria-hidden className={cn('flex h-16 overflow-hidden border-y-2 border-b-ink bg-white sm:h-20', className)}>
      {Array.from({ length: 42 }, (_, i) => (
        <span key={i} className="relative min-w-8 flex-1 border-r-2 border-b-ink">
          {blackAfter[i % 7] && <span className="absolute top-0 -right-[9px] z-10 h-[58%] w-4 rounded-b-sm bg-b-ink" />}
        </span>
      ))}
    </div>
  )
}

function Header({ home = '' }: { home?: string }) {
  return (
    <header className="fixed inset-x-0 top-3 z-40">
      <Shell>
        <div
          className={cn(
            'flex h-14 items-center justify-between bg-white pr-2 pl-3',
            box,
            'rounded-full shadow-[3px_3px_0_var(--color-b-ink)]',
          )}
        >
          <a href={home || '#top'} className="flex items-center gap-2 font-b-display text-lg">
            <KeysMark />
            <span className="hidden sm:inline">{brand.name}</span>
          </a>
          <nav className="hidden items-center gap-6 font-b-display text-lg md:flex">
            {nav.slice(0, -1).map((item) => (
              <a key={item.id} href={`${home}#${item.id}`} className="hover:text-b-coral">
                {item.label}
              </a>
            ))}
            <a href={fees.path} className="hover:text-b-coral">
              {ui.fees}
            </a>
          </nav>
          <a href={`${home}#contact`} className={cn(chunky, 'h-10 bg-b-coral px-4 text-base text-white')}>
            {ui.contactCta}
          </a>
        </div>
      </Shell>
    </header>
  )
}

function Heading({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <span className="inline-block -rotate-2 rounded-full border-2 border-b-ink bg-white px-3 py-0.5 font-b-display">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-b-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-tight">{title}</h2>
    </div>
  )
}

function Hero() {
  return (
    <Screen id="top" className="justify-between overflow-hidden pt-24">
      <Shell className="grid flex-1 items-center gap-10 py-6 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h1 className="font-b-display text-[clamp(2.75rem,5.4vw,4.25rem)] leading-[1.2] lg:whitespace-nowrap">
            <span className="mb-5 inline-block -rotate-2 rounded-full border-2 border-b-ink bg-b-mint px-3 py-1 text-base leading-normal">
              {hero.eyebrow}
            </span>
            <span className="block">{hero.title[0]}</span>
            <span className="block">
              <span className="bg-[linear-gradient(transparent_58%,var(--color-b-yellow)_58%)] px-1">
                {hero.title[1]}
              </span>
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={cn(chunky, 'bg-b-yellow')}>
              {ui.contactCta}
            </a>
            <a href="#lessons" className={cn(chunky, 'bg-white')}>
              {ui.lessonsCta}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <img
            src={hero.photo}
            alt={hero.alt}
            className={cn('aspect-[4/3] w-full rotate-2 object-cover md:aspect-[4/5] md:max-h-[58svh]', box)}
          />
          <span className="absolute -top-4 -left-3 grid size-24 -rotate-12 place-items-center rounded-full border-2 border-b-ink bg-b-coral text-center font-b-display leading-tight text-white">
            {programs[2].tag}
          </span>
          <span className="absolute -right-2 -bottom-4 rotate-6 rounded-2xl border-2 border-b-ink bg-b-sky px-4 py-2 font-b-display text-white">
            {brand.line}
          </span>
        </div>
      </Shell>
      <Keys />
    </Screen>
  )
}

function About() {
  return (
    <Screen id="about" className="py-24">
      <Shell className="grid gap-5 md:grid-cols-3">
        <div className={cn('bg-b-yellow p-7 sm:p-9 md:col-span-2', box)}>
          <Heading eyebrow={about.eyebrow} title={about.title} />
          <p className="mt-4 max-w-xl text-[17px] leading-[1.8]">{about.body}</p>
        </div>
        <figure className="relative md:row-span-2">
          <img
            loading="lazy"
            src={about.photo}
            alt={about.alt}
            className={cn('size-full max-h-[64svh] -rotate-1 object-cover', box)}
          />
          <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border-2 border-b-ink bg-white p-3 text-sm leading-[1.7]">
            {about.caption}
          </figcaption>
        </figure>
        {campuses.map((campus, i) => (
          <a
            key={campus.id}
            href={campus.path}
            className={cn(
              'group block p-6 text-white transition-transform hover:-translate-y-0.5',
              box,
              i === 0 ? 'bg-b-coral' : 'bg-b-sky',
            )}
          >
            <h3 className="font-b-display text-3xl">{campus.name}</h3>
            <p className="mt-2 text-[15px]">
              {campus.area.replace('광진구 ', '')} · {campus.owner}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm underline-offset-4 group-hover:underline">
              {campus.name} {ui.more} <ArrowUpRight className="size-4" />
            </span>
          </a>
        ))}
      </Shell>
    </Screen>
  )
}

function Lessons() {
  return (
    <Screen id="lessons" className="border-y-2 border-b-ink bg-b-yellow py-24">
      <Shell>
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <Heading eyebrow={lessons.eyebrow} title={lessons.title} />
          <p className="max-w-sm text-[15px] leading-[1.75]">{lessons.body}</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <article key={program.id} className={cn('bg-white p-2', box, tilt[i])}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border-2 border-b-ink">
                {program.photo ? (
                  <img loading="lazy" src={program.photo} alt="" className="size-full object-cover" />
                ) : (
                  <div className="grid size-full place-items-center bg-b-mint">
                    <Guitar className="size-14" strokeWidth={1.5} />
                  </div>
                )}
                <span
                  className={cn(
                    'absolute top-2 left-2 rounded-full border-2 border-b-ink px-2.5 py-0.5 font-b-display text-sm',
                    tones[i],
                  )}
                >
                  {program.tag}
                </span>
              </div>
              <div className="px-3 pt-4 pb-3">
                <h3 className="font-b-display text-2xl">{program.title}</h3>
                <p className="mt-1.5 text-sm leading-[1.75]">{program.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {notes.map((note, i) => (
            <div key={note.title} className="flex gap-4">
              <span
                className={cn(
                  'grid size-12 shrink-0 place-items-center rounded-full border-2 border-b-ink font-b-display text-xl',
                  tones[i],
                )}
              >
                {solfege[i]}
              </span>
              <div>
                <h3 className="font-b-display text-xl">{note.title}</h3>
                <p className="mt-1 text-sm leading-[1.7]">{note.body}</p>
              </div>
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
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Heading eyebrow={storiesIntro.eyebrow} title={storiesIntro.title} />
          <Out href={blog} className={cn(chunky, 'h-10 bg-white px-4 text-base')}>
            {ui.blogAll} <ArrowUpRight className="size-4" />
          </Out>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {featured.map((story, i) => (
            <Out
              key={story.href}
              href={story.href}
              className={cn('group flex flex-col bg-white p-2 lg:row-span-3', box)}
            >
              <img
                loading="lazy"
                src={story.photo}
                alt=""
                className="aspect-[4/3] w-full rounded-[18px] border-2 border-b-ink object-cover"
              />
              <div className="flex flex-1 flex-col px-2 pt-3 pb-2">
                <span
                  className={cn('w-fit rounded-full border-2 border-b-ink px-2.5 font-b-display text-sm', tones[i + 2])}
                >
                  {formatDate(story.date)}
                </span>
                <h3 className="mt-2 font-b-display text-xl group-hover:text-b-coral">{story.title}</h3>
                <p className="mt-1 text-sm leading-[1.7]">{story.body}</p>
              </div>
            </Out>
          ))}
          {rest.map((story, i) => (
            <Out
              key={story.href}
              href={story.href}
              className={cn(
                'group block rounded-[20px] border-2 border-b-ink p-4 transition-transform hover:-translate-y-0.5',
                tones[i % 4],
              )}
            >
              <span className="font-b-display text-sm">{formatDate(story.date)}</span>
              <h3 className="mt-0.5 font-b-display text-lg leading-snug">{story.title}</h3>
              <p className="mt-1 line-clamp-2 text-[13px] leading-[1.6]">{story.body}</p>
            </Out>
          ))}
        </div>
      </Shell>
    </Screen>
  )
}

function Contact() {
  return (
    <Screen id="contact" className="border-t-2 border-b-ink bg-b-mint pt-24 pb-8">
      <Shell className="flex flex-1 flex-col justify-center">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <Heading eyebrow={contact.eyebrow} title={contact.title} />
          <p className="max-w-sm text-[15px] leading-[1.75]">{contact.body}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {campuses.map((campus) => (
            <CampusCard key={campus.id} campus={campus} />
          ))}
        </div>
      </Shell>
      <Shell className="mt-8 flex flex-col gap-3 text-xs sm:flex-row sm:items-end sm:justify-between">
        <address className="space-y-0.5 not-italic">
          {campuses.map((campus) => (
            <p key={campus.id}>
              {campus.name}
              {' · '}
              {campus.address} · {campus.phone} · {formatHours(campus.hours)} · {campus.license}
            </p>
          ))}
        </address>
        <Out href={blog} className="underline underline-offset-4">
          {ui.blogFooter}
        </Out>
      </Shell>
    </Screen>
  )
}

function CampusCard({ campus }: { campus: Campus }) {
  return (
    <article className={cn('bg-white p-2', box)}>
      <Out
        href={campus.map.href}
        className="relative block overflow-hidden rounded-[18px] border-2 border-b-ink"
      >
        <img
          loading="lazy"
          src={campus.map.image}
          alt={`${campus.name} 위치 지도, ${campus.address}`}
          className="aspect-[4/3] w-full object-cover lg:aspect-[2/1]"
        />
        <span className="absolute top-2 left-2 rounded-full border-2 border-b-ink bg-b-yellow px-3 py-0.5 font-b-display text-sm">
          {campus.map.label} ↗
        </span>
        <span className="absolute right-2 bottom-1 text-[10px] text-b-ink/50">{campus.map.credit}</span>
      </Out>
      <div className="px-4 pt-4 pb-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-b-display text-3xl">
            <a href={campus.path} className="hover:text-b-coral">
              {campus.name}
            </a>
          </h3>
          <span className="rounded-full border-2 border-b-ink px-2.5 py-0.5 text-xs">{campus.license}</span>
        </div>
        <p className="mt-1 text-sm">
          {campus.address} · {campus.landmark}
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-sm">
          <Clock className="size-3.5 shrink-0" /> {ui.hours} {formatHours(campus.hours)}
        </p>
        <p className="text-sm text-b-ink/60">
          {ui.schools} {campus.schools.join(', ')}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={telHref(campus.phone)} className={cn(chunky, 'bg-b-yellow')}>
            <Phone className="size-4" /> {campus.phone}
          </a>
          {campus.kakao && (
            <Out href={campus.kakao} className={cn(chunky, 'bg-b-ink text-white')}>
              <MessageCircle className="size-4" /> {ui.kakao}
            </Out>
          )}
          {campus.id === fees.campusId && (
            <a href={fees.path} className={cn(chunky, 'bg-white')}>
              <Receipt className="size-4" /> {ui.feesCta}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
