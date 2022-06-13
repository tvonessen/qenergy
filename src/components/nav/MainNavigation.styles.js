import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Offcanvas } from "bootstrap";

export const StyledNavBar = styled(Navbar)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: block;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f5f5f5;
  border-right: 1px solid #eee;

  & .navbar-toggler {
    border-color: #005bbe;
    color: #005bbe;
    position: fixed;
    right: 15px;
    top: 13px;
  }

  & .offcanvas {
    left: 1rem;
    top: 150px;
  }

  & .offcanvas.offcanvas-end {
    width: 180px;
  }

  & .nav-link {
  }

  & .nav-link.active {
    font-weight: 700;
    color: #005bbe !important;
  }
`;

export const StyledNav = styled(Nav)`
  position: inherit;
  display: flex;
  flex-direction: column !important;
  margin-left: 1rem;
  @media screen and (min-width: 992px) {
    margin-left: 0;
    text-align: left;
  }
`;

export const StyledOffcanvas = styled(Offcanvas)`
  width: 180px;
`;
