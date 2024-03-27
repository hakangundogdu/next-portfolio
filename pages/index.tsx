import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center scroll-smooth	 md:max-w-screen-lg mx-auto py-2">
      <Head>
        <title>Hakan Gundogdu</title>
        <meta property="og:image" content="/public/images/project-0-1.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Hero />
      <Skills />
    </div>
  );
}
