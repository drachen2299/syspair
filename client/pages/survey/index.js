import Link from "next/link";
import { createSurvey } from "../../services";
import { useState } from "react";
import { useRouter } from "next/router";
const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}
export default function UserSurvey() {
  
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [industry, setIndustry] = useState("");
  const [languageId, setLanguageId] = useState(0);
  const [typeOfDev, setTypeOfDev] = useState("");
  const handleSubmit = preventDefault(async () => {
    const surveyAnswers = {
      username,
      age_range: ageRange,
      industry,
      language_id: languageId,
      type_of_dev: typeOfDev,
    };
    await createSurvey(surveyAnswers);
    router.push('/user-results');
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center h-[800px]">
        <h1 className="font-bold text-6xl">Survey</h1>
        <form
          className="grid grid-cols-2 gap-2 w-[600px] mx-auto mt-[100px]"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">Username:</label>
          <input className="inline-block" type="text" placeholder="username" />
          <h3>language:</h3>
          <select onChange={(e) => setLanguageId(parseInt(e.target.value, 10))}>
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
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Data Science">Data Science</option>
            <option value="Industrial">Industrial/Mechanical</option>
            <option value="Services">Services</option>
            <option value="Health Care">Health Care</option>
            <option value="Student">Student</option>
            <option value="other">Other</option>
          </select>
          <h3>Employment Status:</h3>
          <select name="employment status" id="employment status">
            <option value="enthusiast">Enthusiast</option>
            <option value="professional">Professional</option>
          </select>

          <button
            className="bg-purple-600 text-3xl col-span-2 rounded-md box-border p-2 text-gray-50 justify-self-center mt-60"
            type="submit"
          >
            Submit Survey
          </button>
        </form>
      </div>
    </div>
  );
}
