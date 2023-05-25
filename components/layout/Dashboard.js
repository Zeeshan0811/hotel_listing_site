import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Sidebar from "../Sidebar";
import Footer from '../Footer'

function Dashboard({ children }) {

    return (
        <>
            <Header />
            <div className="page-content">
                <Sidebar />
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Dashboard;