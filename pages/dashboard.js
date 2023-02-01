import React from 'react';
import { useSession, singIn, signOut } from "next-auth/react"
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]"



export default function Dashboard() {

    // const { user } = useSession()
    // console.log(user)
    const { data: session, status } = useSession({
        required: true
    })

    // if (status === "authenticated") {
    //     return <p>Signed in as {session.user.email}</p>
    // }
    // console.log(session);
    if (!session) {
        return <></>;
    }
    // console.log(user)
    return (
        <div className="mt-5 mb-5 text-center">
            {/* <p>Signed in as {user}</p> */}
            {(session) ? (<>This is a dashboard page. Signed in as {session.user.email}</>) : (<>This is Not login  pAge</>)}
            <br />
            <br />
            <br />
            <button onClick={_ => signOut()}>Signout</button>
        </div>
    );
}


export async function getServerSideProps(context) {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
    // console.log(session);

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }
    return {
        props: {
        }
    }
}

// export async function getServerSideProps(context) {
//     return {
//         props: {
//             session: await unstable_getServerSession(context.req, context.res, authOptions),
//         },
//     }
// }