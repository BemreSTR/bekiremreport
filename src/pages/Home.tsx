import { Link, useParams } from 'react-router-dom'
import { isSupportedLanguage } from '@/i18n'
import { prefixLangPath } from '@/lib/lang'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'

const Home = () => {
  const { lang } = useParams()
  const currentLang = isSupportedLanguage(lang) ? lang : 'tr'
  const { t } = useTranslation()

  return (
    <main>
      <Seo
        title={t('home.seo.title')}
        description={t('home.seo.description')}
      />
      <section className="hero relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="container pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <p className="eyebrow mb-8 text-sm md:text-base tracking-[0.3em] text-blue-400/80 font-bold uppercase">
              {t('home.eyebrow')}
            </p>

            <h1 className="font-extrabold tracking-tight text-white mb-10 text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-[1.1]">
              {t('home.titleLine1')} <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 inline-block animate-gradient pb-2">
                {t('home.titleName')}
              </span>
            </h1> <br />

            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
              {t('home.subtitle')}
              <br /> <br />
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-24">
              <Link
                className="px-8 py-4 rounded-full bg-blue-700 text-white font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                to={prefixLangPath(currentLang, '/projects')}
              >
                {t('home.ctaProjects')}
              </Link>
              <Link
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                to={prefixLangPath(currentLang, '/contact')}
              >
                {t('home.ctaContact')}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl border-t border-white/5 pt-12">
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{t('home.stats.stackTitle')}</h2>
                <p className="text-slate-400">{t('home.stats.stackValue')}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{t('home.stats.uiTitle')}</h2>
                <p className="text-slate-400">{t('home.stats.uiValue')}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wider">{t('home.stats.dbTitle')}</h2>
                <p className="text-slate-400">{t('home.stats.dbValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-header">
          <div>
            <p className="eyebrow">{t('home.highlights.eyebrow')}</p>
            <h2>{t('home.highlights.title')}</h2>
          </div>
          <p className="section-subtitle">{t('home.highlights.subtitle')}</p>
        </div>

        <div className="container feature-grid">
          <article className="feature-card">
            <h3>{t('home.highlights.item1.title')}</h3>
            <p>{t('home.highlights.item1.desc')}</p>
          </article>
          <article className="feature-card">
            <h3>{t('home.highlights.item2.title')}</h3>
            <p>{t('home.highlights.item2.desc')}</p>
          </article>
          <article className="feature-card">
            <h3>{t('home.highlights.item3.title')}</h3>
            <p>{t('home.highlights.item3.desc')}</p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">{t('home.projectPreviews.eyebrow')}</p>
              <h2>{t('home.projectPreviews.title')}</h2>
            </div>
            <Link className="btn ghost" to={prefixLangPath(currentLang, '/projects')}>
              {t('home.projectPreviews.viewAll')}
            </Link>
          </div>

          <div className="project-preview-grid">
            <article className="project-card">
              <span className="project-card__tag">{t('home.projectPreviews.zenblog.tag')}</span>
              <h3>ZenBlog</h3>
              <p>{t('home.projectPreviews.zenblog.desc')}</p>
            </article>
            <article className="project-card">
              <span className="project-card__tag">{t('home.projectPreviews.dinakademi.tag')}</span>
              <h3>Din Akademi</h3>
              <p>{t('home.projectPreviews.dinakademi.desc')}</p>
            </article>
            <article className="project-card">
              <span className="project-card__tag">{t('home.projectPreviews.mybaby.tag')}</span>
              <h3>MyBaby</h3>
              <p>{t('home.projectPreviews.mybaby.desc')}</p>
            </article>
            <article className="project-card">
              <span className="project-card__tag">{t('home.projectPreviews.invoice.tag')}</span>
              <h3>Fatura Takip Asistanı</h3>
              <p>{t('home.projectPreviews.invoice.desc')}</p>
            </article>
            <article className="project-card">
              <span className="project-card__tag">{t('home.projectPreviews.safepass.tag')}</span>
              <h3>SafePass</h3>
              <p>{t('home.projectPreviews.safepass.desc')}</p>
            </article>
            <article className="project-card">
              <span className="project-card__tag">{t('home.projectPreviews.readingTracker.tag')}</span>
              <h3>Okuma Takip Uygulaması</h3>
              <p>{t('home.projectPreviews.readingTracker.desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">{t('home.skills.eyebrow')}</p>
              <h2>{t('home.skills.title')}</h2>
            </div>
          </div>
          <div className="skill-grid">
            <article className="skill-card">
              <h3>{t('home.skills.frontend')}</h3>
              <ul>
                <li>React 19 &amp; Vite 7</li>
                <li>shadcn/ui (Radix)</li>
                <li>Tailwind CSS</li>
              </ul>
            </article>
            <article className="skill-card">
              <h3>{t('home.skills.backend')}</h3>
              <ul>
                <li>Supabase Auth</li>
                <li>PostgreSQL (Supabase)</li>
                <li>Realtime Database</li>
              </ul>
            </article>
            <article className="skill-card">
              <h3>{t('home.skills.other')}</h3>
              <ul>
                <li>PWA (vite-plugin-pwa)</li>
                <li>Lucide React Icons</li>
                <li>Git &amp; GitHub</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
