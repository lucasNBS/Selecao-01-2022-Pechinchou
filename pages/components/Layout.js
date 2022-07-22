import Fotter from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <Navbar />
      </Head>
      <main className="content">
        {children}
      </main>
      <Fotter />
    </>
  )
}