import Head from "next/head";
import Nav from "../components/nav";
import Future from "../sections/future";
import Mission from "../sections/mission";
import Academics from "../sections/academics";
import Community from "../sections/community";
import Athletics from "../sections/athletics";
import Technology from "../sections/technology";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Future is Yours</title>
        <meta name="Maryknoll: The Future is Yours" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <Future />
        <Mission />
        <Academics />
        <Community />
        <Athletics />
        <Technology />
      </main>

      <footer>
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
