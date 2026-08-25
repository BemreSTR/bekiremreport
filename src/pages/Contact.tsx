import { useTranslation } from 'react-i18next'
import Seo from '@/components/Seo'
import { MailIcon, LinkedinIcon, GithubIcon, MapPinIcon } from 'lucide-react'

const Contact = () => {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <main>
      <Seo title={t('contact:seo.title')} description={t('contact:seo.description')} />
      <section className="page-hero">
        <div className="container narrow text-center">
          <p className="eyebrow">{t('contact:hero.eyebrow')}</p>
          <h1>{t('contact:hero.title')}</h1>
          <p className="lead">{t('contact:hero.lead')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct Email Action Card */}
            <div className="flex flex-col justify-between p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-colors">
              <div>
                <div className="size-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <MailIcon className="size-6" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{t('contact:info.title')}</h2>
                <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                  {isEn
                    ? 'Feel free to send me a direct email for project inquiries, collaborations, or general questions.'
                    : 'Proje teklifleri, iş birliği veya sorularınız için bana doğrudan e-posta gönderebilirsiniz.'}
                </p>
              </div>
              <div>
                <a
                  href="mailto:bekiremrebusiness@gmail.com"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] text-center"
                >
                  <MailIcon className="size-4" />
                  <span>bekiremrebusiness@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social & Location Channels Card */}
            <div className="flex flex-col justify-between p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  {isEn ? 'Social Networks & Location' : 'Sosyal Ağlar ve Konum'}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-2.5 rounded-lg bg-white/5 text-blue-400">
                      <LinkedinIcon className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-medium">LinkedIn</span>
                      <a
                        href="https://www.linkedin.com/in/bekir-emre-sar%C4%B1p%C4%B1nar-316834175/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                      >
                        bekir-emre-sarıpınar
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-2.5 rounded-lg bg-white/5 text-slate-200">
                      <GithubIcon className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-medium">GitHub</span>
                      <a
                        href="https://github.com/BemreSTR"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                      >
                        github.com/BemreSTR
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="p-2.5 rounded-lg bg-white/5 text-indigo-400">
                      <MapPinIcon className="size-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-medium">{t('contact:info.location')}</span>
                      <span className="text-sm font-semibold text-white">{t('contact:info.locationVal')}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {t('contact:info.noteTitle')}
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {t('contact:info.noteText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
