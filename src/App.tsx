import Amchart from "./amchart";
import Chart from "./Chart";
import { faker } from "@faker-js/faker";
import { useState } from "react";
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const initial = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
function App() {
  const [data, setData] = useState(initial);

  return (
    <div className="App">
      <Chart data={data} />
      <hr />

      <Amchart />
    </div>
  );
}

export default App;
