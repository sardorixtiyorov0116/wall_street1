<template>
    <div>
        <HeroSection :title="t('contacts.text')" :description="t('expertsInFinancialConsulting')" />
        <Contacts />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const baseUrl = 'https://horizont.uz'
const canonicalUrl = `${baseUrl}/${locale.value}/contacts`
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