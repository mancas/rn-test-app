import * as RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'
import memoize from 'lodash.memoize'

export enum LANGUAGES {
  ES = 'es',
  EN = 'en',
}

export interface TranslateConfigArguments {
  [key: string]: string | number
}

const translationGetters = {
  en: () => require('../../locales/en/index.json'),
  es: () => require('../../locales/es/index.json'),
}

export const LONG_LANGUAGE_CODE = {
  es: 'spanish',
  en: 'english',
}

export const translate = memoize(
  (key: string, config?: TranslateConfigArguments): string =>
    i18n.t(key, config),
  (key: string, config?: TranslateConfigArguments) =>
    config ? key + JSON.stringify(config) : key,
)

export const setI18nConfig = (language?: LANGUAGES) => {
  // fallback if no available language fits
  const fallback = { languageTag: LANGUAGES.ES, isRTL: false }

  let selectedLanguage: LANGUAGES
  if (!language) {
    const { languageTag } =
      RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
      fallback
    selectedLanguage = languageTag as LANGUAGES
  } else {
    selectedLanguage = language
  }

  // clear translation cache
  translate?.cache?.clear?.()

  // set i18n-js config
  i18n.translations = {
    [selectedLanguage]: translationGetters[selectedLanguage](),
  }
  i18n.locale = selectedLanguage
}

export const getSupportedLanguages = () => {
  return [
    {
      label: translate('languages.en'),
      value: LANGUAGES.EN,
    },
    {
      label: translate('languages.es'),
      value: LANGUAGES.ES,
    },
  ]
}
