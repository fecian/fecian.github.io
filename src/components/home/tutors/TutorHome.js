import React from "react";
import { Row, CardGroup } from "react-bootstrap";
import Tutor from "./Tutor";
import tutors from "../../../assets/data/tutors.json";

const TutorHome = (props) => {
  const tutor = tutors.map((i) => {
    return <Tutor i={i} key={i._id.$oid} />;
  });
  return (
    <CardGroup>
      <Row
        md="3"
        sm="2"
        xs="1"
        lg="4"
        style={{ padding: "clamp(100px,15%,150px)", justifyContent: "center" }}
      >
        {tutor}
      </Row>
    </CardGroup>
  );
};

export default TutorHome;
