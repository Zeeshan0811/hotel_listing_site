import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Sidebar from "../Sidebar";
import SidebarSupervision from "../SidebarSupervision";
import Footer from '../Footer'
import { getSession, useSession } from "next-auth/react"
import { useRouter } from 'next/router'


function MainLayout({ children }) {
    // const { data: session, status } = useSession();
    // const status = "authenticated";
    const router = useRouter()
    return (
        (router.asPath.includes('/admin/')) ? (
            <>
                <Header UserType="Admin" />
                <div className="page-content">
                    <Sidebar />
                    <div className="content-wrapper">
                        {children}
                    </div>
                </div>
                <Footer />
            </>
        ) : (router.asPath.includes('/supervision/')) ? (
            <>
                <Header UserType="Supervision" />
                <div className="page-content">
                    <SidebarSupervision />
                    <div className="content-wrapper">
                        {children}
                    </div>
                </div>
                <Footer />
            </>
        ) : (
            <>
                <div className="page-content">
                    <div className="content-wrapper">
                        {children}
                    </div >
                </div >
            </>
        )
    )
}


export default MainLayout;