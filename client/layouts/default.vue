<template>
    <v-app style="background: linear-gradient(#1e1e2f,#1e1e24); border-top: 2px solid #42b883;">
        <v-navigation-drawer
                app
                v-model="drawer"
                :clipped="clipped"
                :expand-on-hover="mini"
                :permanent="permanent"
                :mini-variant.sync="mini"
                fixed
                hide-overlay
                floating
                width="250"
                class="nav"
        >
            <div class="sidebar">
                <v-list dense style="padding-left: 9px">
                    <v-list-item v-if="$vuetify.breakpoint.smAndDown"
                                 >
                        <img class="mx-4" height="40px" style="fill: white"
                             src=""
                             alt="Logo"/>
                    </v-list-item>
                    <v-list-item
                            v-for="item in items"
                            :key="item.text"
                            link
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item class="mt-4"
                                 link>
                        <v-list-item-action>
                            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
                        </v-list-item-action>
                        <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon color="grey darken-1">mdi-cog</v-icon>
                        </v-list-item-action>
                        <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </div>
        </v-navigation-drawer>

        <v-app-bar
                app
                :clipped-left="clipped"
                style="background: transparent!important;"
                flat
                v-click-outside="onClickOutsideNav"
        >
            <v-icon class="menu-icon" v-if="(clipped && toggleMini) || (!clipped && !drawer)"
                    @click.stop="openAndCloseDrawer()">mdi-format-align-justify
            </v-icon>
            <v-icon class="menu-icon" v-else @click.stop="openAndCloseDrawer()">mdi-format-align-left</v-icon>
            <img class="mx-4" height="40px"
                 v-if="$vuetify.breakpoint.mdAndUp"
                 src=""
                 alt="Logo"/>
            <v-toolbar-title class="mr-12 align-center">
                <span class="title">Dashboard Template</span>
            </v-toolbar-title>
        </v-app-bar>

        <v-main :miniToggled="toggleMini">
<!--            <v-container>-->
                <h1>welcome</h1>
<!--            </v-container>-->
        </v-main>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
            toggleMini: true,
            permanent: false,
            items: [
                {icon: 'mdi-trending-up', text: 'Most Popular'},
                {icon: 'mdi-youtube-subscription', text: 'Subscriptions'},
                {icon: 'mdi-history', text: 'History'},
                {icon: 'mdi-playlist-play', text: 'Playlists'},
                {icon: 'mdi-clock', text: 'Watch Later'},
            ],
            items2: [
                {picture: 28, text: 'Joseph'},
                {picture: 38, text: 'Apple'},
                {picture: 48, text: 'Xbox Ahoy'},
                {picture: 58, text: 'Nokia'},
                {picture: 78, text: 'MKBHD'},
            ],
        }),
        computed: {
            mini() {
                // sets sidebar to mini when in larger screens
                if (this.$vuetify.breakpoint.mdAndUp) {
                    this.toggleMini = this.toggleMini;
                    return this.toggleMini;
                }
            },
            clipped() {
                return !this.$vuetify.breakpoint.smAndDown;
            },
        },
        created() {
            this.$vuetify.theme.dark = true
        },
        methods: {
            onClickOutsideNav() {
                if (this.$vuetify.breakpoint.smAndDown) {
                    this.drawer = false;
                    this.permanent = false;
                }
            },
            openAndCloseDrawer() {
                // opens and closes the drawer when in smaller screens
                if (this.$vuetify.breakpoint.smAndDown) {
                    this.drawer = !this.drawer
                    this.permanent = this.drawer;
                    return this.drawer;
                    // keeps the drawer open and toggles the mini back in forth in larger screens
                } else {
                    this.drawer = true;
                    this.toggleMini = !this.toggleMini;
                    this.permanent = this.toggleMini;
                    return this.toggleMini;
                }
            }
        }
    }
</script>

<style scoped>
    .nav {
        min-width: 100px;
        background: transparent;
    }

    .sidebar {
        margin-left: 20px;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 5px;
        background-image: linear-gradient(0deg, #389466, #40b07e);
        box-shadow: 0 2px 22px 0 rgba(0, 0, 0, .2), 0 2px 30px 0 rgba(0, 0, 0, .35);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    .menu-icon {
        margin-left: 30px;
        margin-right: 20px;
    }

    @media (max-width: 960px){
        .menu-icon {
            margin-left: 0px;
            margin-right: 20px;
        }
    }

    @media screen and (min-width: 960px) {
        ::v-deep .v-main[miniToggled=true]  {
            margin-left: 45px!important;
        }
        ::v-deep .v-main[miniToggled=false]  {
            margin-left: 0px!important;
        }
    }
</style>