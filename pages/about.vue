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
const { t } = useI18n()
</script>

<style scoped></style>