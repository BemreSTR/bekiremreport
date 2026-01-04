import type { SupportedLanguage } from '@/i18n'

export function prefixLangPath(lang: SupportedLanguage, to: string) {
  if (!to.startsWith('/')) {
    return `/${lang}/${to}`
  }
  if (to === '/') {
    return `/${lang}`
  }
  return `/${lang}${to}`
}

export function swapLangInPath(pathname: string, nextLang: SupportedLanguage) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) {
    return `/${nextLang}`
  }
  segments[0] = nextLang
  return `/${segments.join('/')}`
}

