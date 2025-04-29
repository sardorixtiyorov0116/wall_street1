import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(nuxtApp => {
  const i18n = createI18n({
    legacy: false,  // Use Composition API (recommended)
    locale: 'ru',   // Default language
    fallbackLocale: 'ru', // Fallback language
    messages: {} // We will load messages dynamically
  })

  // Dynamically import messages from JSON files in the assets directory
  const loadMessages = async () => {
    const locales = ['en', 'ru', 'uz']
    const messages = {}

    for (const locale of locales) {
      const module = await import(`~/assets/i18n/${locale}.json`)
      messages[locale] = module.default
    }

    i18n.global.setLocaleMessage('en', messages['en'])
    i18n.global.setLocaleMessage('ru', messages['ru'])
    i18n.global.setLocaleMessage('uz', messages['uz'])
  }

  loadMessages()

  nuxtApp.vueApp.use(i18n)
})
