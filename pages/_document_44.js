import React from 'react';
import { Html, Head, Main, NextScript } from "next/document";
import HeadFiles from "../components/HeadFiles";
import Dashboard from "../components/layout/Dashboard"
import serverProps from "../lib/serverProps";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { getToken } from 'next-auth/jwt';
import MainLayout from '../components/layout/MainLayout';


function Document({ session }) {

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