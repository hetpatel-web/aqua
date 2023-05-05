import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceOptions from "@/components/ServiceOptions";
import AboutUS from "@/components/AboutUS";

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
        <HeroSection />
        <ServiceOptions />
        <AboutUS />
      </main>
    </>
  );
}
