import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'

const Terms = () => {
  const { t } = useTranslation('terms')

  return (
    <main>
      <Seo title={t('seo.title')} description={t('seo.description')} />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1>{t('hero.title')}</h1>
          <p className="lead">{t('hero.lead')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow space-y-12 text-slate-300">
          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.usage.title')}</h2>
            <p className="leading-relaxed font-light">{t('sections.usage.content')}</p>
          </article>

          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.ip.title')}</h2>
            <p className="leading-relaxed font-light mb-4">{t('sections.ip.content')}</p>
            <p className="leading-relaxed font-light text-slate-400 italic bg-white/5 p-4 rounded-xl border border-white/5">
              {t('sections.ip.citation')}
            </p>
          </article>

          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.disclaimer.title')}</h2>
            <p className="leading-relaxed font-light">{t('sections.disclaimer.content')}</p>
          </article>

          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.externalLinks.title')}</h2>
            <p className="leading-relaxed font-light">{t('sections.externalLinks.content')}</p>
          </article>

          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.changes.title')}</h2>
            <p className="leading-relaxed font-light">{t('sections.changes.content')}</p>
          </article>

          <div className="text-right text-xs text-slate-500 pt-4">
            {t('lastUpdated')}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Terms
