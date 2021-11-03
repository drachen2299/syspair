import Link from "next/link";

export default function UserSurvey() {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center h-[800px]">
        <h1 className="font-bold text-6xl">Survey</h1>
        <form>
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
        </form>
        <Link href="/results" passHref>
          <button className="bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50 justify-self-center mt-60">
            Submit Survey
          </button>
        </Link>
      </div>
    </div>
  );
}
