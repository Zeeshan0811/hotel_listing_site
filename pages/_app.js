import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import MainLayout from "../components/layout/MainLayout"
import Guest from "../components/layout/Guest"
import Dashaboard from "../components/layout/Dashboard"


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider >
  )
}


export default MyApp;
