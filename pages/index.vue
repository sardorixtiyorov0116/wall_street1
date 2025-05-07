<script setup lang="ts">
// import ExcelUploader from '~/components/items/ExcelUploader.vue';
import { useI18n } from 'vue-i18n'
import { useHead, useRoute } from '#imports'

const { t, locale } = useI18n()
const route = useRoute()

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl
const canonicalUrl = `${baseUrl}/${locale.value}${route.path === '/' ? '' : route.path}`

const descriptions: any = {
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
            name: 'google-site-verification',
            content: '1cv5UblOQqdxoGHT8F2zhr18FuhtTbPhvhD1R9ZxXN4'
        },
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
            content: 'Horizont Consult sizning biznesingiz uchun professional konsalting xizmatlarini taklif etadi.'
        },
        {
            property: 'og:image',
            content: `${baseUrl}/_nuxt/HorizontConsult.Bk9kkbNx.png`
        },
        {
            property: 'og:url',
            content: canonicalUrl
        },
        {
            property: 'og:type',
            content: 'website'
        }
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: `${baseUrl}/favicon.png`
        },
        {
            rel: 'canonical',
            href: canonicalUrl
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
</script>

<template>
    <div>
        <HeroSection :title="'Horizont Consult'" :description="t('slogan')" />
        <!-- <div class="container">
            <h1>Excel dan ma'lumot yuklash</h1>
            <ExcelUploader />
        </div> -->
        <div class="container !py-20">
            <span data-aos="fade-left" class="text-[1.5rem]">{{ t('main.1') }} </span>
            <hr class="my-4" />
            <span data-aos="fade-right" class="text-[1.5rem]"> {{ t('main.2') }} </span>
            <hr class="my-4" />
            <span data-aos="fade-up" class="text-[1.5rem]">{{ t('main.3') }} </span>
            <hr class="my-4" />
            <span data-aos="fade-up" class="text-[1.5rem]"> {{ t('main.4') }} </span>
            <hr class="mt-4 mb-12" />
            <p data-aos="fade-up" class="text-[1.5rem]  font-semibold text-center"> {{ t('main.5') }}</p>
            <div class="flex justify-center mt-10">

                <a data-aos="fade-up" href="/contacts#connect" class="btn">{{ t('requestCall') }}</a>
            </div>
        </div>
        <img v-show="false" width="50" height="50" src="../assets/images/HorizontConsult.png" alt="">
    </div>
</template>
<style scoped lang="scss">
.btn {
    color: var(--primary-light-hover);
    border-radius: 6px;
    padding: .6rem 1.5rem;
    border: 1px solid var(--primary-light-hover);
    transition: all 0.1s ease-in-out;
    font-size: 1.1rem;

    &:hover {
        background: var(--primary-light-hover);
        color: #fff;
    }
}
</style>