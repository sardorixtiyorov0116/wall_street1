<template>
  <div>
    <HeroSection :title="t('forBusiness.text')" :description="t('forBusiness.1')" />
    <div class="container business">
      <h2>{{ t('forBusiness.2') }}</h2>
      <p class="text-[1.5rem] text-center">{{ t('forBusiness.3') }}</p>
      <p class="text-[1.5rem]">{{ t('forBusiness.4') }}</p>
      <button class="btn" @click="isOpen = true">{{ t('forBusiness.5') }}</button>
    </div>

    <UModal v-model="isOpen">
      <div class="p-4 bg-white text-black dark:bg-white dark:text-black rounded-lg">
        <h3 class="font-bold mb-4 text-center text-[16px]">{{ t('forBusiness.form.registrationForm') }}</h3>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="fullName" class="block text-sm font-medium">{{ t('forBusiness.form.firstLastName') }}</label>
            <input id="fullName" v-model="form.fullName" type="text"
              :class="{ 'border-red-500': !form.fullName && form.submitted }"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required
              :placeholder="t('forBusiness.form.enterFirstLastName')" />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium">{{ t('forBusiness.form.phoneNumber') }}</label>
            <input id="phone" ref="phoneInput" v-model="form.phone" type="tel" v-mask="'+998 (##) ###-##-##'"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required placeholder="+998"
              :class="{ 'border-red-500': !form.phone && form.submitted }" />
          </div>
          <div>
            <label for="telegram" class="block text-sm font-medium">{{ t('forBusiness.form.telegramUsername') }}</label>
            <input id="telegram" v-model="form.telegram" type="text"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" required
              :placeholder="t('forBusiness.form.enterUsername')"
              :class="{ 'border-red-500': telegramInvalid && form.submitted }" />
            <p v-if="telegramInvalid && form.submitted" class="text-red-500 text-sm mt-1">{{
              t('forBusiness.form.invalidUsername') }}</p>
          </div>
          <div>
            <label class="block text-sm font-medium">{{ t('forBusiness.form.choiceOfRole') }}</label>
            <div class="mt-2 space-y-2">
              <label class="flex items-center">
                <input type="radio" v-model="form.role" value="Бизнесмен/финансист" required class="mr-2" />
                {{ t('forBusiness.form.entrepreneur') }}
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="form.role" value="Кредитный сотрудник" required class="mr-2" />
                {{ t('forBusiness.form.creditSpecialist') }}
              </label>
              <label class="flex items-center">
                <input type="radio" v-model="form.role" value="Другое" required class="mr-2" />
                {{ t('forBusiness.form.other') }}
              </label>
            </div>
          </div>
          <button type="submit" class="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {{ t('forBusiness.form.register') }}
          </button>
        </form>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const isOpen = ref(false);
const form = ref({
  fullName: '',
  phone: '',
  telegram: '',
  role: '',
  submitted: false
});
const telegramInvalid = ref(false);

const submitForm = () => {
  telegramInvalid.value = !form.value.telegram.includes('@');

  if (!form.value.fullName || !form.value.phone || !form.value.telegram || !form.value.role) {
    form.value.submitted = true;
    return;
  }

  if (!telegramInvalid.value) {
    isOpen.value = false;
    form.value = {
      fullName: '',
      phone: '',
      telegram: '',
      role: '',
      submitted: false
    };
    toast.success('Регистрация прошла успешно! Проверьте Telegram — вам отправлено сообщение.');
  }
}
</script>

<style scoped lang="scss">
button {
  transition: background-color 0.3s ease;
}

.business {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
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
</style>
