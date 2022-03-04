import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./tutor.css";
const Tutor = (props) => {
  return (
    <Card className="tutor" as={Link} to={`/t/${props?.i?.nickname}`}>
      <Card.Img src={props?.i?.src} />
      <h6 id="title">{props?.i?.name}</h6>
    </Card>
  );
};

export default Tutor;
