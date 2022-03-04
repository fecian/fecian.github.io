import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import tutors from "../../../assets/data/tutors.json";
import "./tutor-overview.css";
const TutorOverview = (props) => {
  const [tutor, setTutor] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    const t = tutors.map((i) => {
      if (i.nickname === params.nickname) {
        setTutor(i);
      }
    });
    document.title = `${tutor.name} | Tutor`;
  });

  return (
    <Container className="tutor-overview">
      <Button
        variant="secondary"
        style={{ position: "sticky ", top: "10%" }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <h4
        style={{
          textAlign: "center",
          letterSpacing: "0.15em",
          padding: "10px",
        }}
      >
        {tutor.name}
      </h4>
      <Row className="img-row">
        <img className="image" src={tutor.src} alt="" />
      </Row>
      <Row>
        <Col style={{ padding: "1.6em" }}>
          <p className="name">
            Full Name: {tutor.name} ({tutor.nickname})
          </p>
          <p className="skill">
            Skilled In: <span>{tutor.skilledIn}</span>
          </p>
          <p className="from">
            Institution: <span>{tutor.from}</span>
          </p>
          <p className="hometown">Hometown: {tutor.hometown}</p>
          <p className="about">
            About {tutor.nickname}: <small>{tutor.details}</small>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TutorOverview;
