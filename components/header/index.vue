<template>
    <div class="header" ref="headerRef">
        <div class="container navbar">
            <NuxtLink to="/" class="logo">
                <img width="144.35" height="80" src="../../assets/images/HorizonConsultwhite.png" alt="">
            </NuxtLink>
            <div class="navbar-nav">
                <UDropdown v-if="route.path === '/about'" :items="items1" mode="hover"
                    :popper="{ placement: 'bottom-start' }">
                    <p href="#" class="navbar-nav-link">{{ t('about.company') }}
                        <IconDown />
                    </p>
                </UDropdown>
                <NuxtLink v-else to="/about" class="navbar-nav-link">
                    {{ t('about.company') }}
                    <IconDown />
                </NuxtLink>
                <UDropdown v-if="route.path === '/services'" :items="items2" mode="hover"
                    :popper="{ placement: 'bottom-start' }">
                    <p href="#" class="navbar-nav-link"> {{ t('services.text') }}
                        <IconDown />
                    </p>
                </UDropdown>
                <NuxtLink v-else to="/services" class="navbar-nav-link">
                    {{ t('services.text') }}
                    <IconDown />
                </NuxtLink>
                <!-- <NuxtLink to="/portfolio" class="navbar-nav-link">
                    Портфолио
                </NuxtLink> -->
                <NuxtLink to="/contacts" class="navbar-nav-link">
                    {{ t('contacts.text') }}
                </NuxtLink>
                <!-- <NuxtLink to="/blog" class="navbar-nav-link">
                    Блог
                </NuxtLink> -->
                <NuxtLink to="/faq" class="navbar-nav-link">
                    {{ t('faq.text1') }}
                </NuxtLink>
                <NuxtLink to="/forbusiness" class="navbar-nav-link">
                    {{ t('forBusiness.text') }}
                </NuxtLink>
                <div id="language-bar" class="select" @click="toggleDropdown">
                    <div class="selected">{{ languageName }}
                        <IconDown />
                    </div>
                    <div v-if="isVisible" class="options">
                        <div class="option" @click.stop="selectLanguage('ru')">Русский</div>
                        <div class="option" @click.stop="selectLanguage('en')">English</div>
                        <div class="option" @click.stop="selectLanguage('uz')">Ўзбекча</div>
                    </div>
                </div>

            </div>

            <div class="navbar-menu">
                <div id="language-bar" class="select" @click="toggleDropdown">
                    <div class="selected">{{ languageName }}
                        <IconDown />
                    </div>
                    <div v-if="isVisible" class="options">
                        <div class="option" @click.stop="selectLanguage('ru')">Русский</div>
                        <div class="option" @click.stop="selectLanguage('en')">English</div>
                        <div class="option" @click.stop="selectLanguage('uz')">Ўзбекча</div>
                    </div>
                </div>
                <button class="navbar-menu-btn" @click="isOpen = !isOpen">
                    <IconMenu />
                </button>
            </div>
        </div>
        <transition name="slide-down">
            <div v-if="isOpen" class="container bottom-header">
                <div class="accardions">
                    <NuxtLink to="/about" class="bottom-header-link">
                        {{ t('about.company') }}
                    </NuxtLink>
                    <NuxtLink to="/services" class="bottom-header-link">
                        {{ t('services.text') }}
                    </NuxtLink>
                    <!-- <NuxtLink to="/portfolio" class="bottom-header-link">
                        Портфолио
                    </NuxtLink> -->
                    <NuxtLink to="/contacts" class="bottom-header-link">
                        {{ t('contacts.text') }}
                    </NuxtLink>
                    <!-- <NuxtLink to="/blog" class="bottom-header-link">
                        Блог
                    </NuxtLink> -->
                    <NuxtLink to="/faq" class="bottom-header-link">
                        {{ t('faq.text1') }}
                    </NuxtLink>
                    <NuxtLink to="/forbusiness" class="bottom-header-link">
                        {{ t('forBusiness.text') }}
                    </NuxtLink>
                </div>
            </div>
        </transition>
    </div>

</template>

<script setup lang="ts">
import { IconDown, IconMenu } from '~/assets/icons';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()

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

const cookies = useCookie("lang", { watch: true })
const currentLang = ref(cookies.value ?? "ru")
locale.value = currentLang.value
const isVisible = ref(false);

const toggleDropdown = () => {
    isVisible.value = !isVisible.value;
};

const setLang = (lang: string) => {
    currentLang.value = lang
    cookies.value = lang // Store selected language in cookies
    locale.value = lang   // Update the current language in i18n
    isVisible.value = false // Close the dropdown after selection
}

const selectLanguage = (lang: string) => {
    setLang(lang)
};

const languageName = computed(() => {
    switch (currentLang.value) {
        case 'ru':
            return 'Русский'
        case 'en':
            return 'English'
        case 'uz':
            return 'Ўзбекча'
        default:
            return 'Select Language'
    }
})

if (process.client) {
    window.addEventListener("click", (e: Event) => {
        const target = e.target as HTMLElement
        if (!target.closest("#language-bar")) {
            isVisible.value = false
        }
    })
}


watch(() => route.path, () => {
    isOpen.value = false;
});

const items1 = computed(() => [
    [{
        label: t('about.history.company'),
        click: () => {
            document.querySelector('#history')?.scrollIntoView({ behavior: 'smooth' });
        }
    },
    // {
    //     label: t('about.team.our'),
    //     click: () => {
    //         document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });
    //     }
    // },
    {
        label: t('about.clients.our'),
        click: () => {
            document.querySelector('#clients')?.scrollIntoView({ behavior: 'smooth' });
        }
    }]
])
const items2 = computed(() => [
    [{
        label: t('services.1'),
        click: () => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: t('services.7'),
        click: () => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: t('services.17'),
        click: () => {
            document.querySelector('#services1')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: t('services.25'),
        click: () => {
            document.querySelector('#services2')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, {
        label: t('services.39'),
        click: () => {
            document.querySelector('#services3')?.scrollIntoView({ behavior: 'smooth' });
        }
    },]
])

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

.select {
    position: relative;
    width: 85px;
    user-select: none;
    cursor: pointer;
    font-family: sans-serif;
    margin-left: 10px;
    margin-top: 3px;
}

.selected {
    // text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    z-index: 10;
}

.option {
    padding: 3px 10px;
    transition: all 0.3s;
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 600;
}

.option:hover {
    background-color: var(--primary-color-hover);
    color: var(--primary-text-color);
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
            width: 90.21px;

            @include breakpoint(md) {
                height: 80px;
                width: 144.35px;
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
            gap: 10px;

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
