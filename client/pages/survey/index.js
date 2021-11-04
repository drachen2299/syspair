import Link from "next/link";
import { createSurvey } from "../../services";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UserSurvey() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [industry, setIndustry] = useState("");
  const [languageId, setLanguageId] = useState("");
  const [typeOfDev, setTypeOfDev] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const surveyAnswers = {
      username,
      age_range: ageRange,
      industry,
      language_id: parseInt(languageId, 10),
      type_of_dev: typeOfDev,
    };
    await createSurvey(surveyAnswers);
    router.push({pathname: "/user-results", query: username});
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center h-[800px]">
        <h1 className="font-bold text-6xl">Survey</h1>
        <form
          className="grid grid-cols-2 gap-2 w-[600px] mx-auto mt-[100px]"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">Username:</label>
          <input
            className="inline-block"
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <h3>language:</h3>
          <select
            value={languageId}
            onChange={(e) => setLanguageId(e.target.value)}
          >
            <option value="" disabled selected>Choose a Language</option>
            <option value="1">Python</option>
            <option value="2">Ruby</option>
            <option value="3">Java</option>
            <option value="4">Javascript</option>
            <option value="5">C#</option>
            <option value="6">Rust</option>
          </select>
          <h3>Age-Range:</h3>
          <select
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
          >
            <option value="" disabled selected>Choose an Age Range</option>
            <option value="20-40">20-40</option>
            <option value="40-60">40-60</option>
          </select>
          <h3>Industry:</h3>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="" disabled selected>Choose an Industry</option>
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
          <select
            value={typeOfDev}
            onChange={(e) => setTypeOfDev(e.target.value)}
          >
            <option value="" disabled selected>Choose your Dev Type</option>
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
