import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { surveyResults, findUserByName, findLanguageByName } from "../../services";
import { useRouter } from "next/router";


export default function Results() {
  const [survey, setSurvey] = useState([]);
  const router = useRouter();
  const query = Object.values(router.query);
  const username = query[0];
  const compareLang = query[1];
  const [usersName, setUsersName] = useState(null);
  const [selectedLang, setSelectedLang] = useState(null);
  console.log(username)
  const doughnutData = {
  labels: ['20-40', '40-60'],
  datasets: [
    {
      data: [64, 36],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    }
  ]
}
const data = {
  labels: ["popularity", "Age Range", "Industry", "Dev Type"],
  datasets: [
    {
      label: "Language",
      data: [48, 49, 56, 42],
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
      data: [80, 25, 35, 47],
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
      <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-5 md:gap-y-5 mx-auto lg:w-[800px] text-center h-screen">
        
          <div className="md:col-start-1 md:col-end-2">
            {/* users language language */}
            <h1>{usersName?.language_id?.name}</h1>
            <img className="w-64 h-64 mx-auto" src={usersName?.language_id?.image} alt={usersName?.language_id?.image} />
            <h2>{usersName?.language_id?.year_created}</h2>
            <h2>{usersName?.language_id?.author_id?.full_name}</h2>
            <h2>{usersName?.language_id?.type}</h2>
          </div>
          
        
        
          <div className="md:col-start-2 md:col-end-3">
            {/* compare too language */}
            <h1>{selectedLang?.name}</h1>
            <img className="w-64 h-64 mx-auto" src={selectedLang?.image} alt={selectedLang?.name} />
            <h2>{selectedLang?.year_created}</h2>
            <h2>{selectedLang?.author_id?.full_name}</h2>
            <h2>{selectedLang?.type}</h2>
          </div>
          <div className="inline-block sm:col-start-1 sm:col-end-3 h-auto w-screen mx-auto">
            <Bar
              data={data}
            />
          </div>
          <div className="inline-block mx-auto sm:col-start-1 sm:col-end-3">
            <Doughnut data={doughnutData}/>
          </div>
        </div>
      </div>
    
  );
}
