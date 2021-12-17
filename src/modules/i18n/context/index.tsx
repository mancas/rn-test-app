import React, { useEffect, useContext, useState, useCallback } from 'react'
import * as RNLocalize from 'react-native-localize'
import { setI18nConfig } from '..'

export interface I18nFunctions {
  updateLanguage: ({ language }: { language: string }) => Promise<void>
}

export interface I18nProviderProps {
  children: React.ReactNode
}

const I18nContext = React.createContext({})

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [, setValue] = useState(0)

  const updateLanguage = useCallback(({ language }) => {
    return new Promise(resolve => {
      setI18nConfig(language)
      setValue(oldValue => oldValue + 1)
      setTimeout(resolve, 300)
    })
  }, [])

  useEffect(() => {
    const handleLocalizationChange = () => {
      setI18nConfig()
      setValue(oldValue => oldValue + 1)
    }

    setI18nConfig()
    RNLocalize.addEventListener('change', handleLocalizationChange)
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange)
    }
  }, [])

  return (
    <I18nContext.Provider value={{ updateLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => {
  const ctx = useContext(I18nContext)

  if (!ctx) {
    throw Error(
      'The `useI18n` hook must be called from a descendent of the `I18nProvider`.',
    )
  }

  return ctx as I18nFunctions
}
