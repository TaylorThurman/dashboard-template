// nuxt.config.js
module.exports = {
    mode: 'universal',

    head: {
        title: 'Dashboard Template',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Dashobard Template'}
        ]
    },

    build: {
        publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/` // <= add the path to the cached files
    },

    modules: [
        '@nuxtjs/vuetify',
    ],

    srcDir: 'client/',

    performance: {
        gzip: false
    },

    router: {
        base: `/`
    },

    dev: false,

    server: {
        port: 3000,
        host: '0.0.0.0'
    },
}
