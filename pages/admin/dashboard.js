import React from 'react';
import { useSession, singIn, signOut } from "next-auth/react"

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true
    })
    return (
        <div className="mt-5 mb-5 text-center">
            {(session) ? (<>This is a dashboard page. Signed in as {session.user.email}</>) : (<>This is Not login  pAge</>)}
            <br />
            <br />
            <br />
            <button onClick={_ => signOut({ callbackUrl: "/login" })}>Signout</button>
        </div>
    );
}
