<template>
    <footer class="footer">
        <div class="container top">
            <NuxtLink to="/">
                <img src="../../assets/images/Horizont_Consult_Cropped.png" alt="logo" class="h-[90px]">
            </NuxtLink>
            <div class="contacts">
                <span class="address">123 Main St, City, State, Zip</span>
                <span class="phone">Phone: (123) 456-7890</span>
                <span class="email">Email: info@example.com</span>
            </div>
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
            <div class="social-media">
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
        </div>
        <div class="bottom">
            <span class="title">© 2025 Horizont. All Rights Reserved.</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { IconFacebook, IconInstagram, IconLinkedin } from '~/assets/icons';


</script>

<style scoped>
.footer {
    background-color: #f2f2f2;

    .top {
        padding: 30px 0;
        display: flex;
        justify-content: space-between;

        .contacts {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .links {
            display: flex;
            flex-direction: column;
            gap: 10px;
            /* justify-content: space-between; */

            a {
                color: var(--text-color);
                margin-left: 20px;
                transition: color 0.3s ease;
            }
        }

        .social-media {
            display: flex;
            flex-direction: column;
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