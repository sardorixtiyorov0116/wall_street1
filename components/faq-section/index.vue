<template>
    <div id="faq" class="faq">
        <div class="container">
            <h2>{{ t('faq.text') }}</h2>
            <div class="rounded-lg border border-[#dee2e6] overflow-hidden w-full" data-aos="fade-up">
                <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
                    <template #default="{ item, open }">
                        <UButton color="gray" variant="ghost"
                            class="border border-[#dee2e6] hover:!bg-blue-100 hover:!text-[#052c65]"
                            :ui="{ rounded: 'rounded-none', padding: { sm: 'px-3 py-4' } }">
                            <span class="text-black text-[1.2rem] font-normal">{{ item.label }}</span>
                            <template #trailing>
                                <UIcon name="i-heroicons-chevron-right-20-solid"
                                    class="w-8 h-7 ms-auto transform transition-transform duration-200 text-black"
                                    :class="[open && 'rotate-90']" />
                            </template>
                        </UButton>
                    </template>
                    <template #item="{ item }">
                        <div class="px-6 py-4  text-black text-[1rem]">
                            <div v-html="item.content" />
                        </div>
                    </template>
                </UAccordion>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const items = computed(() => [{
    label: t('faq.1'),
    defaultOpen: true,
    content: `
    <b>${t('faq.2')}</b>
    <ul class="list-disc pl-6 pt-2 flex flex-col gap-2">
      <li>${t('faq.3')}</li>
      <li>${t('faq.4')}</li>
      <li>${t('faq.5')}</li>
      <li>${t('faq.6')}</li>
      <li>${t('faq.7')}</li>
    </ul>
  `
}, {
    label: t('faq.8'),
    content: t('faq.9')
}, {
    label: t('faq.10'),
    content: t('faq.11')
}, {
    label: t('faq.12'),
    content: t('faq.13')
}, {
    label: t('faq.14'),
    content: t('faq.15')
}, {
    label: t('faq.16'),
    content: `
    <b>${t('faq.17')}</b>
    <ul class="list-decimal pl-6 pt-2 flex flex-col gap-2">
      <li>${t('faq.18')}</li>
      <li>${t('faq.19')}</li>
      <li>${t('faq.20')}</li>
      <li>${t('faq.21')}</li>
      <li>${t('faq.22')}</li>
      <li>${t('faq.23')}</li>
      <li>${t('faq.24')}</li>
      <li>${t('faq.25')}</li>
    </ul>
    <p class="pt-5">${t('faq.26')}</p>
  `
}, {
    label: t('faq.27'),
    content: t('faq.28')
}])

</script>

<style scoped>
.faq {
    padding: 60px 0;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    p {
        margin-bottom: 1rem;
        text-align: center;
        width: 85%;
    }
}
</style>