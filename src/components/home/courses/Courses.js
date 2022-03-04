import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cate from "../../../assets/data/cate.json";
import courses from "../../../assets/data/courses.json";
import "./courses.css";
import RatingStar from "../RatingStar";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <Container>
      <Row>
        <Col lg="4" sm="4" xs="12" md="4">
          Catagories
          {cate.map((i) => (
            <div>
              <p>
                {i.name} <span>{i.post}</span>
              </p>
            </div>
          ))}
        </Col>
        <Col>
          <Row lg="4" md="3" className="courses">
            {courses.map((i) => (
              <Card className="archon" as={Link} to={"/course/" + i.link}>
                <div className="shadower">
                  <Card.Img variant="top" src={i.src} />
                  <Card.Body>
                    <span style={{ width: "13px" }}>
                      <RatingStar rating={i.rating} key={Math.random()} />
                      <br />
                    </span>
                    <strong>{i.title}</strong> <p>৳ {i.price}</p>
                  </Card.Body>
                </div>
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
