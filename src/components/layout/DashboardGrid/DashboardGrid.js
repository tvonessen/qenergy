import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProjectsPerYearCard from "../../visualization/DashboardCards/ProjectsPerYearCard";
import ProjStatusCard from "../../visualization/DashboardCards/ProjStatusCard";
import TurbinesPerProjectCard from "../../visualization/DashboardCards/TurbinesPerProjectCard";

const DashboardGrid = (props) => {
  const projects = useSelector((state) => state.projects);

  return (
    <Container fluid>
      <Row md={2} xs={1}>
        <Col className="my-3">
          <ProjStatusCard projects={projects} />
        </Col>
        <Col className="my-3">
          <ProjectsPerYearCard projects={projects} />
        </Col>
      </Row>
      <Row xs={1}>
        <Col className="my-3">
          <TurbinesPerProjectCard projects={projects} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardGrid;
