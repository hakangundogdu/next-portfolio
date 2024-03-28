import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Nav from "../components/Nav";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="scroll-smooth">
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}

export default MyApp;
