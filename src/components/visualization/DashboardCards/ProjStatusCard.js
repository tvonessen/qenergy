import React from "react";
import { Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

const ProjStatusCard = (props) => {
  const collectStatus = (projects) => {
    return projects.reduce(
      (prev, curr) => {
        curr.project_status === "Acquisition"
          ? (prev[0] += 1)
          : curr.project_status === "In Development"
          ? (prev[1] += 1)
          : (prev[2] += 1);
        return prev;
      },
      [0, 0, 0]
    );
  };

  const data = {
    labels: ["Acquisition", "In Developement", "Execution"],
    datasets: [
      {
        label: "Project status",
        data: collectStatus(props.projects),
        backgroundColor: ["rgba(0,0,0,0.1)", "rgba(0,45,95,0.25)", "rgba(0,91,190, 0.4)"],
        borderColor: ["rgba(0,0,0,0.6)", "rgba(0,45,95,0.75)", "rgba(0,91,190, 0.9)"],
        borderWidth: 1,
        hoverOffset: 10,
        radius: "90%",
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1.67,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 20,
        },
      },
    },
  };

  return (
    <Card>
      <Card.Header>
        <h4>Project status overview</h4>
        <p className="mb-0">Summarized amounts of projects per status</p>
        <p className="mb-0 text-muted">{`Total number: ${props.projects.length}`}</p>
      </Card.Header>
      <Card.Body>
        <Doughnut data={data} options={options}></Doughnut>
      </Card.Body>
    </Card>
  );
};

export default ProjStatusCard;
