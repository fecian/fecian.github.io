import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import courses from "../../../assets/data/courses.json";
import tutors from "../../../assets/data/tutors.json";

import RatingStar from "../RatingStar";

const Course = () => {
  const [course, setCourse] = useState({});
  const [image, setImage] = useState({});
  const params = useParams();
  useEffect(() => {
    courses.forEach((i, ind) => {
      if (i.link === params.link) {
        setCourse(i);
      }
      const tutor = c?.instructor?.map((i) => i);
      tutors?.find((i) => {
        return tutor?.map((j) => {
          if (i.nickname === j) setImage(i.src);
        });
      });
    });
  });

  const star = (
    <RatingStar rating={course?.rating} color1="#f1b500" color2="grey" />
  );
  const c = course;
  //Instructor image collection

  // console.log(e.messege);  }
  //End

  return (
    <Container fluid>
      <Row
        style={{ backgroundColor: "rgb(221, 221, 203)", padding: "12px 50px" }}
      >
        <Col sm="12" md="8" lg="8" xs="12">
          <Row>
            <h3>{c?.title}</h3>
            <p>{c?.details}</p>

            <p>
              <span>
                <span style={{ width: "2em" }}>{star}</span> ({c?.ratedBy})
              </span>
            </p>
            <div>Total {c.enrolled} students enrolled.</div>
            <div>Tution Platform: {c.platform}</div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingRight: " clamp(50px, 20%, 150px)",
              }}
            >
              <span>Last update : {c.update}</span>
              <span>Content Language : {c.language}</span>
              <span
                style={{
                  lineHeight: "3em",
                  margin: "0px",
                  backgroundColor: "#e8e8cc",
                  color: "grey",
                  padding: "0px 10px",
                  borderRadius: "5px",
                  fontWeight: "800",
                }}
              >
                <strong style={{ fontSize: "30px", fontWeight: "900" }}>
                  ৳
                </strong>{" "}
                {c.price}
              </span>
            </div>
            <div
              style={{
                borderRadius: "15px",
                margin: "5em auto",
                alignSelf: "center",
                width: "90%",
                fontWeight: "600",
                backgroundColor: "#e8e8cc",
                color: "black",
              }}
            >
              <h3 style={{ margin: "5px" }}>What you will learn</h3>
              {c?.outcome?.map((i) => (
                <pre style={{ display: "block", textTransform: "capitalize" }}>
                  {"    "} {i}
                </pre>
              ))}
            </div>
          </Row>
        </Col>
        <Col
          style={{
            borderRadius: "15px",
            backgroundImage:
              "linear-gradient(200deg, #56a74c ,#e8e8cc, #56a74c",
            padding: "16px 20px",
          }}
        >
          <Row style={{ margin: "1em" }}>
            <img src={c?.src} alt={c?.title} />
          </Row>
          <div>
            <Row
              style={{
                borderRadius: "10px",
                backgroundImage: "linear-gradient(40deg, #e8e8cc,#8dc07c",
                padding: "20px",
                position: "relative",
                top: "10px",
              }}
            >
              <h6>Instructor for this course:</h6>
              <Col>
                {" "}
                <img
                  src={image}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    zIndex: "4",
                  }}
                  alt=""
                />
              </Col>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ul>
                  {course?.instructor?.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
          <Row
            style={{
              paddingTop: "20px",
            }}
          >
            <h6>Availble Contents:</h6>
            <ul>
              {c?.content?.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </Row>
        </Col>
      </Row>
      <Row style={{ position: "relative" }}>
        <h4
          style={{
            position: "relative",
            margin: "0px auto",
            left: "30%",
            display: "block",
            padding: "10px 0 0 0 ",
          }}
        >
          Reviews
        </h4>
        <div
          style={{
            borderTop: "1px solid grey",
            borderLeft: "1px solid grey",
            borderRight: "1px solid grey",
            borderBottomWidth: "50%",
            borderBottom: "3px solid grey",
            width: "40%",
            margin: "20px auto",
          }}
        >
          <p
            style={{
              padding: "0px 10px",
              backgroundColor: "#e8e8cc",
              display: "inline-flex",
              margin: "0px 80%",
              position: "relative",
              top: "-15px",
            }}
          >
            {c?.review?.name}
          </p>
          <span
            style={{
              width: "1em",
              position: "relative",
              left: "41.4%",
              bottom: "13%",
            }}
          >
            <RatingStar
              rating={c?.review?.rating}
              color1="black"
              color2="grey"
            />
          </span>
          <p
            style={{
              textAlign: "center",
              position: "relative",
              bottom: "10%",
              fontWeight: "600",
            }}
          >
            {c?.review?.comment}
          </p>
        </div>
      </Row>
      <Row style={{ width: "40%", margin: "0px auto", padding: "20px auto" }}>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Type your comment..." />
            <Form.Text style={{ paddingLeft: "0.5em" }}>
              Your comment is public.
            </Form.Text>
          </Form.Group>
        </Form>
        <Button
          type="submit"
          size="sm"
          style={{
            width: "20%",
            margin: "0px 20px 0px auto",
            backgroundColor: "grey",
            borderColor: "gold",
            fontWeight: "700",
            color: "gold",
          }}
        >
          Submit
        </Button>
      </Row>
    </Container>
  );
};

export default Course;
