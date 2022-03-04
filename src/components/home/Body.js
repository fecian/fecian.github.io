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
        fade
        style={{
          width: "90%",
          display: "block",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        <Caroemon
          alt="Teacher 1"
          src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/273697817_1339375459840934_7798569188435676402_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXqBHd08NugAX-zU6zt&_nc_ht=scontent.fdac31-1.fna&oh=00_AT-gmoKOE7bzKgssbcbmMOPcRWLz3qHeUeBSGsExd0j5yw&oe=62278294"
        />
        <Caroemon
          alt="Teacher 1"
          src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/269744074_3056709301248189_3053080420646646741_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Az5WlyVAoVgAX8B6E8P&_nc_ht=scontent.fdac31-1.fna&oh=00_AT-REQf95d0YnOFAb9iJI7iDp8DT6P8Xgx9vxKh2mZxSoQ&oe=6226B9DA"
        />
        <Caroemon
          alt="Teacher 1"
          src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/273697817_1339375459840934_7798569188435676402_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TXqBHd08NugAX-zU6zt&_nc_ht=scontent.fdac31-1.fna&oh=00_AT-gmoKOE7bzKgssbcbmMOPcRWLz3qHeUeBSGsExd0j5yw&oe=62278294"
        />
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
