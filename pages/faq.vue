<template>
    <div>
        <HeroSection :title="t('faq.text1')" :description="t('expertsInFinancialConsulting')" />
        <FaqSection />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>