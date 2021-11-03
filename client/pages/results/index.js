import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { surveyResults } from "../../services";

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

  useEffect(() => {
    surveyResults().then((fetchedSurvey) => setSurvey(fetchedSurvey))

    console.log(survey)
  }, [])
  return (
    <div>
      <h2>Bar Example (custom size)</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-start-1 col-end-2 inline-block">
          <Bar
            data={data}
            width={200}
            height={100}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>
        <div className="col-start-2 col-end-3 inline-block">
          <Bar
            data={data}
            width={400}
            height={200}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
