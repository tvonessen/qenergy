import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import AddProject from "../../components/forms/AddProject/AddProject";
import Header from "../../components/layout/Header/Header";
import ProjectsTable from "../../components/visualization/Table/ProjectsTable";

const MainData = () => {
  const data = useSelector((state) => state.projects);

  return (
    <>
      <Header title="Main database view" />
      <Container fluid>
        <p className="text-muted">
          Click on any table row to expand it, see project details and edit / delete the project.
        </p>
        <p className="text-muted">{`Total number of projects: ${data.length}`}</p>
      </Container>
      <ProjectsTable data={data} />
      <AddProject />
    </>
  );
};

export default MainData;
