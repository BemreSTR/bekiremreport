import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonEn from '@/locales/en/common.json'
import commonTr from '@/locales/tr/common.json'
import aboutEn from '@/locales/en/about.json'
import aboutTr from '@/locales/tr/about.json'
import blogEn from '@/locales/en/blog.json'
import blogTr from '@/locales/tr/blog.json'
import projectsEn from '@/locales/en/projects.json'
import projectsTr from '@/locales/tr/projects.json'
import contactEn from '@/locales/en/contact.json'
import contactTr from '@/locales/tr/contact.json'
import blogPostsEn from '@/locales/en/blogPosts.json'
import blogPostsTr from '@/locales/tr/blogPosts.json'
import privacyEn from '@/locales/en/privacy.json'
import privacyTr from '@/locales/tr/privacy.json'
import termsEn from '@/locales/en/terms.json'
import termsTr from '@/locales/tr/terms.json'

export const supportedLanguages = ['tr', 'en'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

export function isSupportedLanguage(value: string | undefined | null): value is SupportedLanguage {
  return value === 'tr' || value === 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    tr: {
      common: commonTr,
      about: aboutTr,
      blog: blogTr,
      projects: projectsTr,
      contact: contactTr,
      blogPosts: blogPostsTr,
      privacy: privacyTr,
      terms: termsTr,
    },
    en: {
      common: commonEn,
      about: aboutEn,
      blog: blogEn,
      projects: projectsEn,
      contact: contactEn,
      blogPosts: blogPostsEn,
      privacy: privacyEn,
      terms: termsEn,
    },
  },
  fallbackLng: 'tr',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

