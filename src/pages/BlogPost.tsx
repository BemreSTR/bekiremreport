import { Link, useParams } from 'react-router-dom'
import { isSupportedLanguage } from '@/i18n'
import { prefixLangPath } from '@/lib/lang'
import { useTranslation } from 'react-i18next'
import { blogPosts } from '../data/blogPosts'

const BlogPost = () => {
  const { slug, lang } = useParams()
  const currentLang = isSupportedLanguage(lang) ? lang : 'tr'
  const { t } = useTranslation()
  const postIndex = blogPosts.findIndex((entry) => entry.slug === slug)
  const post = postIndex >= 0 ? blogPosts[postIndex] : null

  if (!post) {
    return (
      <main>
        <section className="page-hero">
          <div className="container narrow">
            <p className="eyebrow">Blog</p>
            <h1>{t('blog.blogPost.notFoundTitle')}</h1>
            <p className="lead">{t('blog.blogPost.notFoundDesc')}</p>
            <Link className="btn ghost" to={prefixLangPath(currentLang, '/blog')}>
              {t('blog.blogPost.backToBlog')}
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const isEn = currentLang === 'en'
  const postTitle = (isEn && post.titleEn) || post.title
  const postDate = (isEn && post.dateEn) || post.date
  const postReadTime = (isEn && post.readTimeEn) || post.readTime
  const postContent = (isEn && post.contentEn) || post.content

  const previousPost = postIndex > 0 ? blogPosts[postIndex - 1] : null
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="blog-post">
            <div className="blog-post__header">
              <span className="blog-post__category">{t(`categories.${post.categoryKey}`)}</span>
              <h1 className="blog-post__title">{postTitle}</h1>
              <div className="blog-post__meta">
                <span className="blog-post__date">{postDate}</span>
                <span className="blog-post__read-time">{postReadTime}</span>
              </div>
            </div>

            <div className="blog-post__content">
              {postContent ?? (
                <>
                  <p>
                    {isEn
                      ? 'This article is currently in preparation. I will share the content here as I clarify my notes on the subject.'
                      : 'Bu yazı şu anda hazırlık aşamasında. Konu üzerine notlarımı netleştirdikçe içeriği burada paylaşacağım.'}
                  </p>
                  <p>
                    {isEn
                      ? 'In the meantime, you can check out other articles on the blog page or go to the contact page if you want to connect.'
                      : 'Bu arada blog sayfasındaki diğer yazılara göz atabilir ya da bağlantı kurmak istersen iletişim sayfasına geçebilirsin.'}
                  </p>
                </>
              )}

              <div className="blog-post__navigation">
                <div className="blog-post__nav-prev">
                  {previousPost ? (
                    <Link className="blog-post__nav-link" to={prefixLangPath(currentLang, `/blog/${previousPost.slug}`)}>
                      {t('blog.blogPost.prevPost')}
                    </Link>
                  ) : (
                    <Link className="blog-post__nav-link" to={prefixLangPath(currentLang, '/blog')}>
                      {t('blog.blogPost.backToBlog')}
                    </Link>
                  )}
                </div>
                <div className="blog-post__nav-next">
                  {nextPost ? (
                    <Link className="blog-post__nav-link" to={prefixLangPath(currentLang, `/blog/${nextPost.slug}`)}>
                      {t('blog.blogPost.nextPost')}
                    </Link>
                  ) : (
                    <Link className="blog-post__nav-link" to={prefixLangPath(currentLang, '/blog')}>
                      {t('blog.blogPost.backToBlog')}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BlogPost
