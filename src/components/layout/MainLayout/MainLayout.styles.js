import styled from "styled-components";
import { Container } from "react-bootstrap";

export const StyledFlexContainer = styled.div`
  display: flex !important;
  width: 100% !important;
  margin: 0;
  padding: 0;
  & #main-content {
    margin: 5rem 0 2rem 0;

    @media screen and (min-width: 992px) {
      margin-left: 180px;
    }
  }
`;
