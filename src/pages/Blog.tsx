import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { isSupportedLanguage } from '@/i18n'
import { prefixLangPath } from '@/lib/lang'
import { useTranslation } from 'react-i18next'
import { blogPosts } from '../data/blogPosts'
import Seo from '@/components/Seo'

const categoryKeys = ['all', 'technical', 'product', 'culture', 'design', 'strategy', 'personalDevelopment'] as const

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const { lang } = useParams()
  const currentLang = isSupportedLanguage(lang) ? lang : 'tr'
  const { t } = useTranslation()

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') {
      return blogPosts
    }
    return blogPosts.filter((post) => post.categoryKey === activeCategory)
  }, [activeCategory])

  return (
    <main>
      <Seo title={t('blog.title')} description={t('blog.subtitle')} />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Blog</p>
          <h1>{t('blog.title')}</h1>
          <p className="lead">{t('blog.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-filters">
            {categoryKeys.map((category) => (
              <button
                className={`filter-btn${activeCategory === category ? ' active' : ''}`}
                data-category={category}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category === 'all' ? t('blog.filterAll') : t(`categories.${category}`)}
              </button>
            ))}
          </div>
          <div className="blog-grid">
            {filteredPosts.map((post) => {
              const isEn = currentLang === 'en'
              const title = (isEn && post.titleEn) || post.title
              const excerpt = (isEn && post.excerptEn) || post.excerpt
              const date = (isEn && post.dateEn) || post.date
              const readTime = (isEn && post.readTimeEn) || post.readTime

              return (
                <article className="blog-card" key={post.slug}>
                  <div className="blog-card__header">
                    <span className="blog-card__date">{date}</span>
                    <span className="blog-card__category">
                      {t(`categories.${post.categoryKey}`)}
                    </span>
                  </div>
                  <h2>
                    <Link to={prefixLangPath(currentLang, `/blog/${post.slug}`)}>{title}</Link>
                  </h2>
                  <p>{excerpt}</p>
                  <div className="blog-card__meta">
                    <span className="blog-card__read-time">{readTime}</span>
                    <Link className="blog-card__link" to={prefixLangPath(currentLang, `/blog/${post.slug}`)}>
                      {t('blog.readMore')}
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
