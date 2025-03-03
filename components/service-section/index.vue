<template>
    <div id="services" class="service">
        <div class="container">
            <h2>Услуги</h2>
            <div class="service-box">
                <h3>Разработка бизнес-планов и ТЭО</h3>
                <p>"Детализированное планирование, технико-экономическое обоснование и сопряжение
                    с Центром экспертизы."
                </p>
                <a href="#" class="btn">Подробнее</a>
            </div>
            <div id="services1" class="service-box">
                <h3>Отчеты о воздействии на окружающую среду (ЗВОС)</h3>
                <p>"Подготовка комплексных отчетов с использованием современных методик и анализа
                    необходимых данных."
                </p>
                <a href="#" class="btn">Подробнее</a>
            </div>
            <div id="services2" class="service-box">
                <h3>Инвестиционный консалтинг</h3>
                <p>"Сопровождение инвестиционных проектов от подготовки до запуска с минимизацией рисков."</p>
                <a href="#" class="btn">Подробнее</a>
            </div>
            <div id="services3" class="service-box">
                <h3>Разработка ГЧП проектов</h3>
                <p>"Организация и реализация проектов государственно-частного партнерства с учетом особенностей
                    сотрудничества."
                </p>
                <a href="#" class="btn">Подробнее</a>
            </div>
            <div class="service-box">
                <h3>Бухгалтерский аутсорсинг</h3>
                <p>"Полный комплекс бухгалтерских услуг, включающий ведение, восстановление учета и оптимизацию затрат
                    за счет работы профессиональной команды."
                </p>
                <a href="#" class="btn">Подробнее</a>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
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