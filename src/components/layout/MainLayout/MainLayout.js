import React from "react";
import { StyledFlexContainer } from "./MainLayout.styles";

const MainLayout = ({ children }) => {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
};

export default MainLayout;
