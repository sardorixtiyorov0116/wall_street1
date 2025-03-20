<template>
    <footer class="footer">
        <div class="container top">
            <div class="left">
                <NuxtLink to="/">
                    <img src="../../assets/images/Horizont_Consult_Cropped.png" alt="logo" class="h-[90px]">
                </NuxtLink>
                <div class="contacts">
                    <p class="title">Contacts </p>
                    <span class="address">123 Main St, City, State, Zip</span>
                    <span class="phone">Phone: (123) 456-7890</span>
                    <span class="email">Email: info@example.com</span>
                </div>
            </div>
            <div class="center">
                <p class="title">Products </p>
                <div class="center-links">
                    <div class="links">
                        <NuxtLink to="/about">About</NuxtLink>
                        <NuxtLink to="/services">Services</NuxtLink>
                        <NuxtLink to="/portfolio">Portfolio</NuxtLink>
                    </div>
                    <div class="links">
                        <NuxtLink to="/contacts">Contact</NuxtLink>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                        <NuxtLink to="/faq">FAQ</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="social-media">
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
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127476.23022063928!2d69.25036162665043!3d41.37151911911984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdd37c0c1f1%3A0x3a5375907dcaa9d2!2sWall%20Street%20Consult!5e0!3m2!1sru!2sus!4v1740148254377!5m2!1sru!2sus"
                    width="100%" height="100%" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="bottom">
            <span class="title">© 2025 Horizont. All Rights Reserved.</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { IconFacebook, IconInstagram, IconLinkedin } from '~/assets/icons';


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
            justify-content: center;

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
            gap: 14px;
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