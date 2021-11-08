import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { surveyResults, findUserByName, findLanguageByName } from "../../services";
import { useRouter } from "next/router";

const data = {
  labels: ["popularity", "Age Range", "Industry", "Dev Type"],
  datasets: [
    {
      label: "Language",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
    {
      label: "Language#2",
      data: [15, 21, 5, 7, 4, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Results() {
  const [survey, setSurvey] = useState([]);
  const router = useRouter();
  const query = Object.values(router.query);
  const username = query[0];
  const compareLang = query[1];
  const [usersName, setUsersName] = useState(null);
  const [selectedLang, setSelectedLang] = useState(null);
  console.log(username)
  useEffect(async () => {
    //await surveyResults().then((fetchedSurvey) => setSurvey(fetchedSurvey));
    await findUserByName(username).then((fetchedName) => setUsersName(fetchedName));
    await findLanguageByName(compareLang).then((fetchedName) => setSelectedLang(fetchedName));
    console.log(selectedLang);
    console.log(usersName)
  }, []);
  console.log(survey);
  console.log(query);
  return (
    <div className="text-center sm:space-y-10">
      <h1 className="text-6xl font-bold">
          Syspair
        </h1>
        <h3 className="text-4xl font-bold">{usersName?.language_id?.name} VS {selectedLang?.name}</h3>
      <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-5 md:gap-y-5 mx-auto lg:w-[800px] text-center sm:space-y-10">
        
          <div className="md:col-start-1 md:col-end-2">
            {/* users language language */}
            <h1>{usersName?.language_id?.name}</h1>
            <img className="w-[200px] h-[200px] mx-auto" src={usersName?.language_id?.image} alt={usersName?.language_id?.image} />
            <h2>{usersName?.language_id?.year_created}</h2>
            <h2>{usersName?.language_id?.author_id?.full_name}</h2>
            <h2>{usersName?.language_id?.type}</h2>
          </div>
          
        
        
          <div className="md:col-start-2 md:col-end-3">
            {/* compare too language */}
            <h1>{selectedLang?.name}</h1>
            <img className="w-[200px] h-[200px] mx-auto" src={selectedLang?.image} alt={selectedLang?.name} />
            <h2>{selectedLang?.year_created}</h2>
            <h2>{selectedLang?.author_id?.full_name}</h2>
            <h2>{selectedLang?.type}</h2>
          </div>
          <div className="inline-block sm:col-start-1 sm:col-end-3">
            <Bar
              data={data}
              width={300}
              height={150}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    
  );
}
