<template>
    <div id="faq" class="faq">
        <div class="container">
            <h2>Часто задаваемые вопросы (FAQ)</h2>
            <div class="rounded-lg border border-[#dee2e6] overflow-hidden w-full" data-aos="fade-up">
                <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }">
                    <template #default="{ item, open }">
                        <UButton color="gray" variant="ghost"
                            class="border border-[#dee2e6] hover:!bg-blue-100 hover:!text-[#052c65]"
                            :ui="{ rounded: 'rounded-none', padding: { sm: 'px-3 py-4' } }">
                            <span class="text-black text-[1.2rem] font-normal">{{ item.label }}</span>
                            <template #trailing>
                                <UIcon name="i-heroicons-chevron-right-20-solid"
                                    class="w-8 h-7 ms-auto transform transition-transform duration-200 text-black"
                                    :class="[open && 'rotate-90']" />
                            </template>
                        </UButton>
                    </template>
                    <template #item="{ item }">
                        <div class="px-3 py-4  text-black text-[1rem]">
                            {{ item.content }}
                        </div>
                    </template>
                </UAccordion>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const items = [{
    label: 'Вопрос 1: Какие услуги предоставляет Horizon Consult?',
    defaultOpen: true,
    content: 'Мы предоставляем услуги по разработке бизнес-планов и ТЭО, подготовке отчетов о воздействии на окружающую среду, инвестиционному консалтингу, разработке ГЧП проектов, бухгалтерскому аутсорсингу (включая ведение и восстановление учета).'
}, {
    label: 'Вопрос 2: Как связаться с вами для консультации?',
    content: 'Вы можете связаться с нами через форму обратной связи в разделе «Контакты», по телефону +7 (495) 123-45-67 или по email: info@horizonconsult.ru.'
}, {
    label: 'Вопрос 3: Предоставляете ли вы услуги международного консалтинга?',
    content: 'Да, мы оказываем консультационные услуги на международном уровне, помогая нашим клиентам выйти на зарубежные рынки и установить деловые контакты.'
}]
</script>

<style scoped>
.faq {
    padding: 60px 0;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    p {
        margin-bottom: 1rem;
        text-align: center;
        width: 85%;
    }
}
</style>