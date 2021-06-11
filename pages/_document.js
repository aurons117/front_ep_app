import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'EP HUB Lite';
const APP_DESCRIPTION = 'Versión lite de EP HUB. Donde podrás encontrar información de los productos de Siemens EP';

export default class extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html lang='en' dir='ltr'>
                <Head>
                    <meta name='application-name' content={APP_NAME} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                    <meta name='description' content={APP_DESCRIPTION} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#000028' />
                    {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
                    {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

                    <link rel='manifest' href='/manifest.json' />

                    <link rel="shortcut icon" href="/favicon.ico" type="/icons/favicon.ico" />
                    <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />

                    {/*
                                    <!-- Splash Screens según la resolución -->
                    <!-- iPhone Xs Max (1242px x 2688px) -->
                    <link rel="apple-touch-startup-image"
                        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
                        href="/img/icons-ios/apple-launch-1125x2436.png">
                    <!-- iPhone Xr (828px x 1792px) -->
                    <link rel="apple-touch-startup-image"
                        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
                        href="/img/icons-ios/apple-launch-1125x2436.png">
                    <!-- iPhone X, Xs (1125px x 2436px) -->
                    <link rel="apple-touch-startup-image"
                        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
                        href="/img/icons-ios/apple-launch-1125x2436.png">
                    <!-- iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus (1242px x 2208px) -->
                    <link rel="apple-touch-startup-image"
                        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
                        href="/img/icons-ios/apple-launch-1242x2208.png">
                    <!-- iPhone 8, 7, 6s, 6 (750px x 1334px) -->
                    <link rel="apple-touch-startup-image"
                        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                        href="/img/icons-ios/ apple-launch-750x1334.png">
                    */}

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
