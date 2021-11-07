import Link from "next/link";
import { useContext } from "react";
import { userContext } from "../lib/context";
export default function Nav() {
  const { usersName } = useContext(userContext);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        {usersName && (
          <>
            <li>
              <Link href={`/${usersName}`}>
                <button>User Survey</button>
              </Link>
            </li>
          </>
        )}
        {!usersName && (
        <li>
          <Link href="/enter">
            <button>Login</button>
          </Link>
        </li>)}
      </ul>
    </nav>
  );
}

Nav;
