import { useI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const { locale } = useI18n()
    const baseUrl = config.public.baseUrl

    const descriptions: Record<string, string> = {
        uz: "Horizont Consult - bu sizning biznesingiz uchun professional konsalting xizmatlarini taklif etuvchi ishonchli kompaniya.",
        ru: "Horizont Consult — надежная компания, предлагающая профессиональные консалтинговые услуги для вашего бизнеса.",
        en: "Horizont Consult is a trusted company offering professional consulting services for your business."
    }

    useHead({
        htmlAttrs: {
            lang: locale.value
        },
        title: 'Horizont Consult',
        meta: [
            {
                name: 'description',
                content: descriptions[locale.value]
            },
            {
                name: 'keywords',
                content: 'Horizont Consult, Konsalting, biznes xizmatlari, biznes konsalting, international consulting'
            },
            {
                property: 'og:title',
                content: 'Horizont Consult - Konsalting va biznes yechimlari'
            },
            {
                property: 'og:description',
                content: descriptions[locale.value]
            },
            {
                property: 'og:image',
                content: `${baseUrl}/_nuxt/HorizontConsult.Bk9kkbNx.png`
            },
            {
                property: 'og:url',
                content: baseUrl
            },
            {
                property: 'og:type',
                content: 'website'
            }
        ],
        script: [
            {
                type: 'application/ld+json',
                id: 'ld-json',
                innerHTML: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Horizont Consult",
                    "url": baseUrl,
                    "logo": `${baseUrl}/_nuxt/HorizontConsult.Bk9kkbNx.png`,
                    "description": descriptions[locale.value],
                    "sameAs": [
                        "https://www.facebook.com/horizontuz",
                        "https://www.instagram.com/horizontuz",
                        "https://www.linkedin.com/company/horizontuz"
                    ]
                })
            }
        ]
    })
})
