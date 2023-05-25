import { Html, Head, Main, NextScript } from "next/document";
import HeadFiles from "../components/HeadFiles";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { verify } from "jsonwebtoken";
 

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <HeadFiles />
      </Head>
      <body className="home">
        <Header />
        <div className="page-content">
          <Sidebar />
          <div className="content-wrapper">
            <Main />
            <NextScript />
            <Footer />
          </div>
        </div>
      </body>
    </Html>
  );
}
