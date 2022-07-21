import Fotter from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

export default function Layout({children, hasAcces}) {
  return (
    <>
      <Head>
        <Navbar hasAcess={hasAcces}/>
      </Head>
      <main className="content">
        {children}
      </main>
      <Fotter />
    </>
  )
}