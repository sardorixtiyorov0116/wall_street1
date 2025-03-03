<template>
    <div class="header">
        <div class="container navbar">
            <div class="logo">
                Horizon Consult
            </div>
            <div class="navbar-nav">
                <UDropdown :items="items1" mode="hover" :popper="{ placement: 'bottom-start' }">
                    <p href="#" class="navbar-nav-link"> О компании
                        <IconDown />
                    </p>
                </UDropdown>
                <UDropdown :items="items2" mode="hover" :popper="{ placement: 'bottom-start' }">
                    <p href="#" class="navbar-nav-link">Услуги
                        <IconDown />
                    </p>
                </UDropdown>
                <UDropdown :items="items3" mode="hover" :popper="{ placement: 'bottom-start' }">
                    <p href="#" class="navbar-nav-link">Портфолио
                        <IconDown />
                    </p>
                </UDropdown>
                <a href="#contacts" class="navbar-nav-link">Контакты</a>
                <a href="#blog" class="navbar-nav-link">Блог</a>
                <a href="#faq" class="navbar-nav-link">FAQ</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconDown } from '~/assets/icons';
const items1 = [
    [{
        label: 'История компании',
        click: () => {
            document.querySelector('#history')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: 'Наша команда',
        click: () => {
            document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: 'Наши клиенты',
        click: () => {
            document.querySelector('#clients')?.scrollIntoView({ behavior: 'smooth' });
        }
    }]
]
const items2 = [
    [{
        label: 'Разработка бизнес-планов и ТЭО',
        click: () => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: 'Отчеты о воздействии (ЗВОС)',
        click: () => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: 'Инвестиционный консалтинг',
        click: () => {
            document.querySelector('#services1')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: 'Разработка ГЧП проектов',
        click: () => {
            document.querySelector('#services2')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: 'Бухгалтерский аутсорсинг',
        click: () => {
            document.querySelector('#services3')?.scrollIntoView({ behavior: 'smooth' });
        }
    },]
]

const items3 = [
    [{
        label: 'Успешно реализованные кейсы',
        click: () => {
            document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: 'Отзывы клиентов',
        click: () => {
            document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
        }
    },]
]
</script>

<style scoped lang="scss">
@import "~/assets/scss/_mixins.scss";

.header {
    padding: 20px 16px;
    background-color: var(--primary-color);
    color: var(--primary-text-color);

    @include breakpoint(sm) {
        padding: 20px 0;
    }

    .logo {
        font-size: 26px;
        font-weight: 600;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;



        &-nav {
            display: none;
            justify-content: space-between;
            align-items: center;

            @include breakpoint(lg) {
                display: flex;
            }

            &-link {
                display: flex;
                align-items: center;
                gap: 5px;
                padding: 0.5rem;
                font-size: 1rem;
                color: var(--primary-text-color);

                svg {
                    margin-top: 3px;
                }
            }
        }
    }
}
</style>
