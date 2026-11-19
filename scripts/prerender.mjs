import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

const server = new URL('../dist-server/entry-server.js', import.meta.url)
const dist = new URL('../dist/', import.meta.url)
const { render, head, pages, site } = await import(server.href)

const template = readFileSync(new URL('index.html', dist), 'utf8')
for (const page of pages) {
  const out = template
    .replace(/<title>[^<]*<\/title>/, head(page))
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`)
  if (!out.includes('application/ld+json') || out.includes('<div id="root"></div>')) {
    console.error(`prerender: head or body was not injected for ${page.path}`)
    process.exit(1)
  }
  const dir = new URL(`.${page.path.replace(/\/?$/, '/')}`, dist)
  mkdirSync(dir, { recursive: true })
  writeFileSync(new URL('index.html', dir), out)
}

const urls = pages
  .map((page) => {
    const loc = page.path === '/' ? `${site.url}/` : site.url + page.path
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${site.updated}</lastmod>\n  </url>`
  })
  .join('\n')
writeFileSync(
  new URL('sitemap.xml', dist),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
writeFileSync(new URL('robots.txt', dist), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)
rmSync(new URL('../dist-server', import.meta.url), { recursive: true, force: true })
console.log(`prerender: ${pages.map((page) => page.path).join(', ')}, sitemap.xml, robots.txt`)
