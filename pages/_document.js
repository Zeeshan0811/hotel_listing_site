import React from 'react';
import { Html, Head, Main, NextScript } from "next/document";
import HeadFiles from "../components/HeadFiles";
import MainLayout from "../components/layout/MainLayout"
import serverProps from "../lib/serverProps";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


function Document() {
  return (
    <Html lang="en">
      <Head>
        <HeadFiles />
      </Head>
      <body className="home">
        <MainLayout />
      </body>
    </Html>
  );
}


export default Document