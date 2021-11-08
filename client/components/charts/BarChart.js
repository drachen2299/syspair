import { Bar } from "react-chartjs-2";

export default function BarChart() {
  data = {
    labels: ["popularity", "Age Range", "Industry", "type_of_dev"],
    datasets: [
      {
        label: "Python",
        data: [48, 45, 48, 5],
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
  return (
    <>
    <Bar 
      
    />
    </>
  )
}