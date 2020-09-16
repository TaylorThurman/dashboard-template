<template>
    <v-main :toggled="miniToggled">
        <!--            <v-container>-->
        <h1>welcome</h1>
        <!--            </v-container>-->
    </v-main>
</template>

<script>
    export default {
        name: "Main",
        props: ["miniToggled"],
        watch: {
            miniToggled(val) {
                console.log(val)
            }
        }
    }
</script>

<style scoped>
    @media screen and (min-width: 960px) {
        ::v-deep .v-main[toggled=true] {
            margin-left: 45px !important;
        }

        ::v-deep .v-main[toggled=false] {
            margin-left: 0px !important;
        }
    }
</style>