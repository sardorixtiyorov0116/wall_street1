<template>
    <div>
        <HeroSection :title="'Horizont Consult'" :description="t('slogan')" />
        <!-- <div class="container">
            <h1>Excel dan ma'lumot yuklash</h1>
            <ExcelUploader />
        </div> -->
        <div class="container !py-20">
            <!-- <p class="text-[2rem] text-center pb-[1.5rem]">HORIZONT CONSULT</p> -->
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
    </div>
</template>

<script setup lang="ts">
import ExcelUploader from '~/components/items/ExcelUploader.vue';

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

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