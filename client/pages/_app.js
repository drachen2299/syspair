import "tailwindcss/tailwind.css";
import { userContext } from "../lib/context";
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <userContext.Provider value={{ username: "ben" }}>
      <Nav />
      <Component {...pageProps} />
    </userContext.Provider>
  );
}

export default MyApp;
