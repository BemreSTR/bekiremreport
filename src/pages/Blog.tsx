import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const categories = ['all', 'Teknik', 'Ürün', 'Kültür', 'Tasarım', 'Strateji']

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') {
      return blogPosts
    }
    return blogPosts.filter((post) => post.category === activeCategory)
  }, [activeCategory])

  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Blog</p>
          <h1>Yazılım geliştirme ve ürün yönetimi üzerine düşüncelerim.</h1>
          <p className="lead">
            Teknoloji, ürün stratejisi ve yazılım geliştirme süreçleriyle ilgili deneyimlerimi ve gözlemlerimi
            paylaşıyorum.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                className={`filter-btn${activeCategory === category ? ' active' : ''}`}
                data-category={category}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category === 'all' ? 'Tümü' : category}
              </button>
            ))}
          </div>
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-card__header">
                  <span className="blog-card__date">{post.date}</span>
                  <span className="blog-card__category">{post.category}</span>
                </div>
                <h2>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span className="blog-card__read-time">{post.readTime}</span>
                  <Link className="blog-card__link" to={`/blog/${post.slug}`}>
                    Devamını Oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
