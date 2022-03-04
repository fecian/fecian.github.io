import React from "react";
import { Button, Card } from "react-bootstrap";
import RatingStar from "./RatingStar";
import "./course-card.css";
import { Link, useNavigate } from "react-router-dom";

const CourseCard = (props) => {
  const navigate = useNavigate();
  const star = (
    <RatingStar rating={props.rating} color1="#f1b500" color2="grey" />
  );
  return (
    <div className="course-card">
      <Card style={{ backgroundColor: "#212529" }}>
        <Card.Img src={props.src} />
        <Card.Body>
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text>
            <span style={{ width: "15px" }}>{star}</span>
            <small style={{ color: "wheat" }}>
              {" "}
              {"   "} ({props.ratedBy})
            </small>
          </Card.Text>
          <p className="instructor-name">
            Instructor:{" "}
            <span style={{ color: "#F0BB62", fontWeight: "500" }}>
              {props.instructor.map((i, ind) => {
                if (props.instructor.length === 3) {
                  return (
                    <Link
                      className="nav-tutor"
                      to={"/t/" + props.instructor[ind]}
                    >
                      <span>{i}</span>
                      {ind === 0 && ","} {ind === 1 && "and"}
                      {ind === 2 && ""}
                    </Link>
                  );
                } else if (props.instructor.length === 2) {
                  return (
                    <Link
                      className="nav-tutor"
                      to={"/t/" + props.instructor[ind]}
                    >
                      <span>{i}</span> {ind === 0 && "and"} {ind === 1 && ""}
                    </Link>
                  );
                } else
                  return (
                    <Link
                      className="nav-tutor"
                      to={"/t/" + props.instructor[ind]}
                    >
                      <span>{i}</span>
                    </Link>
                  );
              })}
            </span>
          </p>
          <p className="enrolled">
            Student enrolled :{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#F0BB62",
              }}
            >
              {props.enrolled}
            </span>{" "}
          </p>
          <strong className="taka">
            <span style={{ fontSize: "30px", fontWeight: "900" }}>৳</span>{" "}
            {props.price}
          </strong>
        </Card.Body>
        <Button
          className="button"
          variant="primary"
          onClick={() => navigate("/course/" + props.link)}
        >
          Enroll Now
        </Button>
      </Card>
    </div>
  );
};

export default CourseCard;
