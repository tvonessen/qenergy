import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const AddProject = (props) => {
  const [show, setShow] = useState(false);

  const emptyProject = {
    id: null,
    project_name: "",
    project_status: "Acquisition",
    acquisition_date: "",
    operating: false,
    technology: "Wind",
    project_number: "",
    country: "Germany",
    regions: [],
    wind_turbines: [],
    total_kW: 0,
    responsible_people: [],
    notes: "",
  };

  const close = () => {
    setShow(false);
  };

  return (
    <Container fluid className="mt-3">
      <Button variant="primary" onClick={() => setShow(true)}>
        Add new project
      </Button>

      <Modal show={show} backdrop="static" fullscreen="lg-down" size="xl" onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Add new project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectDetails data={emptyProject} addProject close={close} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AddProject;
