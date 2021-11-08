import "tailwindcss/tailwind.css";
import '../styles/global.css'
import Nav from "../components/Nav";
import { provideAuth } from "../lib/use-auth";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
