import Head from "next/head";

import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aqua Consultancy | Home</title>
        <meta
          name="description"
          content="Aqua Consultancy a place to find your next job"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1 className="text-3xl font-bold">Aqua Consultancy Services</h1>
        <p>Your way to a new career as a Quality Assurance Professional</p>
      </main>
    </>
  );
}
