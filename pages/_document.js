import { Html, Head, Main, NextScript } from 'next/document'
import HeadFiles from '../components/HeadFiles'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <HeadFiles />
        </Head>
        <body class="homme">
            <Header />
            <div class="page-content">
                <Sidebar />
                <div class="content-wrapper">
                    <Main />
                    <Footer />
                </div>
            <NextScript />
            </div>
        </body>
    </Html>
  )
}