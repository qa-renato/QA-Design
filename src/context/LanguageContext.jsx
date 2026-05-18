import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from '../data/i18n'

const STORAGE_KEY = 'inbot-lang'
const DEFAULT_LANG = 'pt-BR'

function getSavedLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved && translations[saved] ? saved : DEFAULT_LANG
  } catch {
    return DEFAULT_LANG
  }
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getSavedLang)

  const setLanguage = useCallback((code) => {
    if (!translations[code]) return
    setLanguageState(code)
    try { localStorage.setItem(STORAGE_KEY, code) } catch {}
  }, [])

  const content = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
