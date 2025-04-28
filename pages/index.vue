<template>
    <div>
        <HeroSection :title="'Horizont Consult'"
            :description="'Ваш путь к успешному инвестированию и финансовой стабильности'" />
        <!-- <div class="container">
            <h1>Excel dan ma'lumot yuklash</h1>
            <ExcelUploader />
        </div> -->
        <div class="container !py-20">
            <!-- <p class="text-[2rem] text-center pb-[1.5rem]">HORIZONT CONSULT</p> -->
            <span data-aos="fade-left" class="text-[1.5rem]">
                Добро пожаловать в Horizont Consult – вашу надежную опору в мире финансового и экологического консалтинга.
            </span>
            <hr class="my-4" />
            <span data-aos="fade-right" class="text-[1.5rem]">
                Horizont Consult — ведущая консалтинговая фирма, которая помогает компаниям и государственным организациям в успешной реализации инвестиционных проектов.
            </span>
            <hr class="my-4" />
            <span data-aos="fade-up" class="text-[1.5rem]">
                Благодаря команде опытных профессионалов мы предлагаем комплексные решения в области финансового консалтинга. Наша цель – способствовать созданию благоприятных условий для роста, финансовой устойчивости и долгосрочного развития.
            </span>
            <hr class="my-4" />
            <span data-aos="fade-up" class="text-[1.5rem]">
                Станьте нашим партнером и выведите свой бизнес на новый уровень!
            </span>
            <hr class="mt-4 mb-12" />
            <p data-aos="fade-up" class="text-[1.5rem]  font-semibold text-center">
                Закажите звонок, чтобы узнать, как наш опыт может способствовать росту и успеху вашего бизнеса!
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ExcelUploader from '~/components/items/ExcelUploader.vue';


</script>

<style scoped></style>