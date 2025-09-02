<template>
    <footer class="footer">
        <div class="container top">
            <div class="left">
                <NuxtLink to="/">
                    <img width="162.81" height="90" src="../../assets/images/HorizonConsult.png" alt="logo"
                        class="h-[90px]">
                </NuxtLink>
                <div class="contacts">
                    <p class="title">{{ t('contacts.text') }} </p>
                    <span class="address">{{ t('contacts.address') }}</span>
                    <span class="phone">{{ t('contacts.phone') }}: <a href="tel:+998952000952">+998
                            952-000-952</a></span>
                    <span class="email">{{ t('contacts.email') }}: <a
                            :href="'mailto:info@horizonconsult.uz'">info@horizonconsult.uz</a></span>
                </div>
            </div>
            <div class="center">
                <p class="title">{{ t('websiteSections') }} </p>
                <div class="center-links">
                    <div class="links">
                        <NuxtLink to="/about">{{ t('about.company') }}</NuxtLink>
                        <NuxtLink to="/services">{{ t('services.text') }}</NuxtLink>
                        <!-- <NuxtLink to="/portfolio">Portfolio</NuxtLink> -->
                        <div class="h-[14px]" />
                    </div>
                    <div class="links">
                        <NuxtLink to="/contacts">{{ t('contacts.text') }}</NuxtLink>
                        <!-- <NuxtLink to="/blog">Blog</NuxtLink> -->
                        <NuxtLink to="/faq">{{ t('faq.text1') }}</NuxtLink>
                    </div>
                </div>
            </div>
            <!-- <div class="social-media">
                <p class="title">Socials</p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <IconInstagram /> Instagram
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <IconFacebook /> Facebook
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <IconLinkedin /> Linkedin
                </a>
            </div> -->
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49607.74800197167!2d69.2339923876877!3d41.318014120930755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b690e3ff7a1%3A0x5c47c0d7fa8e321b!2z0YPQuy4g0JfRg9C70YzRhNC40Y8g0YXQsNC90YPQvCAyMiwg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1745899848591!5m2!1sru!2s"
                    width="100%" height="100%" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="bottom">
            <span class="title">© 2025 Horizon. {{ t('allRightReserved') }}</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { IconFacebook, IconInstagram, IconLinkedin } from '~/assets/icons';
const { t } = useI18n()
</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.footer {
    background-color: #f2f2f2;

    .top {
        padding: 30px 16px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;

        @include breakpoint(md) {
            padding: 30px 0;
        }

        .title {
            color: var(--text-color);
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 16px;
        }

        .left {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;

            @include breakpoint(md) {
                display: flex;
                gap: 50px;
                justify-content: flex-start;
                width: auto;
            }
        }

        .center {
            display: none;
            flex-direction: column;
            align-items: center;
            // justify-content: center;

            .title {
                margin-top: 6px;
                margin-bottom: 20px;
            }

            @include breakpoint(md) {
                display: flex;
            }

            .center-links {
                display: flex;
                gap: 80px;
            }
        }

        .contacts {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .links {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .social-media {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;

            a {
                display: flex;
                align-items: center;
                gap: 5px;
            }
        }
    }

    .bottom {
        background-color: var(--primary-color);
        padding: 20px 0;
        text-align: center;

        .title {
            color: #fff;
            font-size: 12px;
            line-height: 1.5;
            letter-spacing: 2.5px;
        }
    }
}
</style>