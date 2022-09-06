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

const amdata = [
  {
    category: "Research",
    value1: 1000,
    value2: 588,
  },
  {
    category: "Marketing",
    value1: 1200,
    value2: 1800,
  },
  {
    category: "Sales",
    value1: 850,
    value2: 1230,
  },
];

function App() {
  const [data, setData] = useState(initial);
  const [adata, setAData] = useState(amdata);

  const randomize = () => {
    let random = [
      {
        category: "Research",
        value1: Math.random() * 1000,
        value2: 588,
      },
      {
        category: "Marketing",
        value1: Math.random() * 1000,
        value2: 1800,
      },
      {
        category: "Sales",
        value1: Math.random() * 1000,
        value2: 1230,
      },
    ];

    setAData(random);
  };

  return (
    <div className="App">
      <Chart data={data} />
      <hr />
      {JSON.stringify(adata)}
      <button onClick={randomize}>randomize</button>
      <Amchart data={adata} />
    </div>
  );
}

export default App;
