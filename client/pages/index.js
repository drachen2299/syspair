import Head from 'next/head'
import Link from 'next/link'
import { useContext } from "react";
import { userContext } from "../lib/context";



export default function Home() {
  const { usersName } = useContext(userContext);
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Syspair</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          Syspair
        </h1>
        <div className="items-center justify-center max-w-4xl mt-6 sm:w-full">
          {{usersName} ? 
          <>
        <h3>Compare Languages!</h3>
          <Link href="/language-select" passHref>
          <button className="bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50 justify-self-center mt-60">
            Compare!
          </button>
        </Link>
          </>
          :
          <>
        <h3>Take the Survey!</h3>
          <Link href="/survey" passHref>
          <button className="bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50 justify-self-center mt-60">
            Take the survey!
          </button>
        </Link>
          </>
        }
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        
      </footer>
    </div>
    </>
  )
}
