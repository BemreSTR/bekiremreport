import { Link, useParams } from 'react-router-dom'
import { isSupportedLanguage } from '@/i18n'
import { prefixLangPath } from '@/lib/lang'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'

const NotFound = () => {
  const { lang } = useParams()
  const currentLang = isSupportedLanguage(lang) ? lang : 'tr'
  const { t } = useTranslation()

  return (
    <main>
      <Seo title={t('notFound.title')} />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">404</p>
          <h1>{t('notFound.title')}</h1>
          <p className="lead">{t('notFound.subtitle')}</p>
          <Link className="btn ghost" to={prefixLangPath(currentLang, '/')}>
            {t('notFound.backHome')}
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFound
