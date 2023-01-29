import { Html, Head, Main, NextScript } from "next/document";
import Header from "../Header";
import Sidebar from "../Sidebar";
import React from 'react';
import Footer from "../Footer";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


const secret = process.env.SECRET;

export default function MainLayout() {

    // console.log(props);
    let a = 3;

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
                    <h4 className='text-center text-warning'>Login Now </h4>
                    <Main />
                    <NextScript />
                </>
            )}
        </>
    );
}