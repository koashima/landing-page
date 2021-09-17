import Head from "next/head";
import Nav from "../components/nav";
import Future from "../sections/future";
import Mission from "../sections/mission";
import Academics from "../sections/academics";
import Community from "../sections/community";
import Numbers from "../sections/numbers";
import Athletics from "../sections/athletics";
import Technology from "../sections/technology";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Future is Yours</title>
        <meta name="Maryknoll: The Future is Yours" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Future />
        <Mission />
        <Academics />
        <Community />
        <Numbers />
        <Athletics />
        <Technology />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
