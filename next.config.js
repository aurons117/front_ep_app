const withPWA = require('next-pwa');

module.exports = withPWA({
    future: {
        webpack5: true
    },
    pwa: {
        dest: 'public',
        mode: 'production',
        register: true,
        modifyURLPrefix: {
            '../public': ''
        },
        fallbacks: {
            image: '/static/images/fallback.png',
            // document: '/offline.js'
        }
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        
        return config;
    }
});

// fallbacks: {
//     image: '/static/images/fallback.png',
//     // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
//     // font: '/static/font/fallback.woff2',
//     // audio: ...,
//     // video: ...,
// },