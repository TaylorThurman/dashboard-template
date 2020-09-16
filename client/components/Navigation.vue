<template>
    <div>
        <v-navigation-drawer
                app
                v-model="drawer"
                :clipped="clipped"
                :expand-on-hover="mini"
                :permanent="permanent"
                :mini-variant.sync="mini"
                mini-variant-width="100"
                fixed
                hide-overlay
                floating
                width="250"
                class="nav"
                disable-resize-watcher
        >
            <div class="sidebar">
                <v-list dense class="sidebar-list">
                    <v-list-item v-if="$vuetify.breakpoint.smAndDown">
                        <img class="mx-4" height="40px"
                             src=""
                             alt="Logo"/>
                    </v-list-item>
                    <v-list-item
                            v-for="item in items"
                            :key="item.text"
                            link>
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
                class="app-bar"
                flat
                v-click-outside="onClickOutsideNav"
        >
            <v-icon class="menu-icon" v-if="(clipped && toggleMini) || (!clipped && !drawer)"
                    @click.stop="openAndCloseDrawer()">mdi-format-align-justify
            </v-icon>
            <v-icon class="menu-icon" v-else @click.stop="openAndCloseDrawer()">mdi-format-align-left</v-icon>
            <img class="ml-8 mr-4" height="40px"
                 v-if="$vuetify.breakpoint.mdAndUp"
                 src=""
                 alt="Logo"/>
            <v-toolbar-title class="ml-2 mr-12 align-center">
                <span class="title">Dashboard Template</span>
            </v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        data: () => ({
            drawerToggle: false,
            permanentToggle: false,
            toggleMini: true,
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
                return this.$vuetify.breakpoint.mdAndUp;
            },
            drawer() {
                if (this.$vuetify.breakpoint.mdAndUp) return true;
                return this.drawerToggle;
            },
            permanent() {
                if (this.$vuetify.breakpoint.mdAndUp) return true;
                return this.permanentToggle;
            }
        },
        methods: {
            onClickOutsideNav() {
                if (this.$vuetify.breakpoint.smAndDown) {
                    this.drawerToggle = false;
                    this.permanentToggle = false;
                }
            },
            openAndCloseDrawer() {
                // opens and closes the drawer when in smaller screens
                if (this.$vuetify.breakpoint.smAndDown) {
                    console.log('small')
                    this.drawerToggle = !this.drawerToggle
                    this.permanentToggle = this.drawer;
                    return this.drawer;
                    // keeps the drawer open and toggles the mini back in forth in larger screens
                } else {
                    console.log('mdandup')
                    this.drawerToggle = true;
                    this.toggleMini = !this.toggleMini;
                    this.permanentToggle = true;
                    return this.toggleMini;
                }
            }
        },
    }
</script>

<style scoped>
    .app-bar {
        background: transparent !important;
        border-top: 2px solid #42b883;
    }

    .nav {
        background: transparent;
    }

    .sidebar {
        margin-left: 20px;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 5px;
        background-image: linear-gradient(0deg, #389466, #42b883);
        box-shadow: 0 2px 22px 0 rgba(0, 0, 0, .1), 0 4px 20px 0 rgba(0, 0, 0, .15);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    .sidebar-list {
        padding-left: 8px;
    }

    .menu-icon {
        margin-left: 28px;
        margin-right: 22px;
    }

    @media (max-width: 960px) {

        .sidebar {
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            border-radius: 0;
            box-shadow: none;
            height: 100%;
        }

        .sidebar-list {
            padding-left: 0;
            height: 100%;
        }

        .menu-icon {
            margin-left: 5px;
            margin-right: 20px;
        }
    }
</style>