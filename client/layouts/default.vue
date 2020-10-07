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
        created() {
            this.$vuetify.theme.dark = false
        },
        methods: {
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800');

    html, body {
        background-color: #1e1e2f;
        font-family: 'Poppins', sans-serif;
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
    .theme--dark.v-card {
        background: #27293d !important;
    }
    .v-card {
        box-shadow: 0 1px 15px 0 hsla(0,0%,48.2%,.05) !important;
        /*box-shadow: 0 2px 22px 0 rgba(0, 0, 0, .1), 0 4px 20px 0 rgba(0, 0, 0, .15) !important;*/
        /*background-origin: border-box !important;*/
        /*background-clip: content-box, border-box !important;*/
    }
    .v-card-title {
        font-weight: 100 !important;
    }
</style>