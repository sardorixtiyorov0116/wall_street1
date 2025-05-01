<template>
    <div>
        <HeroSection :title="t('faq.text1')" :description="t('expertsInFinancialConsulting')" />
        <FaqSection />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl
const canonicalUrl = `${baseUrl}/${locale.value}/faq`
useHead({
    htmlAttrs: {
        lang: locale.value
    },
    title: 'Horizont Consult',
    meta: [
        {
            name: 'description',
            content: t('expertsInFinancialConsulting')
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: canonicalUrl
        }
    ]
})
</script>

<style scoped></style>