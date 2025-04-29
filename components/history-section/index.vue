<template>
    <div id="history" class="history">
        <div class="container">
            <h2>{{t('about.history.company')}}</h2>
            <p data-aos="fade-up">{{ t('about.history.1') }}</p>
            <p data-aos="fade-up">{{ t('about.history.2') }}</p>
            <p data-aos="fade-up">{{ t('about.history.3') }}</p>
            <p data-aos="fade-up">{{ t('about.history.4') }}</p>
            <p data-aos="fade-up">{{ t('about.history.5') }}</p>
            <p data-aos="fade-up">{{ t('about.history.6') }}</p>
            <p data-aos="fade-up">{{ t('about.history.7') }}</p>
            <b data-aos="fade-up">{{ t('about.history.2023') }}</b>
            <p data-aos="fade-up">{{ t('about.history.8') }}</p>
            <p data-aos="fade-up">{{ t('about.history.9') }}</p>
            <b data-aos="fade-up">{{ t('about.history.2025') }}</b>
            <p data-aos="fade-up">{{ t('about.history.10') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>


<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.history {
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
        // text-align: center;
        font-size: 1.1rem;
        text-indent: 2rem; 

        // @include breakpoint(lg) {
        //     width: 90%;
        // }
    }
    b{
        font-size: 1.2rem;
        margin-bottom: 1rem;
        text-align: center;
    }
}
</style>