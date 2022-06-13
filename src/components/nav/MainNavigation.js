import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Offcanvas, NavDropdown, Button } from "react-bootstrap";
import { StyledNavBar, StyledNav } from "./MainNavigation.styles";
import { logout } from "../../store/auth/auth.slice";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";

const expand = "lg";
const exampleMenu = [
  { name: "Link 01", path: "/link01" },
  {
    name: "Link 02",
    path: "/link02",
    subItems: [
      { name: "SubLink 01", path: "/sublink01" },
      { name: "SubLink 02", path: "/sublink02" },
      { name: "SubLink 03", path: "/sublink03" },
    ],
  },
  { name: "Link 03", path: "/link03" },
];

const MainNavigation = (props) => {
  let menu = props.hierarchy ? props.hierarchy : exampleMenu;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(undefined);

  return (
    <StyledNavBar bg="light" expand={expand} className="flex-column align-items-start p-0 p-lg-3">
      <Navbar.Brand className="mx-1 d-none d-lg-block" href="#">
        <img alt="Q-Energy" width="150" height="50" src="https://qenergy.b-cdn.net/wp-content/uploads/Q-Energy.svg" />
        <hr />
        <h5 className="">Projects Monitor</h5>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setShow(true)}>
        <AiOutlineMenu />
      </Navbar.Toggle>

      <Navbar.Offcanvas
        show={show}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
        style={{ width: "180px" }}
      >
        <Offcanvas.Header
          className="align-items-end pb-0 flex-column"
          style={{ paddingBottom: "0", alignItems: "start" }}
        >
          <Button type="button" className="btn-close" onClick={() => setShow(false)}></Button>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="mt-3">
            <img
              alt="Q-Energy"
              width="120"
              height="40"
              src="https://qenergy.b-cdn.net/wp-content/uploads/Q-Energy.svg"
            />
            <hr />
            <h5 className="">Projects Monitor</h5>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column justify-content-between" style={{ flexGrow: "1" }}>
          <StyledNav>
            {menu.map((element) => {
              if (element.subItems) {
                return (
                  <NavDropdown key={element.path} title={element.name} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    {element.subItems.map((subItem) => {
                      let path = element.path + subItem.path;
                      return (
                        <NavDropdown.Item
                          key={path}
                          onClick={() => {
                            navigate(path);
                            setShow(false);
                          }}
                        >
                          &raquo; {subItem.name}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                );
              } else
                return (
                  <Nav.Link
                    active={props.location === element.path}
                    key={element.path}
                    onClick={() => {
                      navigate(element.path);
                      setShow(false);
                    }}
                  >
                    &raquo;&nbsp;&nbsp;&nbsp;{element.name}
                  </Nav.Link>
                );
            })}
          </StyledNav>
          <Button
            className="my-3 mx-2 w-75"
            variant="outline-primary"
            style={{ wordSpacing: "8px" }}
            key="logout"
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            <AiOutlineLogout /> Logout
          </Button>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </StyledNavBar>
  );
};

export default MainNavigation;
