import React from "react";
import { Col, Container, Row, Carousel, Button } from "react-bootstrap";
import Caroemon from "./tutors/Caroemon";
import CourseCard from "./CourseCard";
import Instructors from "./Instructors";
import OurCourses from "./OurCourses";
import tutors from "../../assets/data/tutors.json";
import courses from "../../assets/data/courses.json";
import "./body.css";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const navigate = useNavigate();
  var lucky3 = [];
  while (lucky3.length < 3) {
    var r = Math.floor(Math.random() * tutors.length);
    if (lucky3.indexOf(r) === -1) lucky3.push(r);
  }

  return (
    <div>
      <OurCourses>
        Lets have a <span> Dream</span>
      </OurCourses>{" "}
      <Carousel
        style={{
          width: "90%",
          display: "block",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        <Caroemon
          alt="Teacher 1"
          src="https://media.istockphoto.com/photos/teaching-and-technology-picture-id1340543907?b=1&k=20&m=1340543907&s=170667a&w=0&h=apo6jLzNsK0BdKVHOqSF9kAg-YLCNxSDEc7IULcUw5A="
        />
        <Caroemon
          alt="Teacher 1"
          src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />{" "}
      </Carousel>
      <OurCourses>
        List of our <span>most popular</span> courses...
      </OurCourses>
      <Container>
        <Row>
          {lucky3.map((i) => (
            <Col md="4" sm="12">
              <CourseCard {...courses[i]} />
            </Col>
          ))}
        </Row>
        <Button
          style={{ width: "100%", margin: "30px 0", letterSpacing: ".3em" }}
          onClick={() => navigate("/courses")}
          variant="success"
        >
          Show all courses
        </Button>
        <Row>
          <OurCourses>
            Our <span>specialized </span> Instructors...
          </OurCourses>
        </Row>
        <Row>
          {lucky3.map((i) => {
            return (
              <Col md="4" sm="12">
                <Instructors i={tutors[i]} key={tutors[i]._id?.$oid} />
              </Col>
            );
          })}
        </Row>
        <Button
          style={{ width: "100%", margin: "10px 0", letterSpacing: ".3em" }}
          onClick={() => navigate("/tutors")}
          variant="success"
        >
          Show all tutors
        </Button>
      </Container>
    </div>
  );
};

export default Body;
