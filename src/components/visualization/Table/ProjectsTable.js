import React, { useState } from "react";
import { columnsDef } from "./ProjectsTable.columns";
import DataTable from "react-data-table-component";
import ProjectDetails from "../../forms/ProjectDetails/ProjectDetails";
import { Container, Row, Col, InputGroup, Button, FormControl, Stack } from "react-bootstrap";
import { AiOutlineClose, AiOutlineFilter } from "react-icons/ai";

const ProjectsTable = (props) => {
  const data = props.data ? props.data : [];
  const [expandedRows, setExpandedRows] = useState([]);
  const [filter, setFilter] = useState("");
  const filteredProjects = data.filter(
    (item) => item.project_name && item.project_name.toLowerCase().includes(filter.toLowerCase())
  );

  const conditionalRowStyles = [
    {
      when: (row) => expandedRows.includes(row.id),
      style: {
        backgroundColor: "rgba(0,91,190,0.2)",
        borderColor: "rgba(0,91,190,0.5)",
      },
    },
  ];

  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const onClear = (event) => {
    event.preventDefault();
    setFilter("");
  };

  const onRowClicked = (row, event) => {
    console.log(row);
    if (expandedRows.includes(row.id)) {
      setExpandedRows(expandedRows.filter((item) => item !== row.id));
    } else {
      setExpandedRows(expandedRows.concat([row.id]));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 6 }} lg={{ span: 4, offset: 8 }}>
          <Stack direction="horizontal" className="align-content-middle">
            <h5 className="my-3 mx-1">
              <AiOutlineFilter />
            </h5>
            <InputGroup className="my-3 mx-1">
              <FormControl
                placeholder="Filter names"
                aria-label="Filter project names"
                onChange={onFilterChange}
                value={filter}
              />
              <Button variant="outline-secondary" id="clear-filter" onClick={onClear}>
                <AiOutlineClose />
              </Button>
            </InputGroup>
          </Stack>
        </Col>
      </Row>
      <Row>
        <DataTable
          responsive
          columns={columnsDef}
          defaultSortFieldId={"project_number"}
          data={filteredProjects}
          conditionalRowStyles={conditionalRowStyles}
          highlightOnHover
          expandableRows
          expandOnRowClicked
          onRowClicked={onRowClicked}
          expandableRowsComponent={ProjectDetails}
        />
      </Row>
    </Container>
  );
};

export default ProjectsTable;
