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
                    <v-list-item to="/">
                        <v-list-item-action>
                            <img height="35px" style="border-radius: 50%;
    background-color: hsla(0,0%,100%,.9);"
                                 src="~/static/icon-vue.png"
                                 alt="Logo"/>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                <h3 class="sidebar-text">Title</h3>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <hr class="ml-3 mr-3 mt-2 mb-2"/>
                    <v-list-item
                            v-for="item in items"
                            :key="item.text"
                            :to="item.route"
                            link>
                        <v-list-item-action>
                            <v-icon class="sidebar-text">{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="sidebar-text">
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
        </v-navigation-drawer>

        <v-app-bar
                app
                :clipped-left="clipped"
                class="app-bar"
                flat
                dense
                v-click-outside="onClickOutsideNav"
        >
            <v-icon class="menu-icon" v-if="(clipped && toggleMini) || (!clipped && !drawer)"
                    @click.stop="openAndCloseDrawer()">mdi-format-align-justify
            </v-icon>
            <v-icon class="menu-icon" v-else @click.stop="openAndCloseDrawer()">mdi-format-align-left</v-icon>
            <span class="ml-2 mr-4" v-if="$vuetify.breakpoint.mdAndUp"></span>
            <v-toolbar-title class="ml-2 mr-12 align-center">
                <span class="title">DASHBOARD</span>
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
                {icon: 'mdi-trending-up', text: 'Dashboard', route: '/dashboard'},
                {icon: 'mdi-youtube-subscription', text: 'Subscriptions', route: '/settings'},
                {icon: 'mdi-history', text: 'History', route: '/'},
                {icon: 'mdi-playlist-play', text: 'Playlists', route: '/'},
                {icon: 'mdi-clock', text: 'Watch Later', route: '/'},
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
        border-top: 2px solid rgba(114, 192, 44, 1);
    }

    .nav {
        background: transparent;
    }

    .sidebar-text {
        color: white;
    }

    .sidebar {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 15px;
        border-radius: 5px;
        height: calc(100vh - 90px);
        background-image: linear-gradient(0deg, rgba(28, 63, 140, 1) 15%, rgba(114, 192, 44, 1) 100%);
        box-shadow: 0 2px 22px 0 rgba(0, 0, 0, .1), 0 4px 20px 0 rgba(0, 0, 0, .15);
        background-origin: border-box;
        background-clip: content-box, border-box;
    }

    .sidebar-list {
        height: 100%;
        overflow-x: hidden;
    }

    hr {
        background-color: white;
        border-width: 0;
        height: 1px;
        color: white;
    }

    .menu-icon {
        margin-left: 23px;
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