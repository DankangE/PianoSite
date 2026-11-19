import { renderToString } from 'react-dom/server'
import { App } from '@/App'
import { blog, brand, campuses, site, type Campus } from '@/model'

export { site }

type Page = { path: string; title: string; description: string; campus?: Campus }

export const pages: readonly Page[] = [
  { path: '/', title: site.title, description: site.description },
  ...campuses.map((campus) => ({
    path: campus.path,
    title: campus.title,
    description: campus.description,
    campus,
  })),
]

const pageUrl = (path: string) => (path === '/' ? `${site.url}/` : site.url + path)

export function render(path: string) {
  return renderToString(<App path={path} />)
}

const escape = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function school(campus: Campus) {
  const url = pageUrl(campus.path)
  return {
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${url}#school`,
    name: campus.name,
    description: campus.description,
    url,
    image: site.url + site.image,
    telephone: campus.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: campus.street,
      addressLocality: '광진구',
      addressRegion: '서울특별시',
      postalCode: campus.postalCode,
      addressCountry: 'KR',
    },
    ...(campus.geo && {
      geo: { '@type': 'GeoCoordinates', latitude: campus.geo.lat, longitude: campus.geo.lng },
    }),
    areaServed: campus.area,
    hasMap: campus.map.href,
    sameAs: [blog, campus.map.href, campus.kakao, campus.instagram].filter(Boolean),
  }
}

function structuredData(page: Page) {
  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: brand.name,
    description: site.description,
    inLanguage: 'ko-KR',
  }
  const graph = page.campus
    ? [
        website,
        {
          '@type': 'WebPage',
          '@id': `${pageUrl(page.path)}#webpage`,
          url: pageUrl(page.path),
          name: page.title,
          description: page.description,
          inLanguage: 'ko-KR',
          isPartOf: { '@id': website['@id'] },
          about: { '@id': `${pageUrl(page.path)}#school` },
        },
        school(page.campus),
      ]
    : [website, ...campuses.map(school)]
  return { '@context': 'https://schema.org', '@graph': graph }
}

export function head(page: Page) {
  const image = site.url + site.image
  const url = pageUrl(page.path)
  const tags = [
    `<title>${escape(page.title)}</title>`,
    `<meta name="description" content="${escape(page.description)}" />`,
    `<meta name="keywords" content="${escape(site.keywords.join(','))}" />`,
    `<meta name="robots" content="index,follow" />`,
    ...(site.googleVerification
      ? [`<meta name="google-site-verification" content="${escape(site.googleVerification)}" />`]
      : []),
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="ko_KR" />`,
    `<meta property="og:site_name" content="${escape(brand.name)}" />`,
    `<meta property="og:title" content="${escape(page.title)}" />`,
    `<meta property="og:description" content="${escape(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(page.title)}" />`,
    `<meta name="twitter:description" content="${escape(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData(page)).replaceAll('<', '\\u003c')}</script>`,
  ]
  return tags.join('\n    ')
}
