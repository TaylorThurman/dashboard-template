<template>
    <v-main>
        <div class="main">
            <nuxt />
        </div>
    </v-main>
</template>

<script>
    export default {
        name: "Main",
    }
</script>

<style scoped>
    .main {
        padding: 5px;
        margin: 10px 15px 10px 0;
    }

    @media (max-width: 960px) {
        .main {
            margin: 10px 15px;
        }
    }

</style>