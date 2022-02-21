import '../styles/globals.css';
import Nav from '../components/Nav';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="scroll-smooth">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
