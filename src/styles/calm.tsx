import { ArrowDown, ArrowUpRight, Guitar } from 'lucide-react'
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

const line =
  'inline-flex h-12 items-center gap-2 border px-6 text-sm tracking-[0.06em] transition-colors focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-c-brass'
const numerals = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ'] as const

export function Calm() {
  return (
    <div className="bg-c-deep font-sans text-c-ivory selection:bg-c-brass selection:text-c-deep">
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
  const half = Math.ceil((nav.length - 1) / 2)
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-c-deep/90 to-transparent">
      <Shell className="grid h-20 grid-cols-[1fr_auto_1fr] items-center text-[13px] tracking-[0.06em]">
        <nav className="hidden gap-7 md:flex">
          {nav.slice(0, half).map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-c-ivory/75 hover:text-c-brass">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#top" className="col-start-1 text-left md:col-start-2 md:text-center">
          <span className="block font-c-display text-[15px] tracking-normal whitespace-nowrap sm:text-[17px]">
            {brand.name}
          </span>
          <span className="block text-[10px] tracking-[0.3em] text-c-brass">{brand.mark}</span>
        </a>
        <div className="col-start-3 flex items-center justify-end gap-7">
          <nav className="hidden gap-7 md:flex">
            {nav.slice(half, -1).map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-c-ivory/75 hover:text-c-brass">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="border-b border-c-brass pb-0.5 text-c-brass">
            {ui.contactCta}
          </a>
        </div>
      </Shell>
    </header>
  )
}

function Heading({
  eyebrow,
  title,
  body,
  center,
  className,
}: {
  eyebrow: string
  title: string
  body?: string
  center?: boolean
  className?: string
}) {
  return (
    <div className={cn(center && 'mx-auto text-center', className)}>
      <p className="text-xs tracking-[0.3em] text-c-brass">{eyebrow}</p>
      <h2 className="mt-4 font-c-display text-[clamp(2rem,4vw,3rem)] leading-[1.35] font-light">{title}</h2>
      {body && <p className={cn('mt-4 max-w-md text-[15px] leading-[1.8] opacity-70', center && 'mx-auto')}>{body}</p>}
    </div>
  )
}

function Hero() {
  return (
    <Screen id="top" className="isolate items-center overflow-hidden text-center">
      <img
        src={hero.photo}
        alt={hero.alt}
        className="absolute inset-0 -z-20 size-full scale-105 object-cover object-bottom blur-[6px]"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(ellipse 60% 55% at center, rgb(12 24 20 / 0.95), rgb(12 24 20 / 0.72))' }}
      />
      <div className="px-6">
        <span aria-hidden className="mx-auto block h-16 w-px bg-c-brass" />
        <p className="mt-8 text-xs tracking-[0.3em] text-c-brass">{hero.eyebrow}</p>
        <h1 className="mt-6 font-c-display text-[clamp(2.25rem,5.2vw,4.25rem)] leading-[1.4] font-light">
          {hero.title.map((t) => (
            <span key={t} className="block">
              {t}
            </span>
          ))}
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className={cn(line, 'border-c-brass bg-c-brass text-c-deep hover:bg-transparent hover:text-c-brass')}
          >
            {ui.contactCta}
          </a>
          <a href="#lessons" className={cn(line, 'border-c-ivory/40 hover:border-c-ivory')}>
            {ui.lessonsCta}
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.3em] text-c-ivory/60"
      >
        {ui.scroll}
        <ArrowDown className="size-4 motion-safe:animate-bounce" strokeWidth={1.25} />
      </a>
    </Screen>
  )
}

function About() {
  return (
    <Screen id="about" className="bg-c-ivory py-24 text-c-forest">
      <Shell className="text-center">
        <Heading eyebrow={about.eyebrow} title={about.title} center />
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.9] opacity-80">{about.body}</p>
        <div className="mt-10 grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          {campuses.map((campus, i) => (
            <div key={campus.id} className={cn(i === 1 && 'sm:col-start-3')}>
              <p className="font-c-display text-[clamp(1.75rem,3vw,2.25rem)] font-light">{campus.name}</p>
              <p className="mt-1 text-sm opacity-60">
                {campus.area.replace('광진구 ', '')} · {campus.owner}
              </p>
            </div>
          ))}
          <span
            aria-hidden
            className="row-start-1 hidden font-c-display text-5xl font-light text-c-brass sm:col-start-2 sm:block"
          >
            &amp;
          </span>
        </div>
        <figure className="mt-10">
          <img
            src={about.photo}
            alt={about.alt}
            className="h-[30svh] min-h-48 w-full object-cover object-[center_62%]"
          />
          <figcaption className="mt-3 text-sm opacity-60">{about.caption}</figcaption>
        </figure>
      </Shell>
    </Screen>
  )
}

function Lessons() {
  return (
    <Screen id="lessons" className="bg-c-forest pt-20 pb-12">
      <Shell>
        <Heading eyebrow={lessons.eyebrow} title={lessons.title} body={lessons.body} center />
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <article key={program.id}>
              <div className="aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-[24svh]">
                {program.photo ? (
                  <img src={program.photo} alt="" className="size-full object-cover opacity-90 saturate-[0.8]" />
                ) : (
                  <div className="grid size-full place-items-center border border-c-brass/40 text-c-brass">
                    <Guitar className="size-12" strokeWidth={1} />
                  </div>
                )}
              </div>
              <p className="mt-4 text-[11px] tracking-[0.25em] text-c-brass">
                {numerals[i]} · {program.tag}
              </p>
              <h3 className="mt-1 font-c-display text-xl font-light">{program.title}</h3>
              <p className="mt-2 text-sm leading-[1.8] text-c-mist">{program.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid border-t border-c-brass/30 md:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note.title}
              className="border-b border-c-brass/20 py-5 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <h3 className="font-c-display font-light text-c-brass">{note.title}</h3>
              <p className="mt-1.5 text-sm leading-[1.8] text-c-mist">{note.body}</p>
            </div>
          ))}
        </div>
      </Shell>
    </Screen>
  )
}

function Stories() {
  const featured = stories.filter((story) => story.photo)
  return (
    <Screen id="stories" className="bg-c-ivory py-24 text-c-forest">
      <Shell className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Heading eyebrow={storiesIntro.eyebrow} title={storiesIntro.title} />
          <div className="mt-8 grid grid-cols-2 gap-3">
            {featured.map((story) => (
              <img key={story.href} src={story.photo} alt="" className="aspect-square w-full object-cover" />
            ))}
          </div>
          <Out href={blog} className="mt-6 inline-flex items-center gap-1 border-b border-c-forest pb-0.5 text-sm">
            {ui.blogAll} <ArrowUpRight className="size-3.5" />
          </Out>
        </div>
        <ol className="relative grid gap-x-10 border-l border-c-brass/50 pl-8 sm:grid-cols-2 sm:border-l-0 sm:pl-0">
          {stories.map((story) => (
            <li key={story.href} className="relative border-c-brass/50 py-3 sm:border-l sm:pl-6">
              <span
                aria-hidden
                className="absolute top-[1.35rem] -left-[2.3rem] size-2 rounded-full bg-c-brass sm:-left-[0.3rem]"
              />
              <Out href={story.href} className="group block">
                <time dateTime={story.date} className="font-c-display text-sm text-c-brass">
                  {formatDate(story.date)}
                </time>
                <h3 className="mt-0.5 font-c-display text-lg group-hover:underline group-hover:underline-offset-4">
                  {story.title}
                </h3>
                <p className="mt-1 text-sm leading-[1.7] opacity-65 lg:line-clamp-2">{story.body}</p>
              </Out>
            </li>
          ))}
        </ol>
      </Shell>
    </Screen>
  )
}

function Contact() {
  return (
    <Screen id="contact" className="bg-c-deep pt-24 pb-8">
      <Shell className="flex flex-1 flex-col justify-center">
        <Heading eyebrow={contact.eyebrow} title={contact.title} body={contact.body} center />
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {campuses.map((campus) => (
            <article key={campus.id}>
              <Out href={campus.map.href} className="group relative block border border-c-brass/40 p-1.5">
                <img
                  src={campus.map.image}
                  alt={`${campus.name} 위치 지도, ${campus.address}`}
                  className="aspect-[4/3] w-full object-cover grayscale-[55%] transition group-hover:grayscale-0 lg:aspect-[2/1]"
                />
                <span className="absolute top-4 left-4 bg-c-deep/85 px-3 py-1 text-xs tracking-[0.06em] text-c-brass">
                  {campus.map.label} ↗
                </span>
                <span className="absolute right-3 bottom-2 text-[10px] text-c-deep/60">{campus.map.credit}</span>
              </Out>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-c-display text-2xl font-light">{campus.name}</h3>
                <span className="text-[11px] tracking-[0.2em] text-c-brass">{campus.license}</span>
              </div>
              <dl className="mt-3 grid grid-cols-[5.5rem_1fr] gap-y-1 text-sm">
                <dt className="text-c-mist">{ui.place}</dt>
                <dd>
                  {campus.address} · {campus.landmark}
                </dd>
                <dt className="text-c-mist">{ui.schools}</dt>
                <dd>{campus.schools.join(', ')}</dd>
              </dl>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={telHref(campus.phone)}
                  className={cn(line, 'border-c-brass text-c-brass hover:bg-c-brass hover:text-c-deep')}
                >
                  {ui.call} {campus.phone}
                </a>
                {campus.kakao && (
                  <Out href={campus.kakao} className={cn(line, 'border-c-ivory/30 hover:border-c-ivory')}>
                    {ui.kakao}
                  </Out>
                )}
              </div>
            </article>
          ))}
        </div>
      </Shell>
      <Shell className="mt-10 flex flex-col gap-1 border-t border-c-brass/20 pt-5 text-xs text-c-mist sm:flex-row sm:justify-between">
        <span>{campuses.map((campus) => `${campus.name} ${campus.license}`).join(' · ')}</span>
        <Out href={blog} className="hover:text-c-brass">
          {ui.blogFooter}
        </Out>
      </Shell>
    </Screen>
  )
}
