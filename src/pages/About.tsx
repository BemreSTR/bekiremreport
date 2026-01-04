import { Trans, useTranslation } from 'react-i18next'

interface TimelineItem {
  year: string
  title: string
  desc: string
}

const About = () => {
  const { t } = useTranslation()

  const heroChips = t('about:hero.chips', { returnObjects: true }) as string[]
  const heroSummaryItems = t('about:hero.summary.items', { returnObjects: true }) as string[]
  const timelineItems = t('about:timeline.items', { returnObjects: true }) as TimelineItem[]

  return (
    <main>
      <section className="page-hero about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <p className="eyebrow">{t('about:hero.eyebrow')}</p>
            <h1 className="about-hero__title">
              <Trans
                i18nKey="about:hero.richTitle"
                components={{
                  product: <span />,
                  experience: <span />,
                }}
              />
            </h1>
            <p className="about-hero__lead">{t('about:hero.lead')}</p>

            {Array.isArray(heroChips) && heroChips.length > 0 && (
              <div className="about-hero__chips" aria-label={t('about:hero.chipsA11y')}>
                {heroChips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="about-hero__panel" aria-label={t('about:hero.summary.a11y')}>
            <p className="about-hero__panel-eyebrow">{t('about:hero.summary.title')}</p>
            <ul className="about-hero__panel-list">
              {Array.isArray(heroSummaryItems) &&
                heroSummaryItems.map((item) => (
                  <li key={item}>
                    <span className="about-hero__dot" />
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel">
            <h2>{t('about:story.start.title')}</h2>
            <p>{t('about:story.start.p1')}</p>
            <p>{t('about:story.start.p2')}</p>
          </div>
          <div className="panel">
            <h2>{t('about:story.current.title')}</h2>
            <p>{t('about:story.current.p1')}</p>
            <p>{t('about:story.current.p2')}</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">{t('about:randomFacts.eyebrow')}</p>
              <h2>{t('about:randomFacts.title')}</h2>
            </div>
          </div>
          <div className="fact-grid">
            <article className="fact-card">
              <h3>{t('about:randomFacts.photo.title')}</h3> <br />
              <p>{t('about:randomFacts.photo.text')}</p>
            </article>
            <article className="fact-card">
              <h3>{t('about:randomFacts.book.title')}</h3> <br />
              <p>{t('about:randomFacts.book.text')}</p>
            </article>
            <article className="fact-card">
              <h3>{t('about:randomFacts.people.title')}</h3> <br />
              <p>{t('about:randomFacts.people.text')}</p>
            </article>
            <article className="fact-card">
              <h3>{t('about:randomFacts.tea.title')}</h3> <br />
              <p>{t('about:randomFacts.tea.text')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sr-only">{t('about:timeline.titleSrOnly')}</h2>
          <ul className="timeline" style={{ listStyle: 'none', padding: 0 }}>
            {Array.isArray(timelineItems) &&
              timelineItems.map((item, index) => (
                <li className="timeline-item" key={index}>
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default About
