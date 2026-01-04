import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

interface SeoProps {
    title?: string
    description?: string
    ogType?: 'website' | 'article'
    date?: string // ISO 8601 format (YYYY-MM-DD)
}

const Seo = ({ title, description, ogType = 'website', date }: SeoProps) => {
    const { t, i18n } = useTranslation()
    const location = useLocation()

    const siteTitle = 'Bekir Emre Sarıpınar'
    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle
    const metaDescription = description || t('home.subtitle')

    const currentLang = i18n.resolvedLanguage || 'tr'
    // Remove language prefix for canonical if it exists in path (to avoid duplication if logic changes)
    // But our current logic adds it via hash. 
    // Let's stick to the convention: https://bekiremre.dev/#/{lang}/{path}
    const canonicalUrl = `https://bekiremre.dev/#/${currentLang}${location.pathname}`.replace(/\/$/, '')

    return (
        <Helmet>
            <html lang={currentLang} />
            <title>{finalTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:locale" content={currentLang === 'tr' ? 'tr_TR' : 'en_US'} />

            {/* Article Specific */}
            {ogType === 'article' && date && <meta property="article:published_time" content={date} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={metaDescription} />
        </Helmet>
    )
}

export default Seo
