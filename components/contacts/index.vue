<template>
    <div id="contacts" class="contacts">
        <div class="container">
            <h2 id="connect">{{ t('contacts.text') }}</h2>
            <div class="row">
                <div class="left-side" data-aos="fade-right">
                    <h5>{{ t('contacts.contactUs') }}</h5>
                    <p>{{ t('contacts.email') }}: <a :href="'mailto:info@horizont.uz'">info@horizont.uz</a></p>
                    <p>{{ t('contacts.phone') }}:<a href="tel:+998952000952">+998 952-000-952</a> </p>
                    <p>{{ t('contacts.officeAddress') }}: {{ t('contacts.address') }}</p>
                    <!-- <p>Часы работы:</p>
                    <p>Понедельник – пятница: 9:00 – 18:00</p>
                    <p>Суббота и воскресенье: Выходной</p> -->
                    <div class="links mt-5">
                        <!-- <a href="#" class="link">
                            <IconFacebook />Facebook
                        </a>
                        <a href="#" class="link">
                            <IconInstagram /> Instagram
                        </a>
                        <a href="#" class="link">
                            <IconLinkedin /> LinkedIn
                        </a> -->
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49607.74800197167!2d69.2339923876877!3d41.318014120930755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b690e3ff7a1%3A0x5c47c0d7fa8e321b!2z0YPQuy4g0JfRg9C70YzRhNC40Y8g0YXQsNC90YPQvCAyMiwg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1745899848591!5m2!1sru!2s"
                        width="100%" height="280" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="right-side" data-aos="fade-left">
                    <h5>{{ t('contacts.feedback') }}</h5>
                    <form @submit.prevent>
                        <div class="item">
                            <label for="contactName" class="form-label">{{ t('contacts.yourName') }}</label>
                            <input v-model="form.name" type="text" class="form-control" id="contactName"
                                name="contactName" required :placeholder="t('contacts.enterYourName')">
                        </div>
                        <div class="item">
                            <label for="contactEmail" class="form-label">{{ t('contacts.email') }}</label>
                            <input v-model="form.email" type="text" class="form-control" id="contactEmail"
                                name="contactEmail" required :placeholder="t('contacts.enterYourEmail')">
                        </div>
                        <div class="item">
                            <label for="contactPhone" class="form-label">{{ t('contacts.phone') }}</label>
                            <input v-model="form.phone" type="text" class="form-control" id="contactPhone"
                                name="contactPhone" required :placeholder="t('contacts.enterYourPhoneNumber')">
                        </div>
                        <div class="item">
                            <label for="contactMessage" class="form-label">{{ t('contacts.message') }}</label>
                            <textarea v-model="form.message" type="text" class="form-control" id="contactMessage"
                                name="contactMessage" required :placeholder="t('contacts.yourMessage')" />
                        </div>
                        <!-- <button type="submit" class="btn">{{ t('contacts.send') }}</button> -->
                        <button type="button" class="btn" @click="handleSend">
                            {{ t('contacts.send') }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconFacebook, IconInstagram, IconLinkedin } from '~/assets/icons';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const form = ref({ name: '', email: '', message: '', phone: '' })
function handleSend() {
    if (!form.value.name || !form.value.email || !form.value.phone || !form.value.message) {
        alert(t('pleaseFill'))
        return
    }

    const subject = encodeURIComponent(t('contacts.feedback'))
    const body = encodeURIComponent(
        `${t('name')}: ${form.value.name}\n` +
        `${t('contacts.email')}: ${form.value.email}\n` +
        `${t('forBusiness.form.phoneNumber')}: ${form.value.phone}\n\n` +
        `${t('contacts.message')}:\n${form.value.message}`
    )

    const mailtoUrl = `mailto:info@horizont.uz?subject=${subject}&body=${body}`

    window.location.href = mailtoUrl

    setTimeout(() => {
        form.value.name = ''
        form.value.email = ''
        form.value.phone = ''
        form.value.message = ''
    }, 500)
}

onMounted(() => {
    function updateAOS() {
        const left = document.querySelector('.left-side')
        const right = document.querySelector('.right-side')

        if (left && right) {
            if (window.innerWidth < 992) {
                left.setAttribute('data-aos', 'fade-up')
                right.setAttribute('data-aos', 'fade-up')
            } else {
                left.setAttribute('data-aos', 'fade-right')
                right.setAttribute('data-aos', 'fade-left')
            }

        }
    }

    updateAOS()
    window.addEventListener('resize', updateAOS)
})

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