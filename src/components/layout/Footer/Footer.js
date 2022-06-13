import React from "react";
import { Stack, Button, Row, Col } from "react-bootstrap";
import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter fluid>
      <Row className="text-center px-0">
        <Col xs={{ span: 12 }} md={{ span: 8, order: 2 }} className="m-0 p-0">
          <Button variant="link" href="">
            Instructions
          </Button>
          <span>|</span>
          <Button variant="link" href="mailto:tobias@hybit.media">
            Contact admin
          </Button>
          <span>|</span>
          <Button variant="link" href="">
            Feedback
          </Button>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 4, order: 1 }} className="m-0 p-0" style={{ verticalAlign: "middle" }}>
          <Button variant="link" href="https://qed.de">
            <strong>{`QENERGY ${new Date().getFullYear()}`}</strong>
          </Button>
        </Col>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
