import { renderToString } from 'react-dom/server'
import { App } from '@/App'
import { blog, brand, campuses, site } from '@/model'

export { site }

export function render() {
  return renderToString(<App />)
}

const escape = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

function structuredData() {
  const image = site.url + site.image
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: `${site.url}/`,
        name: brand.name,
        description: site.description,
        inLanguage: 'ko-KR',
      },
      ...campuses.map((campus) => ({
        '@type': ['LocalBusiness', 'EducationalOrganization'],
        '@id': `${site.url}/#${campus.id}`,
        name: campus.name,
        description: `${campus.area} 피아노 전문 음악학원이에요. ${campus.landmark}, ${campus.owner}.`,
        url: `${site.url}/`,
        image,
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
      })),
    ],
  }
}

export function head() {
  const image = site.url + site.image
  const tags = [
    `<title>${escape(site.title)}</title>`,
    `<meta name="description" content="${escape(site.description)}" />`,
    `<meta name="keywords" content="${escape(site.keywords.join(','))}" />`,
    `<meta name="robots" content="index,follow" />`,
    ...(site.googleVerification
      ? [`<meta name="google-site-verification" content="${escape(site.googleVerification)}" />`]
      : []),
    `<link rel="canonical" href="${site.url}/" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="ko_KR" />`,
    `<meta property="og:site_name" content="${escape(brand.name)}" />`,
    `<meta property="og:title" content="${escape(site.title)}" />`,
    `<meta property="og:description" content="${escape(site.description)}" />`,
    `<meta property="og:url" content="${site.url}/" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(site.title)}" />`,
    `<meta name="twitter:description" content="${escape(site.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData()).replaceAll('<', '\\u003c')}</script>`,
  ]
  return tags.join('\n    ')
}
