import Link from "next/link";

export default function Nav() {
  const username = null;
  return (
    <nav>
      <ul className=" box-border p-1 inline-block flex justify-between w-[100%]">
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
          <><li>
            <Link href="/survey">
              <button>Survey</button>
            </Link>
          </li><li>
              <a href="https://github.com/drachen2299/syspair">
                <img src="/images/iconmonstr-github-1.svg" alt="Github" />
              </a>
            </li></>
        )}
      </ul>
    </nav>
  );
}

Nav;
