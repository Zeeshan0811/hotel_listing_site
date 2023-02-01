import React from 'react';
import { useSession, singIn, signOut } from "next-auth/react"


export default function Dashboard() {
    const { data: session } = useSession({
        required: true
    })

    if (!session) {
        return <></>;
    }

    console.log(session.user);
    return (
        <div className="mt-5 mb-5 text-center">
            {(session) ? (<>This is dashboard pAge</>) : (<>This is Not login  pAge</>)}
            <br />
            <p>{session.user.email}</p>
            <br />
            <br />
            <button onClick={_ => signOut()}>Signout</button>
        </div>
    );
}

