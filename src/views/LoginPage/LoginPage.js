import React from "react";
import { Container, Card } from "react-bootstrap";
import LoginForm from "../../components/forms/Login/LoginForm";

const LoginPage = (props) => {
  return (
    <Container fluid className="h-75 d-flex justify-content-center align-items-center">
      <Card style={{ width: "30rem", maxWidth: "100%" }}>
        <Card.Header className="text-center p-3">
          <img alt="Q-Energy" width="210" height="67" src="https://qenergy.b-cdn.net/wp-content/uploads/Q-Energy.svg" />
        </Card.Header>
        <Card.Body className="text-center">
          <h4 className="p-1">Log in</h4>
          <LoginForm />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;
