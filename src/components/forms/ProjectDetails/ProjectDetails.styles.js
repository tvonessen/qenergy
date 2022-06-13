import styled from "styled-components";
import { Badge, Container, FormLabel, ListGroupItem } from "react-bootstrap";

export const StyledProjectDetails = styled(Container)`
  width: calc(100%);
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  background-color: #fafafa;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  transition: 200ms;
  &.editing {
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left: 4px solid #075da7;
  }
  & form {
    margin: 0 0.5rem 0.5rem;
  }
  & div.col {
    margin-top: 1rem;
  }
  & .form-switch {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  & hr {
    color: #e0e0e0;
    opacity: 1;
  }
`;

export const StyledFormLabel = styled(FormLabel)`
  font-weight: 700;
  color: #3f3f3f;
  margin-bottom: 0;
`;

export const StyledListGroupItem = styled(ListGroupItem)`
  background-color: transparent;
  padding: 0.25rem 0.5rem;
  font-size: 0.9rem;
`;

export const RegionBadge = styled(Badge)`
  background-color: transparent !important;
  border: 1px solid #33334c;
  color: #1f1f1f;
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 0.5rem 0.5rem 0;
`;

export const TurbineBadge = styled(Badge)`
  background-color: #33334c !important;
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 0.5rem 0.25rem 0;
`;
