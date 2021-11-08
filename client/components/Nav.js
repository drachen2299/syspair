import Link from "next/link";
import { useRouter } from "next/router";
import useDarkMode from "../lib/hooks";

export default function Nav() {
  const username = null;
  const [colorTheme, setTheme] = useDarkMode();
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push({pathname: '/user-results', query: username});
  }
  return (
    <><nav className="dark:bg-gray-900 bg-indigo-200">
      <ul className=" box-border p-1 flex justify-between w-[100%]">
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        {username && (
          <>
            <button onClick={handleClick}>Your Survey</button>
            <li></li>
          </>
        )}
        {!username && (
          <>

          </>
        )}
        <li>
          <a href="https://github.com/drachen2299/syspair">
            <img src="/images/iconmonstr-github-1.svg" alt="Github" />
          </a>
        </li>
      </ul>
      <div>
        {colorTheme === "light" ? (
          <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ) : (
          <svg
            onClick={() => setTheme("dark")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}

      </div>
    </nav></>
      );
    }


Nav;
