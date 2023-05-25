import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import HeadFiles from '../components/HeadFiles'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <HeadFiles />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html >
        )
    }
}

