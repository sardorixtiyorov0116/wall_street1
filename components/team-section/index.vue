<template>
    <div id="team" class="team">
        <div class="container">
            <h2>Наша команда</h2>
            <p>Профессионалы, объединённые общей целью – помощь бизнесу и государственным структурам в реализации
                проектов.</p>
            <div class="row">
                <div class="member">
                    <img src="../../assets/images/member1.png" alt="Member 1" class="member-img">
                    <h3>Иван Иванов</h3>
                    <p>Директор</p>
                </div>
                <div class="member">
                    <img src="../../assets/images/member2.png" alt="Member 1" class="member-img">
                    <h3>Мария Петрова</h3>
                    <p>Главный консультант</p>
                </div>
                <div class="member">
                    <img src="../../assets/images/member3.png" alt="Member 1" class="member-img">
                    <h3>Алексей Смирнов</h3>
                    <p>Бухгалтер-эксперт</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.team {
    padding: 60px 0;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    p {
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .row {
        display: flex;
        justify-content: center;
        width: 80%;
        gap: 30px;
        flex-wrap: wrap;

        @include breakpoint(sm) {
            width: 100%;
            justify-content: space-between;
        }

        @include breakpoint(lg) {
            width: 85% !important;
        }

        @include breakpoint(xl) {
            width: 70% !important;
        }

        .member {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                width: 180px;
                border-radius: 50%;
                margin-bottom: .5rem;

                @include breakpoint(sm) {
                    width: 150px;
                }

                @include breakpoint(lg) {
                    width: 200px;
                }
            }

            h3 {
                font-size: 1.25rem;
            }
        }
    }
}
</style>