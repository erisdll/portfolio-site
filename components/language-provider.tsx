"use client"

import type React from "react"

import { createContext, useContext } from "react"

interface LanguageContextProps {
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextProps>({
  t: (key: string) => key,
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const translations = {
    "projects.links": "Links",
    "projects.viewCode": "View Code",
    "projects.liveDemo": "Live Demo",
    "projects.gallery": "Gallery",
  }

  const t = (key: string) => {
    return translations[key] || key
  }

  return <LanguageContext.Provider value={{ t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
