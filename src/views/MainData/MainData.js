import React from "react";
import { useSelector } from "react-redux";
import AddProject from "../../components/forms/AddProject/AddProject";
import Header from "../../components/layout/Header/Header";
import ProjectsTable from "../../components/visualization/Table/ProjectsTable";

const MainData = () => {
  const data = useSelector((state) => state.projects);

  return (
    <>
      <Header title="Main Data" />
      <ProjectsTable data={data} />
      <AddProject />
    </>
  );
};

export default MainData;
