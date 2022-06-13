import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Row,
  Stack,
  Popover,
  OverlayTrigger,
  Alert,
  ListGroup,
  FormCheck,
  FormText,
} from "react-bootstrap";
import { IoPencilSharp, IoSaveSharp, IoCloseSharp, IoTrashSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject, updateProject } from "../../../store/projects/project.slice";
import {
  StyledProjectDetails,
  StyledFormLabel,
  StyledListGroupItem,
  RegionBadge,
  TurbineBadge,
} from "./ProjectDetails.styles";

const ProjectDetails = (props) => {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.projects);
  const allManagers = [
    "Jane Doe",
    "Jacob Riccardi",
    "John Rutledge",
    "Alissa Young",
    "Wendy Gaul",
    "Laura Quan",
    "Juanita Valdez",
    "Kristopher Hall",
  ];
  const [data, setData] = useState(props.data);
  const [editing, setEditing] = useState(false);
  const [invalidProps, setInvalidProps] = useState([]);

  const confirmRemovePopover = (
    <Popover id={`confirm-popover-${data.id}`}>
      <Popover.Body className="p-1 d-grid">
        <Alert variant="danger" className="mb-1">
          <strong>This action can't be undone.</strong>
        </Alert>
        <Button variant="danger" fluid onClick={() => dispatch(deleteProject(props.data))}>
          Confirm delete
        </Button>
      </Popover.Body>
    </Popover>
  );

  useEffect(() => {
    if (props.addProject) {
      setEditing(true);
    }
  }, [props.addProject]);

  const onChange = (event) => {
    let value;
    if (event.target.type === "checkbox") {
      if (event.target.name === "responsible_people") {
        value = data.responsible_people;
        if (event.target.checked) {
          value = value.concat([event.target.id]);
        } else {
          value = value.filter((item) => item !== event.target.id);
        }
      } else {
        value = event.target.checked;
      }
    } else if (event.target.type === "textarea") {
      event.preventDefault();
      value = event.target.value.split("\n");
    } else {
      event.preventDefault();
      value = event.target.value;
    }
    if (editing) {
      let newData = {};
      newData[event.target.name] = value;
      setData((data) => ({ ...data, ...newData }));
    }
  };

  const validateUniqueness = (propName) => {
    const otherData = mainData.filter((item) => item.id !== data.id);
    const value = data[propName].toString().toLowerCase();
    let isUnique = !otherData.some((item) => item[propName].toString().toLowerCase() === value);
    let invPropsHasKey = (key) => {
      if (invalidProps.length > 0) {
        return invalidProps.some((item) => item === propName);
      } else {
        return false;
      }
    };
    if (!isUnique && !invPropsHasKey(propName)) {
      setInvalidProps(invalidProps.concat([propName]));
    }
    if (isUnique && invPropsHasKey(propName)) {
      setInvalidProps(invalidProps.filter((item) => item !== propName));
    }
    return isUnique;
  };

  const validateDateFormat = () => {
    if (data.acquisition_date.match(/^(\d{4})-(\d{2})-(\d{2})$/)) {
      let a = data.acquisition_date.split("-");
      let y = a[0] >= 1900 && a[0] <= new Date().getFullYear();
      let m = a[1] >= 1 && a[1] <= 12;
      let d = a[2] >= 1 && a[2] <= 31;
      return y && m && d;
    } else {
      return false;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      confirm();
    }
  };

  const confirm = () => {
    if (props.addProject) {
      console.log(data);
      dispatch(addProject(data));
      setData(props.data);
      props.close();
    } else {
      setEditing(false);
      dispatch(updateProject(data));
    }
  };

  const cancel = () => {
    if (props.addProject) {
      props.close();
    } else {
      setEditing(false);
      setData(props.data);
    }
  };

  return (
    <StyledProjectDetails fluid className={editing ? "editing" : ""}>
      <Form onSubmit={onSubmit}>
        <Row className="p-1" xl={6} md={3} xs={2}>
          <Col>
            <StyledFormLabel htmlFor="project_number">Project number</StyledFormLabel>
            <FormControl
              disabled={!editing}
              plaintext={!editing}
              name="project_number"
              type="number"
              maxLength={3}
              value={data.project_number}
              onChange={onChange}
              isInvalid={
                !validateUniqueness("project_number") ||
                data.project_number.length > 3 ||
                data.project_number.length === 0
              }
              required
            />
            <FormControl.Feedback type="invalid">
              {data.project_number.length === 0
                ? "Project number is required."
                : data.project_number.length > 3
                ? " Project number is max. 3-digit."
                : !validateUniqueness("project_number")
                ? " Project number must be unique"
                : ""}
            </FormControl.Feedback>
          </Col>
          <Col>
            <StyledFormLabel htmlFor="project_name">Project name</StyledFormLabel>
            <FormControl
              disabled={!editing}
              plaintext={!editing}
              name="project_name"
              type="text"
              value={data.project_name}
              onChange={onChange}
              isInvalid={!validateUniqueness("project_name") || data.project_name.length === 0}
              required
            />
            <FormControl.Feedback type="invalid">
              {data.project_name.length === 0
                ? "Project name is required."
                : !validateUniqueness("project_name")
                ? "Project name must be unique."
                : ""}
            </FormControl.Feedback>
          </Col>
          <Col>
            <StyledFormLabel htmlFor="project_status">Project status</StyledFormLabel>
            {!editing ? (
              <FormControl disabled plaintext readOnly name="project_status" type="text" value={data.project_status} />
            ) : (
              <Form.Select
                aria-label="Project status"
                htmlFor="project_status"
                name="project_status"
                onChange={onChange}
                value={data.project_status}
                required
              >
                <option disabled>Select status</option>
                <option value="Acquisition">Acquisition</option>
                <option value="In Development">In Development</option>
                <option value="Execution">Execution</option>
              </Form.Select>
            )}
          </Col>
          <Col>
            <StyledFormLabel htmlFor="acquisition_date">Acquisition date</StyledFormLabel>
            <FormControl
              disabled={!editing}
              plaintext={!editing}
              name="acquisition_date"
              type="text"
              value={data.acquisition_date}
              onChange={onChange}
              isInvalid={data.acquisition_date.length === 0 || !validateDateFormat()}
              required
            />
            <FormControl.Feedback type="invalid">
              {data.acquisition_date.length === 0
                ? "Acq. date is required."
                : !validateDateFormat()
                ? "Date format: yyyy-mm-dd"
                : ""}
            </FormControl.Feedback>
          </Col>
          <Col>
            <StyledFormLabel htmlFor="operating">Operating</StyledFormLabel>
            <Form.Check
              disabled={!editing}
              type="switch"
              name="operating"
              defaultChecked={data.operating}
              label={data.operating ? "Active" : "Inactive"}
              onChange={onChange}
            />
          </Col>
          <Col>
            <StyledFormLabel htmlFor="technology">Technology</StyledFormLabel>
            {!editing ? (
              <FormControl disabled plaintext readOnly name="technology" type="text" value={data.technology} />
            ) : (
              <Form.Select
                aria-label="Technology"
                htmlFor="technology"
                name="technology"
                onChange={onChange}
                value={data.technology}
                required
              >
                <option disabled>Technology</option>
                <option value="Wind">Wind</option>
                <option value="PV">PV</option>
                <option value="CSP">CSP</option>
              </Form.Select>
            )}
          </Col>
        </Row>

        <Row className="p-1" md={3} xs={2}>
          <Col>
            <Stack>
              <div className="pb-2">
                <StyledFormLabel htmlFor="country">Country</StyledFormLabel>
                {!editing ? (
                  <FormControl disabled plaintext readOnly name="country" type="text" value={data.country} />
                ) : (
                  <Form.Select
                    aria-label="Country"
                    htmlFor="country"
                    name="country"
                    onChange={onChange}
                    value={data.country}
                    required
                  >
                    <option disabled>Country</option>
                    <option value="Germany">Germany</option>
                    <option value="Spain">Spain</option>
                    <option value="UK">UK</option>
                  </Form.Select>
                )}
              </div>
              <div>
                <StyledFormLabel htmlFor="regions">Regions</StyledFormLabel>
                <div hidden={!editing}>
                  <FormText>Separate regions by line break.</FormText>
                </div>
                {!editing ? (
                  <div>
                    {data.regions.map((item) => (
                      <RegionBadge key={item}>{item}</RegionBadge>
                    ))}
                  </div>
                ) : (
                  <FormControl
                    as="textarea"
                    rows={data.regions.length}
                    name="regions"
                    value={data.regions.join("\n")}
                    onChange={onChange}
                  />
                )}
              </div>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <div className="pb-2">
                <StyledFormLabel htmlFor="total_kW">Total power{editing ? " [kW]" : ""}</StyledFormLabel>
                <FormControl
                  disabled={!editing}
                  plaintext={!editing}
                  name="total_kW"
                  type={editing ? "number" : "text"}
                  step="500"
                  value={editing ? data.total_kW : `${data.total_kW} kW`}
                  onChange={onChange}
                />
              </div>
              <div>
                <StyledFormLabel htmlFor="wind_turbines">Wind turbines</StyledFormLabel>
                <div hidden={!editing}>
                  <FormText>Separate turbines by line break.</FormText>
                </div>
                {!editing ? (
                  <div>
                    {data.wind_turbines.map((item) => (
                      <TurbineBadge key={item}>{item}</TurbineBadge>
                    ))}
                  </div>
                ) : (
                  <FormControl
                    as="textarea"
                    rows={data.wind_turbines.length}
                    name="wind_turbines"
                    value={data.wind_turbines.join("\n")}
                    onChange={onChange}
                  />
                )}
              </div>
            </Stack>
          </Col>
          <Col xs={{ span: 12 }} className="mt-3">
            <StyledFormLabel htmlFor="responsible_people">Managers</StyledFormLabel>
            {!editing ? (
              <ListGroup variant="flush">
                {data.responsible_people.map((item) => (
                  <StyledListGroupItem key={item}>{item}</StyledListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <ListGroup variant="flush">
                {allManagers.map((item) => (
                  <StyledListGroupItem key={item}>
                    <FormCheck
                      className="d-inline-block me-2"
                      type="checkbox"
                      name="responsible_people"
                      id={item}
                      defaultChecked={data.responsible_people.some((someItem) => someItem === item)}
                      onChange={onChange}
                    />
                    {item}
                  </StyledListGroupItem>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>

        <Row xs={1}>
          <Col>
            <StyledFormLabel htmlFor="notes">Notes</StyledFormLabel>
            <FormControl
              disabled={!editing}
              as="textarea"
              style={{ fontSize: ".925rem" }}
              name="notes"
              rows={3}
              value={data.notes}
              onChange={onChange}
            />
          </Col>
        </Row>

        <hr />

        <Row className="p-1">
          <div className="d-flex justify-content-between">
            <Stack gap={2} direction="horizontal">
              <Button
                size="sm"
                variant={editing ? "primary" : "outline-primary"}
                disabled={editing}
                hidden={props.addProject}
                onClick={() => setEditing(true)}
              >
                <IoPencilSharp className="me-1 p-0" /> Edit
              </Button>
              <OverlayTrigger delay={180} trigger={["focus"]} placement="top" overlay={confirmRemovePopover}>
                <Button size="sm" variant="outline-secondary" hidden={editing || props.addProject}>
                  <IoTrashSharp className="me-1 p-0" /> Delete
                </Button>
              </OverlayTrigger>
            </Stack>
            <Stack gap={2} direction="horizontal">
              <Button
                type="submit"
                size="sm"
                variant="secondary"
                hidden={!editing}
                disabled={!editing || invalidProps.length > 0}
              >
                <IoSaveSharp className="me-1 p-0" /> {props.addProject ? "Add project" : "Update"}
              </Button>
              <Button
                size="sm"
                variant="outline-secondary"
                hidden={!editing}
                disabled={!editing}
                onClick={() => cancel()}
              >
                <IoCloseSharp className="me-1 p-0" /> Cancel
              </Button>
            </Stack>
          </div>
        </Row>
      </Form>
    </StyledProjectDetails>
  );
};

export default ProjectDetails;
