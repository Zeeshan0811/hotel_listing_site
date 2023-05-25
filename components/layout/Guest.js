import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Sidebar from "../Sidebar";
import Footer from '../Footer'
import { getSession, useSession } from "next-auth/react"

function Guest({ children }) {

    return (
        <>
            <div className="page-content">
                <div className="content-wrapper">
                    {children}
                </div>
            </div>
        </>
    )
}


export default Guest;