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
          <select id="languages">
            <option value="1">Python</option>
            <option value="2">Ruby</option>
            <option value="3">Java</option>
            <option value="4">Javascript</option>
            <option value="5">C#</option>
            <option value="6">Rust</option>
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
            <option value="Services">Services</option>
            <option value="health care">Health Care</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </select>
          <h3>Employment Status:</h3>
          <select name="employment status" id="employment status">
            <option value="enthusiast">Enthusiast</option>
            <option value="professional">Professional</option>
          </select>
          <Link href="/user-results" passHref>
          <button className="bg-purple-600 text-3xl col-span-2 rounded-md box-border p-2 text-gray-50 justify-self-center mt-60" onClick={handleClick}>
            Submit Survey
          </button>
        </Link>
        </form>
        
      </div>
    </div>
  );
}
