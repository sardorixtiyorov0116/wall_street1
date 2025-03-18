<template>
    <div class="hero">
        <div class="container">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <button>Заказать звонок</button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ title: string, description: string }>()
</script>

<style scoped lang="scss">
.hero {
    padding: 150px 0;
    background: url("../../assets/images/globe.png") no-repeat;
    background-size: cover;
    color: #fff;

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
    }

    p {
        font-size: 1.25rem;
        margin-bottom: 30px;
        text-align: center;
    }

    button {
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
</style>