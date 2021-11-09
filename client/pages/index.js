import Head from "next/head";
import Link from "next/link";


export default function Home() {
  console.log(process.env.PROD_URL)
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-900 bg-white dark:text-gray-400">
        <Head>
          <title>Syspair</title>
        </Head>

        <main className="flex flex-col items-center justify-around w-full flex-1 px-20 text-center space-y-10">
          <h1 className=" text-4xl sm:text-6xl font-bold">
            Welcome to Syspair
          </h1>
          <div className="items-center justify-center max-w-4xl mt-6 sm:w-full">
            <p>
              Syspair is a tool, that allows you to compare to programming
              languages. it will aggregate data based on other users responses -
              and give you a breakdown of each languages strengths and
              weaknesses.
            </p>
          </div>
          <div className="items-center justify-center max-w-4xl mt-6 sm:w-full space-y-10">
            <h3>take the survey to get started!</h3>
            <Link href="/survey" passHref>
              <button className="bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50 justify-self-center">
                Take the survey!
              </button>
            </Link>
          </div>
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
      </div>
    </>
  );
}
