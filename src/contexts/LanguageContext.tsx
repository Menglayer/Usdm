import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Locale = 'zh' | 'en'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

// Lazy-load translations
let translations: Record<Locale, Record<string, string>> | null = null

async function loadTranslations(): Promise<Record<Locale, Record<string, string>>> {
  if (translations) return translations
  const [zh, en] = await Promise.all([
    import('../i18n/zh.json'),
    import('../i18n/en.json'),
  ])
  translations = { zh: zh.default, en: en.default }
  return translations
}

// Synchronous access after initial load
let loadedTranslations: Record<Locale, Record<string, string>> | null = null

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('matryo-locale')
    if (saved === 'en' || saved === 'zh') return saved
    return 'zh'
  })

  const [, setLoaded] = useState(false)

  // Load translations on mount
  if (!loadedTranslations) {
    loadTranslations().then((t) => {
      loadedTranslations = t
      setLoaded(true)
    })
  }

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('matryo-locale', newLocale)
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : 'en'
  }, [])

  const t = useCallback((key: string): string => {
    if (!loadedTranslations) return key
    return loadedTranslations[locale]?.[key] ?? key
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
