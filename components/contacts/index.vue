<template>
    <div id="contacts" class="contacts">
        <div class="container">
            <h2>Контакты</h2>
            <div class="row">
                <div class="left-side" data-aos="fade-right">
                    <h5>Свяжитесь с нами</h5>
                    <p>Электронная почта: info@horizontconsult.uz</p>
                    <p>Телефон: +998 952-000-952</p>
                    <p>Адрес офиса: ул. Зульфия ханум, 22, Ташкент, Узбекистан</p>
                    <!-- <p>Часы работы:</p>
                    <p>Понедельник – пятница: 9:00 – 18:00</p>
                    <p>Суббота и воскресенье: Выходной</p> -->
                    <div class="links">
                        <a href="#" class="link">
                            <IconFacebook />Facebook
                        </a>
                        <a href="#" class="link">
                            <IconInstagram /> Instagram
                        </a>
                        <a href="#" class="link">
                            <IconLinkedin /> LinkedIn
                        </a>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127476.23022063928!2d69.25036162665043!3d41.37151911911984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bdd37c0c1f1%3A0x3a5375907dcaa9d2!2sWall%20Street%20Consult!5e0!3m2!1sru!2sus!4v1740148254377!5m2!1sru!2sus"
                        width="100%" height="260" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div class="right-side" data-aos="fade-left">
                    <h5>Обратная связь</h5>
                    <form @submit.prevent="sendEmail">
                        <div class="item">
                            <label for="contactName" class="form-label">Ваше имя</label>
                            <input v-model="form.name" type="text" class="form-control" id="contactName"
                                name="contactName" required placeholder="Введите ваше имя">
                        </div>
                        <div class="item">
                            <label for="contactEmail" class="form-label">Email</label>
                            <input v-model="form.email" type="text" class="form-control" id="contactEmail"
                                name="contactEmail" required placeholder="Введите ваш email">
                        </div>
                        <div class="item">
                            <label for="contactPhone" class="form-label">Телефон</label>
                            <input type="text" class="form-control" id="contactPhone" name="contactPhone" required
                                placeholder="Введите ваш номер телефона">
                        </div>
                        <div class="item">
                            <label for="contactMessage" class="form-label">Сообщение</label>
                            <textarea v-model="form.message" type="text" class="form-control" id="contactMessage"
                                name="contactMessage" required placeholder="Ваше сообщение" />
                        </div>
                        <button type="submit" class="btn">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconFacebook, IconInstagram, IconLinkedin } from '~/assets/icons';
import emailjs from 'emailjs-com'

const form = ref({ name: '', email: '', message: '' })
const sendEmail = () => {
    emailjs
        .send(
            'service_yfu8cu5', // EmailJS'dan olganingiz
            'template_kcfyjy3', // Template ID
            {
                from_name: form.value.name,
                from_email: form.value.email,
                message: form.value.message,
            },
            'XYnX5nhqGDm2rHP4F' // Public Key (EmailJS dan olasiz)
        )
        .then(() => {
            alert('Xabar yuborildi!')
        })
        .catch((error) => {
            console.error('Xatolik:', error)
            alert('Xatolik yuz berdi!')
        })
}

</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.contacts {
    padding: 60px 0;



    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .row {
        display: flex;
        justify-content: space-between;
        gap: 60px;
        flex-direction: column-reverse;



        @include breakpoint(lg) {
            flex-direction: row;
            gap: 20px;
        }

        .right-side,
        .left-side {
            @include breakpoint(lg) {
                width: calc(100% / 2);
            }

            h5 {
                font-size: 1.25rem;
                margin-bottom: .5rem;
            }

            .links {
                display: flex;
                gap: 1rem;
                margin-bottom: 1rem;

                .link {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    transition: all 0.2s ease-in-out;

                    &:hover {
                        color: #0d6efd;
                        transform: scale(1.03);
                    }
                }
            }

            iframe {
                border-radius: .5rem;

                @include breakpoint(lg) {
                    width: 90%;
                }
            }

            form {
                .item {
                    margin-bottom: 1rem;
                    display: flex;
                    flex-direction: column;

                    .form-label {
                        margin-bottom: .5rem;
                    }

                    .form-control {
                        padding: .375rem .75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #212529;
                        background-color: #ffff;
                        border: 1px solid #dee2e6;
                        border-radius: 0.375rem;
                        outline: none;
                    }

                    textarea {
                        min-height: 80px;
                        resize: none;
                    }

                }

                .btn {
                    background-color: var(--primary-color);
                    color: var(--primary-text-color);
                    padding: 6px 12px;
                    transition: all .2s ease-in-out;
                    border-radius: 6px;

                    &:hover {
                        background-color: var(--primary-light-hover);
                    }
                }
            }
        }

    }
}
</style>