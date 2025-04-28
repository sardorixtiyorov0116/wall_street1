<template>
    <div class="header" ref="headerRef">
        <div class="container navbar">
            <NuxtLink to="/" class="logo">
                <img src="../../assets/images/Horizont_Consult_resized_logo.png" alt="">
            </NuxtLink>
            <div class="navbar-nav">
                <UDropdown v-if="route.path === '/about'" :items="items1" mode="hover"
                    :popper="{ placement: 'bottom-start' }">
                    <p href="#" class="navbar-nav-link"> О компании
                        <IconDown />
                    </p>
                </UDropdown>
                <NuxtLink v-else to="/about" class="navbar-nav-link">
                    О компании
                    <IconDown />
                </NuxtLink>
                <UDropdown v-if="route.path === '/services'" :items="items2" mode="hover"
                    :popper="{ placement: 'bottom-start' }">
                    <p href="#" class="navbar-nav-link">Услуги
                        <IconDown />
                    </p>
                </UDropdown>
                <NuxtLink v-else to="/services" class="navbar-nav-link">
                    Услуги
                    <IconDown />
                </NuxtLink>
                <NuxtLink to="/portfolio" class="navbar-nav-link">
                    Портфолио
                </NuxtLink>
                <NuxtLink to="/contacts" class="navbar-nav-link">
                    Контакты
                </NuxtLink>
                <NuxtLink to="/blog" class="navbar-nav-link">
                    Блог
                </NuxtLink>
                <NuxtLink to="/faq" class="navbar-nav-link">
                    FAQ
                </NuxtLink>
                <NuxtLink to="/forbusiness" class="navbar-nav-link">
                    Для бизнеса
                </NuxtLink>
            </div>
            <div class="navbar-menu">
                <button class="navbar-menu-btn" @click="isOpen = !isOpen">
                    <IconMenu />
                </button>
            </div>
        </div>
        <transition name="slide-down">
            <div v-if="isOpen" class="container bottom-header">
                <div class="accardions">
                    <NuxtLink to="/about" class="bottom-header-link">
                        О компании
                    </NuxtLink>
                    <NuxtLink to="/services" class="bottom-header-link">
                        Услуги
                    </NuxtLink>
                    <NuxtLink to="/portfolio" class="bottom-header-link">
                        Портфолио
                    </NuxtLink>
                    <NuxtLink to="/contacts" class="bottom-header-link">
                        Контакты
                    </NuxtLink>
                    <NuxtLink to="/blog" class="bottom-header-link">
                        Блог
                    </NuxtLink>
                    <NuxtLink to="/faq" class="bottom-header-link">
                        FAQ
                    </NuxtLink>
                    <NuxtLink to="/forbusiness" class="bottom-header-link">
                        Для бизнеса
                    </NuxtLink>
                </div>
            </div>
        </transition>
    </div>

</template>

<script setup lang="ts">
import { IconDown, IconMenu } from '~/assets/icons';
import { useRoute } from 'vue-router';

const route = useRoute();
const isOpen = ref(false);
const headerRef = ref(null);
// const accordions = ref([
//     {
//         label: "О компании",
//         children: [
//             {
//                 label: "История компании",
//                 click: () => {
//                     document.querySelector("#history")?.scrollIntoView({ behavior: "smooth" });
//                 }
//             },
//             {
//                 label: "Наша команда",
//                 click: () => {
//                     document.querySelector("#team")?.scrollIntoView({ behavior: "smooth" });
//                 }
//             },
//             {
//                 label: "Наши клиенты",
//                 click: () => {
//                     document.querySelector("#clients")?.scrollIntoView({ behavior: "smooth" });
//                 }
//             }
//         ]
//     }, {
//         label: "Услуги",
//         children: [{
//             label: 'Разработка бизнес-планов и ТЭО',
//             click: () => {
//                 document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, {
//             label: 'Отчеты о воздействии (ЗВОС)',
//             click: () => {
//                 document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, {
//             label: 'Инвестиционный консалтинг',
//             click: () => {
//                 document.querySelector('#services1')?.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, {
//             label: 'Разработка ГЧП проектов',
//             click: () => {
//                 document.querySelector('#services2')?.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, {
//             label: 'Бухгалтерский аутсорсинг',
//             click: () => {
//                 document.querySelector('#services3')?.scrollIntoView({ behavior: 'smooth' });
//             }
//         },]
//     },
//     {
//         label: "Портфолио",
//         children: [{
//             label: 'Успешно реализованные кейсы',
//             click: () => {
//                 document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, {
//             label: 'Отзывы клиентов',
//             click: () => {
//                 document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
//             }
//         }]
//     }

// ]);


const handleClickOutside = (event: Event) => {
    // @ts-ignore
    if (headerRef.value && !headerRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};


watch(() => route.path, () => {
    isOpen.value = false;
});


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

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.slide-down-enter-active,
.slide-down-leave-active {
    transition: max-height 0.3s ease-out, opacity 0.3s ease-in-out;
    overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
    max-height: 0;
    opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
    max-height: 300px;
    opacity: 1;
}



.header {
    display: flex;
    flex-direction: column;
    padding: 14px 16px 14px 0;
    background-color: var(--primary-color);
    color: var(--primary-text-color);


    @include breakpoint(sm) {
        padding: 14px 0;
    }

    .bottom-header {
        .accardions {
            padding: 20px 0 0 0;
        }

        &-link {
            display: block;
            color: rgb(229, 231, 235);
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.25rem;
            padding: 0.75rem;
        }
    }

    .logo {
        font-size: 26px;
        font-weight: 600;

        img {
            height: 50px;

            @include breakpoint(md) {
                height: 80px;
            }
        }
    }

    .navbar {
        display: flex;
        justify-content: space-between;

        &-menu {
            display: flex;
            align-items: center;
            justify-content: center;

            @include breakpoint(lg) {
                display: none;
            }

            &-btn {
                border: 1px solid #ffffff23;
                padding: 0.25rem 0.75rem;
                cursor: pointer;
                border-radius: 6px;
                transition: all 0.2s ease-in-out;

                &:hover {
                    scale: 1.08;
                    background-color: #ffffff11;
                }
            }
        }



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
<style>
.z-20,
.w-48 {
    padding-bottom: 0 !important;
    margin-top: -12px !important;
    width: auto;
}
</style>
