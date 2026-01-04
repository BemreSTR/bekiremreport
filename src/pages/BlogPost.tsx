import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const BlogPost = () => {
  const { slug } = useParams()
  const postIndex = blogPosts.findIndex((entry) => entry.slug === slug)
  const post = postIndex >= 0 ? blogPosts[postIndex] : null

  if (!post) {
    return (
      <main>
        <section className="page-hero">
          <div className="container narrow">
            <p className="eyebrow">Blog</p>
            <h1>Yazı bulunamadı</h1>
            <p className="lead">Aradığın blog yazısı taşınmış veya henüz yayınlanmamış olabilir.</p>
            <Link className="btn ghost" to="/blog">
              Blog&apos;a Dön
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const previousPost = postIndex > 0 ? blogPosts[postIndex - 1] : null
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="blog-post">
            <div className="blog-post__header">
              <span className="blog-post__category">{post.category}</span>
              <h1 className="blog-post__title">{post.title}</h1>
              <div className="blog-post__meta">
                <span className="blog-post__date">{post.date}</span>
                <span className="blog-post__read-time">{post.readTime}</span>
              </div>
            </div>

            <div className="blog-post__content">
              {post.content ?? (
                <>
                  <p>
                    Bu yazı şu anda hazırlık aşamasında. Konu üzerine notlarımı netleştirdikçe içeriği burada
                    paylaşacağım.
                  </p>
                  <p>
                    Bu arada blog sayfasındaki diğer yazılara göz atabilir ya da bağlantı kurmak istersen iletişim
                    sayfasına geçebilirsin.
                  </p>
                </>
              )}

              <div className="blog-post__navigation">
                <div className="blog-post__nav-prev">
                  {previousPost ? (
                    <Link className="blog-post__nav-link" to={`/blog/${previousPost.slug}`}>
                      ← Önceki Yazı
                    </Link>
                  ) : (
                    <Link className="blog-post__nav-link" to="/blog">
                      ← Blog&apos;a Dön
                    </Link>
                  )}
                </div>
                <div className="blog-post__nav-next">
                  {nextPost ? (
                    <Link className="blog-post__nav-link" to={`/blog/${nextPost.slug}`}>
                      Sonraki Yazı →
                    </Link>
                  ) : (
                    <Link className="blog-post__nav-link" to="/blog">
                      Blog&apos;a Dön →
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
