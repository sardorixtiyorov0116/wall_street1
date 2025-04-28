<template>
    <div id="clients" class="client">
        <div class="container">
            <h2 data-aos="fade-up">Наши клиенты</h2>
            <p data-aos="fade-up">Мы гордимся нашим сотрудничеством с ведущими корпорациями и государственными учреждениями. Наши клиенты
                высоко ценят наш индивидуальный и профессиональный подход, исключительное качество обслуживания,
                разработке экологических стратегий и цифровизации управления отходами, эффективные возможности решения
                проблем. Организации из различных секторов экономики доверяют нам, признавая нашу приверженность
                совершенству и надежности.</p>
            <b data-aos="fade-up">Нашими постоянными клиентами являются:</b>
            <li data-aos="fade-up">Крупные промышленные предприятия, которым требуется экологический консалтинг для оценки оптимизации
                воздействии на окружающую среду;</li>
            <li data-aos="fade-up">Компании, которым требуется комплексное финансовое планирование, оценка рисков и технико-экономическое
                обоснование проекта;</li>
            <li data-aos="fade-up">Государственные и частные учреждения, которые пользуются нашими услугами по финансовому планированию,
                экономическому анализу и разработке проектов государственно-частного партнерства (ГЧП).</li>
            <p data-aos="fade-up">Мы глубоко ценим наши долгосрочные отношения с клиентами и гордимся их доверием. Примечательно, что более
                70% наших клиентов поддерживают с нами постоянные партнерские отношения, а 80% новых клиентов обращаются
                к нам по рекомендациям. Это отражает нашу прочную репутацию и высокий уровень удовлетворенности тех,
                кому мы служим.</p>

            <UCarousel data-aos="fade-up" ref="carouselRef" v-slot="{ item }" :items="items" @mouseenter="isHovered = true"
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

<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;
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
    b{
        text-align: center;
        font-size: 1.2rem;
    }
}
</style>