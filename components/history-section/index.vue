<template>
    <div id="history" class="history">
        <div class="container">
            <h2>История компании</h2>
            <p>Компания Horizon Consult была основана в 2005 году группой экспертов в области финансов и стратегического
                управления. С первых лет работы команда сосредоточилась на предоставлении консультационных услуг малому
                и среднему бизнесу, помогая компаниям эффективно управлять финансами, снижать риски и разрабатывать
                стратегии роста.</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">
@use "~/assets/scss/mixins" as *;

.history {
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

        @include breakpoint(lg) {
            width: 85%;
        }
    }
}
</style>