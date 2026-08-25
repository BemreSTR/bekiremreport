import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'
import { CheckCircle2Icon } from 'lucide-react'

const Contact = () => {
  const { t, i18n } = useTranslation()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  const isEn = i18n.language === 'en'

  return (
    <main>
      <Seo title={t('contact:seo.title')} description={t('contact:seo.description')} />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">{t('contact:hero.eyebrow')}</p>
          <h1>{t('contact:hero.title')}</h1>
          <p className="lead">{t('contact:hero.lead')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>{t('contact:info.title')}</h2>
            <ul>
              <li>
                <span>{t('contact:info.email')}</span>
                <a href="mailto:bekiremrebusiness@gmail.com">bekiremrebusiness@gmail.com</a>
              </li>
              <li>
                <span>{t('contact:info.linkedin')}</span>
                <a
                  href="https://www.linkedin.com/in/bekir-emre-sar%C4%B1p%C4%B1nar-316834175/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/bekir-emre-sarıpınar
                </a>
              </li>
              <li>
                <span>{t('contact:info.github')}</span>
                <a href="https://github.com/BemreSTR" target="_blank" rel="noreferrer">
                  github.com/BemreSTR
                </a>
              </li>
              <li>
                <span>{t('contact:info.location')}</span>
                <p>{t('contact:info.locationVal')}</p>
              </li>
            </ul>
            <div className="contact-note">
              <h3>{t('contact:info.noteTitle')}</h3>
              <p>{t('contact:info.noteText')}</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>{t('contact:form.title')}</h2>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center p-8 text-center rounded-2xl bg-white/5 border border-emerald-500/30 backdrop-blur-md">
                <CheckCircle2Icon className="size-12 text-emerald-400 mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {isEn ? 'Message Received!' : 'Mesajınız Alındı!'}
                </h3>
                <p className="text-slate-300 text-sm max-w-sm mb-6 font-light">
                  {isEn
                    ? 'Thank you for reaching out. I will get back to you as soon as possible.'
                    : 'İletişime geçtiğiniz için teşekkürler. En kısa sürede sizinle dönüş yapacağım.'}
                </p>
                <button
                  type="button"
                  className="btn ghost text-xs"
                  onClick={() => setIsSubmitted(false)}
                >
                  {isEn ? 'Send Another Message' : 'Yeni Mesaj Gönder'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact:form.name')}</label>
                  <input type="text" id="name" name="name" placeholder={t('contact:form.namePH')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('contact:form.email')}</label>
                  <input type="email" id="email" name="email" placeholder={t('contact:form.emailPH')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="topic">{t('contact:form.topic')}</label>
                  <select id="topic" name="topic">
                    <option>{t('contact:form.topics.discovery')}</option>
                    <option>{t('contact:form.topics.consulting')}</option>
                    <option>{t('contact:form.topics.mentoring')}</option>
                    <option>{t('contact:form.topics.event')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t('contact:form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t('contact:form.messagePH')}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn primary" disabled={isSubmitting}>
                  {isSubmitting
                    ? isEn
                      ? 'Sending...'
                      : 'Gönderiliyor...'
                    : t('contact:form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
