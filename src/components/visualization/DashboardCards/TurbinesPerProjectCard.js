import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

const TurbinesPerProjectCard = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 720;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const xScales = {
    x: {
      title: {
        text: "Number of turbines",
        display: true,
      },
      type: "linear",
      display: true,
      position: "bottom",
    },
    x1: {
      title: {
        text: "Total power [kW]",
        display: true,
      },
      type: "linear",
      display: true,
      position: "top",
      grid: {
        drawOnChartArea: false,
      },
    },
  };

  const yScales = {
    y: {
      title: {
        text: "Number of turbines",
        display: true,
      },
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      title: {
        text: "Total power [kW]",
        display: true,
      },
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  };

  const data = {
    datasets: [
      {
        type: "bar",
        label: "Wind turbines",
        backgroundColor: "rgba(0,45,95,0.3)",
        borderColor: "rgba(0,45,95,0.75)",
        borderWidth: 1,
        data: props.projects.map((project) => {
          if (width > breakPoint) {
            return { y: project.wind_turbines.length, x: project.project_name };
          } else return { x: project.wind_turbines.length, y: project.project_name };
        }),
        xAxisID: "x",
        yAxisID: width > breakPoint ? "y" : "y1",
      },
      {
        type: "bar",
        label: "Total power [kW]",
        backgroundColor: "rgba(0,91,190,0.3)",
        borderColor: "rgba(0,91,190,0.75)",
        borderWidth: 1,
        data: props.projects.map((project) => {
          if (width > breakPoint) {
            return { y: project.total_kW, x: project.project_name };
          } else return { x: project.total_kW, y: project.project_name };
        }),
        xAxisID: width > breakPoint ? "x" : "x1",
        yAxisID: width > breakPoint ? "y1" : "y1",
      },
    ],
  };

  const options = {
    indexAxis: width > breakPoint ? "x" : "y",
    responsive: true,
    aspectRatio: width > breakPoint ? 2.5 : 0.45,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
        },
      },
    },
    scales: width > breakPoint ? yScales : xScales,
  };

  return (
    <Card>
      <Card.Header>
        <h4>Total wind turbines per project</h4>
        <p className="mb-0">Yearly and cumulated project acquisitions for the past 20 years.</p>
        <p className="mb-0 text-muted">{`Total number of turbines: ${props.projects.reduce((a, c) => {
          return a + c.wind_turbines.length;
        }, 0)}`}</p>
        <p className="mb-0 text-muted">{`Total amount of power: ${props.projects.reduce((a, c) => {
          return a + parseInt(c.total_kW);
        }, 0)} kW`}</p>
      </Card.Header>
      <Card.Body>
        <Bar data={data} options={options} />
      </Card.Body>
    </Card>
  );
};

export default TurbinesPerProjectCard;
