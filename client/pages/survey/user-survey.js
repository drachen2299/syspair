export default function UserSurvey() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="flex flex-col items-center h-[800px]">
        <h1 className="font-bold text-6xl">Survey</h1>
        <button className="bg-purple-600 text-3xl rounded-md box-border p-2 text-gray-50 justify-self-center mt-60" onClick={fetchSurvey}>
          Take the survey!
        </button>
      </div>
    </div>
  );
}
