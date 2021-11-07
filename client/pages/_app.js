import "tailwindcss/tailwind.css";
import { userContext } from "../lib/context";
import Nav from "../components/Nav";
import { provideAuth } from "../lib/use-auth";

function MyApp({ Component, pageProps }) {
  return (
    <provideAuth>
      <userContext.Provider value={{ usersName: "ben" }}>
        <Nav />
        <Component {...pageProps} />
      </userContext.Provider>
    </provideAuth>
  );
}

export default MyApp;
