<template>
    <div class="hero">
        <div class="container">
            <h1 v-show="false">Horizont Consult – Your Partner in Business Consulting</h1>
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <a href="/contacts#connect" class="btn">{{ t('requestCall') }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
defineProps<{ title: string, description: string }>()
const { t } = useI18n()
</script>

<style scoped lang="scss">
.hero {
    padding: 150px 0;
    background: url("../../assets/images/globe.png") no-repeat;
    background-size: cover;
    color: #fff;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }

    p {
        font-size: 1.25rem;
        margin-bottom: 30px;
        text-align: center;
    }

    .btn {
        background-color: var(--primary-color);
        color: var(--primary-text-color);
        padding: 6px 12px;
        transition: all .2s ease-in-out;
        border-radius: 6px;

        &:hover {
            background-color: var(--primary-light-hover);
        }
    }
}
</style>