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
                <button>Edit/Delete Survey</button>
              </Link>
            </li>
          </>
        )}
        {!usersName && (
        <li>
          <Link href="/survey">
            <button>Survey</button>
          </Link>
        </li>)}
      </ul>
    </nav>
  );
}

Nav;
