<template>
    <div id="services" class="service">
        <div class="container">
            <h2>{{t('services.text')}}</h2>
            <div class="service-box" data-aos="fade-up">
                <h3>{{t('services.1')}}</h3>
                <p>{{t('services.2')}}</p>
                <div>
                    <button class="btn" @click="isOpen1 = !isOpen1"> {{ isOpen1 ? t('hide') : t('more') }}</button>
                    <transition name="collapse">
                        <div v-if="isOpen1" class=" overflow-hidden">
                            <div class="p-4">
                                <b>{{t('services.3')}}</b>
                                <li>{{t('services.4')}}</li>
                                <li>{{t('services.5')}}</li>
                                <p>{{t('services.6')}}</p>
                            </div>
                        </div>
                    </transition>
                </div>

            </div>
            <div id="services1" class="service-box" data-aos="fade-up">
                <h3>{{t('services.7')}}</h3>
                <p>{{t('services.8')}}</p>
                <div>
                    <button class="btn" @click="isOpen2 = !isOpen2"> {{ isOpen2 ? t('hide') : t('more') }}</button>
                    <transition name="collapse">
                        <div v-if="isOpen2" class=" overflow-hidden">
                            <div class="p-4">
                                <b>{{t('services.9')}}</b>
                                <li>{{t('services.10')}}</li>
                                <li>{{t('services.11')}}</li>
                                <li>{{t('services.12')}}</li>
                                <li>{{t('services.13')}}</li>
                                <li>{{t('services.14')}}</li>
                                <li>{{t('services.15')}}</li>
                                <p>{{t('services.16')}}</p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <div id="services2" class="service-box" data-aos="fade-up">
                <h3>{{t('services.17')}}</h3>
                <p>{{t('services.18')}}</p>
                <div>
                    <button class="btn" @click="isOpen3 = !isOpen3"> {{ isOpen3 ? t('hide') : t('more') }}</button>
                    <transition name="collapse">
                        <div v-if="isOpen3" class=" overflow-hidden">
                            <div class="p-4">
                                <b>{{t('services.19')}}</b>
                                <li>{{t('services.20')}}</li>
                                <li>{{t('services.21')}}</li>
                                <b>{{t('services.22')}}</b>
                                <li>{{t('services.23')}}</li>
                                <li>{{t('services.24')}}</li>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <div id="services3" class="service-box" data-aos="fade-up">
                <h3>{{t('services.25')}}</h3>
                <p>{{t('services.26')}}</p>
                <div>
                    <button class="btn" @click="isOpen4 = !isOpen4"> {{ isOpen4 ? t('hide') : t('more') }}</button>
                    <transition name="collapse">
                        <div v-if="isOpen4" class=" overflow-hidden">
                            <div class="p-4">
                                <b>{{t('services.27')}}</b>
                                <li>{{t('services.28')}}</li>
                                <li>{{t('services.29')}}</li>
                                <li>{{t('services.30')}}</li>
                                <li>{{t('services.31')}}</li>
                                <li>{{t('services.32')}}</li>
                                <b>{{t('services.33')}}</b>
                                <li>{{t('services.34')}}</li>
                                <li>{{t('services.35')}}</li>
                                <li>{{t('services.36')}}</li>
                                <li>{{t('services.37')}}</li>
                                <p>{{t('services.38')}}</p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <div class="service-box" data-aos="fade-up">
                <h3>{{t('services.39')}}</h3>
                <p>{{t('services.40')}}</p>
                <div>
                    <button class="btn" @click="isOpen5 = !isOpen5"> {{ isOpen5 ? t('hide') : t('more') }}</button>
                    <transition name="collapse">
                        <div v-if="isOpen5" class=" overflow-hidden">
                            <div class="p-4">
                                <b>{{t('services.41')}}</b>
                                <li>{{t('services.42')}}</li>
                                <li>{{t('services.43')}}</li>
                                <li>{{t('services.44')}}</li>
                                <li>{{t('services.45')}}</li>
                                <li>{{t('services.46')}}</li>
                                <li>{{t('services.47')}}</li>
                                <li>{{t('services.48')}}</li>
                                <b>{{t('services.49')}}</b>
                                <li>{{t('services.50')}}</li>
                                <li>{{t('services.51')}}</li>
                                <li>{{t('services.52')}}</li>
                                <li>{{t('services.53')}}</li>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const isOpen1 = ref(false)
const isOpen2 = ref(false)
const isOpen3 = ref(false)
const isOpen4 = ref(false)
const isOpen5 = ref(false)
</script>

<style scoped lang="scss">
.collapse-enter-active,
.collapse-leave-active {
    transition: max-height 0.5s ease;
}

.collapse-enter-from,
.collapse-leave-to {
    max-height: 0;
}

.collapse-enter-to,
.collapse-leave-from {
    max-height: 400px;
}

.service {
    padding: 60px 0;

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .service-box {
        border: 1px solid #e3e3e3;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 5px;
        background: #fff;

        h3 {
            font-size: 1.75rem;
        }

        p {
            margin-top: 0;
            margin-bottom: 1rem;
        }

        .btn {
            color: var(--primary-light-hover);
            border-radius: 6px;
            padding: .4rem .8rem;
            border: 1px solid var(--primary-light-hover);
            transition: all 0.2s ease-in-out;

            &:hover {
                background: var(--primary-light-hover);
                color: #fff;
            }
        }
    }
}
</style>