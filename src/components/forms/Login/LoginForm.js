import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Stack, Button, Overlay, Tooltip } from "react-bootstrap";
import { login } from "../../../store/auth/auth.slice";

const LoginForm = (props) => {
  const [valid, setValid] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);
  const toolTip = useRef(null);
  const dispatch = useDispatch();

  const onChange = (event) => {
    event.preventDefault();
    const newVal = event.target.value;
    switch (event.target.name) {
      case "username":
        setUserName(newVal);
        setValid(newVal && password);
        return;
      case "password":
        setPassword(newVal);
        setValid(newVal && username);
        return;
      default:
        return;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <Form onSubmit={onSubmit}>
      <Stack gap={2}>
        <Form.Control
          required
          type="text"
          name="username"
          placeholder="username"
          className="text-center"
          onChange={onChange}
          value={username}
          autoComplete="on"
        />
        <Form.Control
          required
          autoComplete="off"
          type="password"
          name="password"
          placeholder="**********"
          className="text-center"
          onChange={onChange}
        />
        <div className="d-flex flex-row justify-content-between align-items-center">
          <Button
            type="button"
            variant="link"
            onClick={() => setShowToolTip(!showToolTip)}
            ref={toolTip}
            className="d-block px-2"
          >
            Forgot password
          </Button>
          <Button className="px-5" type="submit" variant={valid ? "primary" : "secondary"} disabled={!valid}>
            Log in
          </Button>
          <Overlay target={toolTip.current} show={showToolTip} placement="bottom">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Think of something. &nbsp; ;-)
              </Tooltip>
            )}
          </Overlay>
        </div>
      </Stack>
    </Form>
  );
};

export default LoginForm;
