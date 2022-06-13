import React from "react";
import { Container } from "react-bootstrap";
import DashboardGrid from "../../components/layout/DashboardGrid/DashboardGrid";
import Header from "../../components/layout/Header/Header";

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      <Container fluid>
        <DashboardGrid />
      </Container>
    </>
  );
};

export default Dashboard;
