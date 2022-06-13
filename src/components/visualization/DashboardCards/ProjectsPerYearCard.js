import { Card } from "react-bootstrap";
import { Chart } from "react-chartjs-2";

const ProjectsPerYearCard = (props) => {
  const calcLabels = () => {
    let labels = [];
    const thisYear = parseInt(new Date().getFullYear());
    for (let i = 0; i < 20; i++) {
      labels.push(thisYear - i);
    }
    return labels.reverse();
  };

  const acqsPerYear = () => {
    const l = calcLabels();
    let a = new Array(l.length).fill(0);
    props.projects.forEach((proj) => {
      let year = parseInt(proj.acquisition_date.split("-")[0]);
      if (l.includes(year)) {
        a[l.indexOf(year)] += 1;
      }
    });
    return a;
  };

  const totalAcqs = () => {
    const a = acqsPerYear();
    let b = new Array(a.length).fill(0);
    a.reduce((prev, curr, idx) => {
      return (b[idx] = prev + curr);
    }, 0);
    return b;
  };

  const data = {
    labels: calcLabels(),
    datasets: [
      {
        type: "bar",
        label: "Acquisitions per year",
        backgroundColor: "rgba(0,45,95,0.3)",
        borderColor: "rgba(0,45,95,0.75)",
        borderWidth: 1,
        data: acqsPerYear(),
      },
      {
        type: "line",
        label: "Total acquisitions",
        borderColor: "rgba(0,91,190,1)",
        backgroundColor: "rgba(0,91,190,1)",
        pointStyle: "rect",
        borderWidth: 1,
        fill: false,
        data: totalAcqs(),
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1.67,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
        },
      },
    },
  };

  return (
    <Card>
      <Card.Header>
        <h4>Project acquisition timeline</h4>
        <p className="mb-0">Yearly and cumulated project acquisitions for the past 20 years.</p>
        <p className="mb-0 text-muted">{`Total number: ${props.projects.length}`}</p>
      </Card.Header>
      <Card.Body>
        <Chart type="bar" data={data} options={options} />
      </Card.Body>
    </Card>
  );
};

export default ProjectsPerYearCard;
