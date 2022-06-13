import React from "react";
import { FixedHeader } from "./Header.styles";

const Header = (props) => {
  return (
    <FixedHeader fluid className="fixed-top">
      <h1>{props.title}</h1>
    </FixedHeader>
  );
};

export default Header;
