import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledFooter = styled(Container)`
  margin-top: 1.5rem;
  padding: 1rem 0;
  border-radius: 5px 5px 0 0;
  background-color: #33334c;
  color: white;
  max-width: 100vw !important;
  overflow: hidden;

  & span {
    color: #005bbe;
  }

  & a {
    font-size: 0.9rem;
    color: white;
    text-decoration: none;

    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
