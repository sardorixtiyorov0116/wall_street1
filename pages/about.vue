<template>
    <div>
        <!-- <Header /> -->
        <HeroSection :title="t('about.company')" :description="t('expertsInFinancialConsulting')" />
        <HistorySection />
        <!-- <TeamSection data-aos="fade-up"/> -->
        <ClientSection />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl
const canonicalUrl = `${baseUrl}/${locale.value}/about`
useHead({
    htmlAttrs: {
        lang: locale.value
    },
    title: 'Horizon Consult',
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