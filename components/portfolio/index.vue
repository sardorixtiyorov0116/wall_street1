<template>
    <div id="portfolio" class="portfolio">
        <div class="container">
            <h2>Портфолио</h2>
            <p>Успешно реализованные кейсы и отзывы клиентов.</p>
            <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom' }">
                <span class="dropdown">
                    Выберите раздел
                    <IconDown />
                </span>
            </UDropdown>
            <div class="row">
                <div class="card" data-aos="fade-up">
                    <h3>Успешно реализованные кейсы</h3>
                    <p>Кейс по реализации проекта ГЧП с повышением эффективности и снижением затрат.
                    </p>
                    <a href="#" class="btn">Подробнее</a>
                </div>
                <div class="card" data-aos="fade-up">
                    <h3>Успешно реализованные кейсы</h3>
                    <p>Кейс по реализации проекта ГЧП с повышением эффективности и снижением затрат.
                    </p>
                    <a href="#" class="btn">Подробнее</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconDown } from '~/assets/icons';

const items = [
    [{
        label: 'Успешно реализованные кейсы',
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'Отзывы клиентов',
    }]
]

</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.portfolio {
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
        margin-bottom: 1rem;
        text-align: center;
        width: 85%;
    }

    .dropdown {
        padding: .4rem .8rem;
        border: 1px solid var(--primary-light-hover);
        color: var(--primary-light-hover);
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 6px;
        transition: all 0.2s ease-in-out;
        margin-bottom: 1.5rem;

        svg {
            margin-top: 2px;
        }

        &:hover {
            background-color: var(--primary-light-hover);
            color: var(--primary-text-color);

        }
    }

    .row {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        @include breakpoint(lg) {
            display: flex;
            flex-wrap: nowrap;
        }

        .card {
            border: 1px solid #e3e3e3;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            background: #fff;
            width: 100%;

            h3 {
                font-size: 1.75rem;
            }

            p {
                margin-top: 0;
                margin-bottom: 1rem;
                text-align: start;
            }

            .btn {
                color: var(--primary-light-hover);
                border-radius: 6px;
                padding: .4rem .6rem;
                border: 1px solid var(--primary-light-hover);
                transition: all 0.2s ease-in-out;
                font-size: 14px;

                &:hover {
                    background: var(--primary-light-hover);
                    color: #fff;
                }
            }
        }
    }
}
</style>