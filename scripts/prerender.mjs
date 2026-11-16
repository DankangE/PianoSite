import { readFileSync, rmSync, writeFileSync } from 'node:fs'

const server = new URL('../dist-server/entry-server.js', import.meta.url)
const page = new URL('../dist/index.html', import.meta.url)
const { render, head, site } = await import(server.href)

const html = readFileSync(page, 'utf8')
const out = html
  .replace(/<title>[^<]*<\/title>/, head())
  .replace('<div id="root"></div>', `<div id="root">${render()}</div>`)

if (!out.includes('application/ld+json') || out.includes('<div id="root"></div>')) {
  console.error('prerender: head or body was not injected')
  process.exit(1)
}
writeFileSync(page, out)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}/</loc>
    <lastmod>${site.updated}</lastmod>
  </url>
</urlset>
`
writeFileSync(new URL('../dist/sitemap.xml', import.meta.url), sitemap)
writeFileSync(
  new URL('../dist/robots.txt', import.meta.url),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
)
rmSync(new URL('../dist-server', import.meta.url), { recursive: true, force: true })
console.log(`prerender: ${Math.round(out.length / 1024)}KB index.html, sitemap.xml, robots.txt`)
