import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">{t('projects:hero.eyebrow')}</p>
          <h1>{t('projects:hero.title')}</h1>
          <p className="lead">{t('projects:hero.lead')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-list">
            <article className="project-detail">
              <div className="project-detail__header">
                <span className="project-detail__tag">{t('projects:items.zenblog.tag')}</span>
                <h2>{t('projects:items.zenblog.title')}</h2>
              </div>
              <p>{t('projects:items.zenblog.desc')}</p>
              <div className="project-detail__substack">
                <strong>{t('projects:items.zenblog.substack.label1')}</strong>{' '}
                {t('projects:items.zenblog.substack.val1')}
                <br />
                <strong>{t('projects:items.zenblog.substack.label2')}</strong>{' '}
                {t('projects:items.zenblog.substack.val2')}
              </div>
              <ul className="project-detail__stack">
                <li>Go</li>
                <li>Markdown</li>
                <li>DigitalOcean</li>
                <li>VPS</li>
                <li>VPS Management</li>
              </ul>
            </article>

            <article className="project-detail">
              <div className="project-detail__header">
                <span className="project-detail__tag">{t('projects:items.dinakademi.tag')}</span>
                <h2>{t('projects:items.dinakademi.title')}</h2>
              </div>
              <p>{t('projects:items.dinakademi.desc')}</p>
              <div className="project-detail__substack">
                <strong>{t('projects:items.dinakademi.substack.label1')}</strong>{' '}
                {t('projects:items.dinakademi.substack.val1')}
                <br />
                <strong>{t('projects:items.dinakademi.substack.label2')}</strong>{' '}
                {t('projects:items.dinakademi.substack.val2')}
              </div>
              <ul className="project-detail__stack">
                <li>Vite</li>
                <li>TypeScript</li>
                <li>Firebase</li>
                <li>EdTech</li>
                <li>Responsive Design</li>
                <li>dinakademi.com</li>
              </ul>
            </article>

            <article className="project-detail">
              <div className="project-detail__header">
                <span className="project-detail__tag">{t('projects:items.mybaby.tag')}</span>
                <h2>{t('projects:items.mybaby.title')}</h2>
              </div>
              <p>{t('projects:items.mybaby.desc')}</p>
              <div className="project-detail__substack">
                <strong>{t('projects:items.mybaby.substack.label1')}</strong>{' '}
                {t('projects:items.mybaby.substack.val1')}
                <br />
                <strong>{t('projects:items.mybaby.substack.label2')}</strong>{' '}
                {t('projects:items.mybaby.substack.val2')}
              </div>
              <ul className="project-detail__stack">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>E-Commerce</li>
              </ul>
            </article>

            <article className="project-detail">
              <div className="project-detail__header">
                <span className="project-detail__tag">{t('projects:items.invoice.tag')}</span>
                <h2>{t('projects:items.invoice.title')}</h2>
              </div>
              <p>{t('projects:items.invoice.desc')}</p>
              <div className="project-detail__substack">
                <strong>{t('projects:items.invoice.substack.label1')}</strong>{' '}
                {t('projects:items.invoice.substack.val1')}
                <br />
                <strong>{t('projects:items.invoice.substack.label2')}</strong>{' '}
                {t('projects:items.invoice.substack.val2')}
              </div>
              <ul className="project-detail__stack">
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Gemini AI</li>
                <li>Firebase</li>
                <li>Tailwind CSS</li>
                <li>GitHub Pages</li>
              </ul>
            </article>

            <article className="project-detail">
              <div className="project-detail__header">
                <span className="project-detail__tag">{t('projects:items.safepass.tag')}</span>
                <h2>{t('projects:items.safepass.title')}</h2>
              </div>
              <p>{t('projects:items.safepass.desc')}</p>
              <div className="project-detail__substack">
                <strong>{t('projects:items.safepass.substack.label1')}</strong>{' '}
                {t('projects:items.safepass.substack.val1')}
                <br />
                <strong>{t('projects:items.safepass.substack.label2')}</strong>{' '}
                {t('projects:items.safepass.substack.val2')}
              </div>
              <ul className="project-detail__stack">
                <li>NestJS</li>
                <li>Next.js</li>
                <li>Flutter</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>DigitalOcean</li>
              </ul>
            </article>

            <article className="project-detail">
              <div className="project-detail__header">
                <span className="project-detail__tag">{t('projects:items.readingTracker.tag')}</span>
                <h2>{t('projects:items.readingTracker.title')}</h2>
              </div>
              <p>{t('projects:items.readingTracker.desc')}</p>
              <ul className="project-detail__stack">
                <li>React 19</li>
                <li>Vite 7</li>
                <li>shadcn/ui</li>
                <li>Supabase</li>
                <li>Tailwind CSS</li>
                <li>PWA</li>
              </ul>
            </article>

            <article className="project-detail">
              <div className="project-detail__header">
                <span className="project-detail__tag">{t('projects:items.netusage.tag')}</span>
                <h2>{t('projects:items.netusage.title')}</h2>
              </div>
              <p>{t('projects:items.netusage.desc')}</p>
              <ul className="project-detail__stack">
                <li>Python 3.8+</li>
                <li>SQLite</li>
                <li>macOS System Metrics</li>
                <li>CLI</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
