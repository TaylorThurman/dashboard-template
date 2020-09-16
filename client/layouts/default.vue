<template>
    <v-app>
        <Navigation/>

        <Main/>
    </v-app>
</template>

<script>
    import Navigation from "../components/Navigation";
    import Main from "../components/Main";

    export default {
        components: {Navigation, Main},
        data: () => ({
        }),
        computed: {},
        created() {
            this.$vuetify.theme.dark = true
        },
        methods: {
        }
    }
</script>

<style scoped>
    body {
        background-color: #1e1e2f;
    }

    .theme--dark.v-application {
        background: linear-gradient(#1e1e2f, #1e1e24) !important;
    }

    .theme--light.v-application {
        background-color: #f5f6fa !important;
    }

    .theme--dark.v-navigation-drawer {
        background-color: transparent;
    }

    .theme--light.v-navigation-drawer {
        background-color: transparent;
    }
</style>