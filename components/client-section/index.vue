<template>
    <div id="clients" class="client">
        <div class="container">
            <h2 data-aos="fade-up">{{ t('about.clients.our') }}</h2>
            <p data-aos="fade-up">{{ t('about.clients.1') }}</p>
            <b data-aos="fade-up">{{ t('about.clients.2') }}</b>
            <li data-aos="fade-up">{{ t('about.clients.3') }}</li>
            <li data-aos="fade-up">{{ t('about.clients.4') }}</li>
            <li data-aos="fade-up">{{ t('about.clients.5') }}</li>
            <p data-aos="fade-up">{{ t('about.clients.6') }}</p>
            <b data-aos="fade-up">{{ t('about.clients.7') }}</b>
            <div data-aos="fade-up"
                class="flex flex-wrap justify-center md:flex-nowrap md:jusify-start items-center mb-4 md:mb-0 md:gap-4  xl:w-[60%] md:h-[80px]">
                <li>{{ t('about.clients.8') }}</li>
                <img width="50" height="60.4" src="../../assets/images/logo.d54301c.png" alt="" class="w-[50px]">
            </div>
            <div data-aos="fade-up"
                class="flex flex-wrap justify-center md:flex-nowrap md:jusify-start items-center mb-4 md:mb-0 md:gap-4  xl:w-[61%] md:h-[80px]">
                <li>{{ t('about.clients.9') }}</li>
                <img width="80" height="40" src="../../assets/images/ucg123.png" alt="" class="w-[80px]">
            </div>
            <div data-aos="fade-up"
                class="flex flex-wrap justify-center md:flex-nowrap md:jusify-start items-center mb-4 md:mb-0 md:gap-4  xl:w-[60%] md:h-[80px]">
                <li>{{ t('about.clients.10') }}</li>
                <img width="60" height="60" src="../../assets/images/b-logo.png" alt="" class="w-[60px]">
            </div>
            <div data-aos="fade-up"
                class="flex flex-wrap justify-center md:flex-nowrap md:jusify-start items-center mb-4 md:mb-0 md:gap-4  xl:w-[62%] md:h-[80px]">
                <li>{{ t('about.clients.11') }}</li>
                <img width="100" height="100" src="../../assets/images/sport.png" alt="" class="w-[100px]">
            </div>
            <div data-aos="fade-up"
                class="flex flex-wrap justify-center md:flex-nowrap md:jusify-start items-center mb-4 md:mb-0 md:gap-4  xl:w-[60%] md:h-[80px]">
                <li>{{ t('about.clients.13') }}</li>
                <img width="50" height="60.4" src="../../assets/images/logo.d54301c.png" alt="" class="w-[50px]">
            </div>
            <li data-aos="fade-up">{{ t('about.clients.12') }}</li>

            <!-- <UCarousel data-aos="fade-up" ref="carouselRef" v-slot="{ item }" :items="items" @mouseenter="isHovered = true"
                @mouseleave="isHovered = false" :ui="{ item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4' }"
                class="rounded-lg overflow-hidden">
                <img :src="item" style="border-radius: 6px;" draggable="false">
            </UCarousel> -->

        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const items = [
    'https://picsum.photos/600/300?random=1',
    'https://picsum.photos/600/300?random=2',
    'https://picsum.photos/600/300?random=3',
    'https://picsum.photos/600/300?random=4',
    'https://picsum.photos/600/300?random=5',
    'https://picsum.photos/600/300?random=6'
]

const carouselRef = ref()
const intervalId = ref()
const isHovered = ref(false)

const startAutoPlay = () => {
    if (intervalId.value) clearInterval(intervalId.value)

    intervalId.value = setInterval(() => {
        if (!carouselRef.value || isHovered.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            carouselRef.value.select(0)
        } else {
            carouselRef.value.next()
        }
    }, 4000)
}

const stopAutoPlay = () => {
    clearInterval(intervalId.value)
}

onMounted(() => {
    startAutoPlay()
})

onBeforeUnmount(() => {
    stopAutoPlay()
})
</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.client {
    padding: 60px 0;

    .container {
        display: flex;
        flex-direction: column;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    p,
    li,
    b {
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
        text-indent: 2rem;
        width: 100%;
        // @include breakpoint(lg) {
        //     width: 95%;
        // }
    }

    b {
        text-align: center;
        font-size: 1.2rem;
    }
}
</style>