<template>
    <div id="clients" class="client">
        <div class="container">
            <h2>Наши клиенты</h2>
            <p>Логотипы и отзывы наших клиентов – подтверждение качества предоставляемых услуг.</p>
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" @mouseenter="isHovered = true"
                @mouseleave="isHovered = false" :ui="{ item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4' }"
                class="rounded-lg overflow-hidden">
                <img :src="item" style="border-radius: 6px;" draggable="false">
            </UCarousel>

        </div>
    </div>
</template>

<script setup lang="ts">
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

<style scoped>
.client {
    padding: 60px 0;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    p {
        margin-bottom: 1.5rem;
        text-align: center;
    }
}
</style>