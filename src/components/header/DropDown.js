import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropDown = (props) => {
  const i = props.i;
  return (
    <NavDropdown.Item as={Link} to={"/course/" + i.link}>
      {i.title}
    </NavDropdown.Item>
  );
};

export default DropDown;
