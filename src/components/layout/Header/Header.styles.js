import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const FixedHeader = styled(Container)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  padding: 0.5rem 1.5rem;
  margin-left: 0;
  background-color: white;
  border-bottom: 1px solid #33334c;
  @media screen and (min-width: 992px) {
    left: 190px;
  }
`;
