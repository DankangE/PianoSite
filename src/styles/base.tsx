import type { ReactNode } from 'react'
import { ArrowUpRight, Guitar, Menu, MessageCircle, Music2, Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Out, Screen, Shell } from '@/styles/shared'
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
  type Campus,
  type Program,
  type Story,
  ui,
} from '@/model'

export function Base() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Lessons />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-[13px] tracking-[0.04em]', className)}>{children}</p>
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-sans text-sm font-medium">
      <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
        <Music2 className="size-3.5" strokeWidth={2.5} />
      </span>
      {brand.name}
    </a>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-40">
      <Shell>
        <div className="flex h-14 items-center justify-between rounded-full border border-white/10 bg-stage/70 pr-2 pl-4 backdrop-blur-md">
          <Logo />
          <nav className="hidden items-center gap-7 text-[13px] text-foreground/80 md:flex">
            {nav.slice(0, -1).map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1.5">
            <Button asChild size="sm" className="h-9 px-4">
              <a href="#contact">{ui.contactCta}</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="glass" size="icon" className="md:hidden" aria-label={ui.menuOpen}>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="border-white/10 bg-stage px-4 pt-4 pb-8">
                <SheetHeader className="px-0">
                  <SheetTitle className="text-foreground">{brand.name}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col">
                  {nav.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <a href={`#${item.id}`} className="border-b border-white/10 py-4 text-2xl">
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Shell>
    </header>
  )
}

function Hero() {
  return (
    <Screen id="top" className="justify-stretch pt-20 pb-3">
      <Shell className="flex flex-1 flex-col">
        <div className="relative isolate flex flex-1 flex-col justify-end overflow-hidden rounded-[28px] p-6 sm:p-10">
          <img
            src={hero.photo}
            alt={hero.alt}
            className="absolute inset-x-0 top-0 -z-20 h-4/5 w-full object-cover md:h-full"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink from-10% via-ink/85 via-55% to-ink/25" />
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Eyebrow className="text-foreground/70">{hero.eyebrow}</Eyebrow>
              <h1 className="mt-5 text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.18] font-medium tracking-[-0.025em]">
                {hero.title.map((line) => (
                  <span key={line} className="block md:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </h1>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 delay-150 duration-700 fill-mode-both">
              <div className="flex flex-wrap gap-2 md:justify-end">
                <Button asChild variant="secondary" size="lg">
                  <a href="#lessons">{ui.lessonsCta}</a>
                </Button>
                <Button asChild size="lg">
                  <a href="#contact">{ui.contactCta}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </Screen>
  )
}

function Blob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" aria-hidden className={cn('pointer-events-none absolute fill-primary', className)}>
      <path d="M421 38c76 29 146 102 152 186 6 79-47 121-55 193-9 80 31 140-24 172-62 36-130-31-214-29-81 2-142 68-205 27C10 547 34 466 31 391 28 314-21 252 13 178 49 99 140 81 214 51c70-28 132-38 207-13Z" />
    </svg>
  )
}

function About() {
  return (
    <Screen id="about" className="py-24">
      <Shell className="grid gap-4 md:min-h-[min(72svh,640px)] md:grid-cols-2">
        <Card className="relative min-h-[420px] justify-between gap-0 overflow-hidden rounded-[28px] border-0 p-8 shadow-none sm:p-10">
          <Blob className="-top-44 -right-40 w-[440px]" />
          <div className="relative">
            <Eyebrow className="text-stage/60">{about.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight font-medium tracking-[-0.02em] sm:text-[2.75rem]">
              {about.title}
            </h2>
          </div>
          <div className="relative mt-16 grid gap-6 sm:grid-cols-2">
            {campuses.map((campus) => (
              <div key={campus.id} className="border-t border-stage/15 pt-4">
                <p className="font-medium">{campus.name}</p>
                <p className="mt-1 text-sm text-stage/70">
                  {campus.area.replace('광진구 ', '')} · {campus.owner}
                </p>
              </div>
            ))}
          </div>
          <p className="relative mt-6 max-w-md text-[15px] leading-[1.75] text-stage/80">{about.body}</p>
        </Card>
        <figure className="relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] border-2 border-white p-8">
          <img src={about.photo} alt={about.alt} className="absolute inset-0 -z-20 size-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <figcaption className="flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-xs text-sm leading-[1.75] text-foreground/90">{about.caption}</p>
            <Button asChild size="sm" className="h-9 px-4">
              <Out href={blog}>
                {ui.blog} <ArrowUpRight />
              </Out>
            </Button>
          </figcaption>
        </figure>
      </Shell>
    </Screen>
  )
}

function Lessons() {
  return (
    <Screen id="lessons" className="overflow-hidden rounded-t-[40px] bg-stage pt-24 pb-16 sm:rounded-t-[64px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_70%_at_30%_0%,rgba(255,237,64,0.55),transparent_70%)]"
      />
      <Shell className="relative">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow className="text-foreground/70">{lessons.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight font-medium tracking-[-0.02em] sm:text-[2.75rem]">
              {lessons.title}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.75] text-foreground/75 md:justify-self-end">{lessons.body}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-3">
          {notes.map((note, i) => (
            <div key={note.title} className="bg-stage p-6">
              <span className="text-sm text-primary tabular-nums">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-medium">{note.title}</h3>
              <p className="mt-2 text-sm leading-[1.75] text-foreground/65">{note.body}</p>
            </div>
          ))}
        </div>
      </Shell>
    </Screen>
  )
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <Card
      className={cn('gap-0 overflow-hidden rounded-[24px] border-0 p-2 shadow-none', !program.photo && 'bg-primary')}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
        {program.photo ? (
          <img src={program.photo} alt="" className="size-full object-cover" />
        ) : (
          <div className="grid size-full place-items-center bg-stage text-primary">
            <Guitar className="size-16" strokeWidth={1.25} />
          </div>
        )}
        <Badge variant="secondary" className="absolute top-2.5 left-2.5 px-2.5 py-1">
          {program.tag}
        </Badge>
      </div>
      <CardContent className="flex flex-1 flex-col px-3 pt-5 pb-4">
        <h3 className="text-xl font-medium tracking-[-0.02em]">{program.title}</h3>
        <p className="mt-2 text-sm leading-[1.75] text-stage/70">{program.body}</p>
      </CardContent>
    </Card>
  )
}

function Stories() {
  const featured = stories.filter((story) => story.photo)
  const rest = stories.filter((story) => !story.photo)
  return (
    <Screen id="stories" className="rounded-b-[40px] bg-stage pt-20 pb-14 sm:rounded-b-[64px]">
      <Shell>
        <div className="rounded-[28px] border border-white/10 bg-ink p-5 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow className="text-foreground/60">{storiesIntro.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2rem] leading-tight font-medium tracking-[-0.02em] sm:text-[2.75rem]">
                {storiesIntro.title}
              </h2>
            </div>
            <Button asChild variant="glass" size="sm" className="h-9 px-4">
              <Out href={blog}>
                {ui.blogAll} <ArrowUpRight />
              </Out>
            </Button>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {featured.map((story) => (
                <FeaturedStory key={story.href} story={story} />
              ))}
            </div>
            <ul className="border-t border-white/10">
              {rest.map((story) => (
                <li key={story.href} className="border-b border-white/10">
                  <Out
                    href={story.href}
                    className="group grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-4 sm:grid-cols-[6.5rem_1fr_auto]"
                  >
                    <time dateTime={story.date} className="text-sm text-foreground/50 tabular-nums">
                      {formatDate(story.date)}
                    </time>
                    <div className="col-span-2 row-start-2 sm:col-span-1 sm:row-start-1 sm:col-start-2">
                      <h3 className="font-medium transition-colors group-hover:text-primary">{story.title}</h3>
                      <p className="mt-1 text-sm leading-[1.75] text-foreground/60 lg:line-clamp-1">{story.body}</p>
                    </div>
                    <ArrowUpRight className="col-start-2 row-start-1 size-4 text-foreground/40 transition-colors group-hover:text-primary sm:col-start-3" />
                  </Out>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Shell>
    </Screen>
  )
}

function FeaturedStory({ story }: { story: Story }) {
  return (
    <Out href={story.href} className="group flex flex-col overflow-hidden rounded-[22px] bg-stage p-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
        <img
          src={story.photo}
          alt=""
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <Badge className="absolute top-2.5 left-2.5 px-2.5 py-1">{formatDate(story.date)}</Badge>
      </div>
      <div className="px-3 pt-4 pb-3">
        <h3 className="text-lg font-medium transition-colors group-hover:text-primary">{story.title}</h3>
        <p className="mt-1 text-sm leading-[1.75] text-foreground/65">{story.body}</p>
      </div>
    </Out>
  )
}

function Contact() {
  return (
    <Screen
      id="contact"
      className="mx-2 mt-2 rounded-[32px] bg-paper pt-20 pb-12 text-stage sm:mx-3 sm:mt-3 sm:rounded-[56px]"
    >
      <Shell>
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow className="text-stage/60">{contact.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[2rem] leading-tight font-medium tracking-[-0.02em] sm:text-[2.75rem]">
              {contact.title}
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.75] text-stage/70 md:justify-self-end">{contact.body}</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {campuses.map((campus, i) => (
            <CampusCard key={campus.id} campus={campus} tone={i === 0 ? 'yellow' : 'dark'} />
          ))}
        </div>
      </Shell>
    </Screen>
  )
}

function CampusCard({ campus, tone }: { campus: Campus; tone: 'yellow' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <Card
      className={cn(
        'relative gap-0 overflow-hidden rounded-[28px] border-0 p-2 shadow-none',
        dark ? 'bg-stage text-foreground' : 'bg-primary text-stage',
      )}
    >
      <Out
        href={campus.map.href}
        className="group relative block aspect-[4/3] overflow-hidden rounded-[22px] bg-white lg:aspect-[2/1]"
      >
        <img
          src={campus.map.image}
          alt={`${campus.name} 위치 지도, ${campus.address}`}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-stage px-3 py-1.5 text-xs font-medium text-foreground">
          {campus.map.label} <ArrowUpRight className="size-3.5" />
        </span>
        <span className="absolute right-3 bottom-2 text-[10px] text-stage/50">{campus.map.credit}</span>
      </Out>
      <div className="px-5 pt-6 pb-6 sm:px-7 sm:pb-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={cn('text-sm', dark ? 'text-foreground/60' : 'text-stage/60')}>{campus.owner}</p>
            <h3 className="mt-2 text-3xl font-medium tracking-[-0.02em]">{campus.name}</h3>
          </div>
          <Badge variant={dark ? 'outline' : 'secondary'} className="px-2.5 py-1">
            {campus.license}
          </Badge>
        </div>
        <dl
          className={cn(
            'mt-6 grid grid-cols-2 gap-6 border-t pt-5 text-sm',
            dark ? 'border-white/10' : 'border-stage/15',
          )}
        >
          <div>
            <dt className={dark ? 'text-foreground/50' : 'text-stage/55'}>{ui.place}</dt>
            <dd className="mt-1 font-medium">
              {campus.address}
              <br />
              {campus.landmark}
            </dd>
          </div>
          <div>
            <dt className={dark ? 'text-foreground/50' : 'text-stage/55'}>{ui.schools}</dt>
            <dd className="mt-1 font-medium">{campus.schools.join(', ')}</dd>
          </div>
        </dl>
        <a
          href={telHref(campus.phone)}
          className="mt-6 block text-[clamp(1.75rem,4vw,2.5rem)] leading-none font-medium tracking-[-0.02em] tabular-nums"
        >
          {campus.phone}
        </a>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild size="lg" variant={dark ? 'default' : 'secondary'}>
            <a href={telHref(campus.phone)}>
              <Phone /> {ui.call}
            </a>
          </Button>
          {campus.kakao && (
            <Button
              asChild
              size="lg"
              variant={dark ? 'glass' : 'outline'}
              className={
                dark
                  ? undefined
                  : 'border-stage/20 bg-transparent text-stage shadow-none hover:bg-stage/10 hover:text-stage'
              }
            >
              <Out href={campus.kakao}>
                <MessageCircle /> {ui.kakao}
              </Out>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

function Footer() {
  return (
    <footer className="py-10">
      <Shell className="flex flex-col gap-6 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
        <div className="text-foreground">
          <Logo />
        </div>
        <p>{campuses.map((campus) => `${campus.name} ${campus.license}`).join(' · ')}</p>
        <Out href={blog} className="inline-flex items-center gap-1 hover:text-primary">
          {ui.blogFooter} <ArrowUpRight className="size-3.5" />
        </Out>
      </Shell>
    </footer>
  )
}
