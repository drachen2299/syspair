import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { surveyResults, findUserByName } from "../../services";
import { useRouter } from "next/router";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
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
  const [selectedLang, setSelectedLang] = useState({});
  console.log(username)
  useEffect(async () => {
    //await surveyResults().then((fetchedSurvey) => setSurvey(fetchedSurvey));
    await findUserByName(username).then((fetchedName) => setUsersName(fetchedName));
    console.log(usersName)
  }, []);
  console.log(survey);
  console.log(query);
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-start-1 col-end-2 w-[45%]">
          <div>
            {/* users language language */}
            <img className="w-9/12" src={usersName?.language_id?.image} alt={usersName?.language_id?.image} />
          </div>
          <div className="inline-block">
            <Bar
              data={data}
              // width={100}
              // height={100}
              options={{
                maintainAspectRatio: true,
              }}
            />
          </div>
        </div>
        <div className="col-start-2 col-end-3">
          <div>
            {/* compare too language */}
          </div>
          <div className="inline-block">
            <Bar
              data={data}
              // width={400}
              // height={200}
              options={{
                maintainAspectRatio: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
