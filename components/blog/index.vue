<template>
    <div id="blog" class="blog">
        <div class="container">
            <h2>Блог</h2>
            <div class="row">
                <div class="card" v-for="(blog, index) in blogs" :key="index" data-aos="fade-up">
                    <img :src="blog.image" alt="Blog image">
                    <h3>{{ blog.title }}</h3>
                    <p>{{ blog.description }}</p>
                    <a href="#" class="btn">Читать далее</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const blogs = [
    {
        image: 'https://picsum.photos/400/200?random=1',
        title: "Современные тренды в бухгалтерском учете",
        description: "Краткий обзор новых методик и технологий в бухгалтерском сопровождении."
    },
    {
        image: 'https://picsum.photos/400/200?random=2',
        title: "Инвестиционный консалтинг: как снизить риски",
        description: "Практические советы для сопровождения инвестиционных проектов."
    },
    {
        image: 'https://picsum.photos/400/200?random=3',
        title: "Новости: аналитика и обзоры",
        description: "Анализ текущих трендов в финансовой сфере и бухгалтерском учете."
    },
]
</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.blog {
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

    .row {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;

        @include breakpoint(lg) {
            flex-wrap: nowrap;
            justify-content: space-between;
        }

        .card {
            border: 1px solid #e3e3e3;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            background: #fff;
            display: flex;
            flex-direction: column;

            @include breakpoint(md) {
                align-items: start;
                width: calc(100% / 2 - 20px);
            }


            @include breakpoint(lg) {
                width: calc(100% / 3);
            }

            h3 {
                font-size: 1.25rem;
                margin-bottom: 0.5rem;
            }

            p {
                margin-top: 0;
                margin-bottom: 1rem;
            }

            .btn {
                background-color: #6c757d;
                color: var(--primary-text-color);
                border-radius: 6px;
                padding: .3rem .6rem;
                transition: all 0.2s ease-in-out;
                margin-top: auto;
                text-align: center;
                max-width: 130px;

                &:hover {
                    background: #5c636a;
                    color: #fff;
                }
            }
        }
    }
}
</style>