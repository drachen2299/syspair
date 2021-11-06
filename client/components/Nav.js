import Link from "next/link";

export default function Nav() {
  const username = null;
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <button>Home</button>
          </Link>
        </li>
        {username && (
          <>
            <li></li>
            <li></li>
          </>
        )}
        {!username && (
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
