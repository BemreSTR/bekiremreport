import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation, useParams } from 'react-router-dom'
import { isSupportedLanguage } from '@/i18n'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

type OgType = 'website' | 'article'

type SeoProps = {
  title?: string
  description?: string
  ogType?: OgType
  date?: string
  image?: string
  jsonLd?: object | string
}

const SITE_NAME = 'bekiremresaripinar.online'
const SITE_URL = 'https://bekiremresaripinar.online'

function toJsonLd(value: object | string) {
  return typeof value === 'string' ? value : JSON.stringify(value)
}

export default function Seo({ title, description, ogType = 'website', date, image, jsonLd }: SeoProps) {
  const location = useLocation()
  const { lang } = useParams()
  const currentLang = isSupportedLanguage(lang) ? lang : 'tr'

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-WPF8R8LK10', {
        page_path: location.pathname + location.search,
        page_title: title || SITE_NAME,
      })
    }
  }, [location, title])

  const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME
  const canonical = `${SITE_URL}/#${location.pathname}${location.search}`
  const defaultOgImage = `${SITE_URL}/og-image.png`
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : defaultOgImage

  // Get path without language prefix for hreflang
  const pathWithoutLang = location.pathname.replace(/^\/(tr|en)/, '')
  const languages = ['tr', 'en']

  return (
    <Helmet htmlAttributes={{ lang: currentLang }}>
      <title>{fullTitle}</title>
      <link rel="canonical" href={canonical} />

      {/* Hreflang Tags */}
      {languages.map((l) => {
        const path = pathWithoutLang.startsWith('/') ? pathWithoutLang : `/${pathWithoutLang}`
        const finalPath = path === '/' ? '' : path
        return (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`${SITE_URL}/#/${l}${finalPath}`.replace(/\/$/, '')}
          />
        )
      })}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}/#/tr${pathWithoutLang.startsWith('/') ? pathWithoutLang : `/${pathWithoutLang}`}`.replace(
          /\/$/,
          ''
        )}
      />

      {description ? <meta content={description} name="description" /> : null}

      <meta content={fullTitle} property="og:title" />
      {description ? <meta content={description} property="og:description" /> : null}
      <meta content={ogType} property="og:type" />
      <meta content={canonical} property="og:url" />
      <meta content={ogImage} property="og:image" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={fullTitle} name="twitter:title" />
      {description ? <meta content={description} name="twitter:description" /> : null}
      <meta content={ogImage} name="twitter:image" />

      {ogType === 'article' && date ? <meta content={date} property="article:published_time" /> : null}

      {jsonLd ? <script type="application/ld+json">{toJsonLd(jsonLd)}</script> : null}
    </Helmet>
  )
}

