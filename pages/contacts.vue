<template>
    <div>
        <HeroSection :title="t('contacts.text')" :description="t('expertsInFinancialConsulting')" />
        <Contacts />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>