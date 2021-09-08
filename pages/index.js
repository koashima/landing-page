import Head from "next/head";
import Image from "next/image";
import Nav from "../components/nav";
import Future from "../sections/future";
import Mission from "../sections/mission";
import Academics from "../sections/academics";
import Community from "../sections/community";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Future is Yours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <Future />
        <Mission />
        <Academics />
        <Community />

      </main>

      <footer className={styles.footer}>
        <div>
          made with love by
          <a
            href="https://liftedcreative.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            lifted
          </a>
        </div>
      </footer>
    </div>
  );
}
