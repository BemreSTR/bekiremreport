import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'

const Privacy = () => {
  const { t } = useTranslation('privacy')

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
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.intro.title')}</h2>
            <p className="leading-relaxed font-light">{t('sections.intro.content')}</p>
          </article>

          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.dataCollected.title')}</h2>
            <p className="leading-relaxed font-light mb-4">{t('sections.dataCollected.content')}</p>
            <ul className="list-disc list-inside space-y-2 font-light text-slate-300">
              <li>{t('sections.dataCollected.item1')}</li>
              <li>{t('sections.dataCollected.item2')}</li>
            </ul>
          </article>

          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.cookies.title')}</h2>
            <p className="leading-relaxed font-light">{t('sections.cookies.content')}</p>
          </article>

          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.dataSharing.title')}</h2>
            <p className="leading-relaxed font-light">{t('sections.dataSharing.content')}</p>
          </article>

          <article className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-4">{t('sections.contact.title')}</h2>
            <p className="leading-relaxed font-light">{t('sections.contact.content')}</p>
          </article>

          <div className="text-right text-xs text-slate-500 pt-4">
            {t('lastUpdated')}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Privacy
