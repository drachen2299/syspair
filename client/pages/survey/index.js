import Link from "next/link";

export default function UserSurvey() {

  const handleClick = async () => {

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center h-[800px]">
        <h1 className="font-bold text-6xl">Survey</h1>
        <form className="grid grid-cols-2 gap-2 w-[600px] mx-auto mt-[100px]">
          <label htmlFor="username">Username:</label>
          <input className="inline-block" type="text" placeholder="username"/>
          <h3>language:</h3>
          <select id="programming-languages">
            <option value="python">Python</option>
            <option value="ruby">Ruby</option>
            <option value="java">Java</option>
            <option value="javascript">Javascript</option>
            <option value="c#">C#</option>
            <option value="rust">Rust</option>
          </select>
          <h3>Age-Range:</h3>
          <select name="age-range" id="age-range">
            <option value="20-40">20-40</option>
            <option value="40-60">40-60</option>
          </select>
          <h3>Industry:</h3>
          <select name="industry" id="industry">
            <option value="information technology">Information Technology</option>
            <option value="data science">Data Science</option>
            <option value="Industrial">Industrial/Mechanical</option>
            <option value="Service">Service</option>
            <option value="health care">Health Care</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
          <h3>Employment Status:</h3>
          <select name="employment status" id="employment status">
            <option value="enthusiast">Enthusiast</option>
            <option value="professional">Professional</option>
          </select>
          <Link href="/results" passHref>
          <button className="bg-purple-600 text-3xl col-span-2 rounded-md box-border p-2 text-gray-50 justify-self-center mt-60" onClick={handleClick}>
            Submit Survey
          </button>
        </Link>
        </form>
        
      </div>
    </div>
  );
}