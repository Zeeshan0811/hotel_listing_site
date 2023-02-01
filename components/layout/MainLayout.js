import { Html, Head, Main, NextScript } from "next/document";
import Header from "../Header";
import Sidebar from "../Sidebar";
import React from 'react';
import Footer from "../Footer";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import { serverProps } from "../../lib/serverProps"


const secret = process.env.SECRET;

export default function MainLayout({ abc }) {

    let a = 3;
    if (abc) {
        console.log(abc)
    }

    return (
        <>
            {(a == 5) ? (
                <>
                    <Header />
                    <div className="page-content">
                        <Sidebar />
                        <div className="content-wrapper">
                            <Main />
                            <NextScript />
                            <Footer />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Main />
                    <NextScript />
                </>
            )}
        </>
    );
}

