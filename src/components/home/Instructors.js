import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./instructor.css";

const Instructors = (props) => {
  const navigate = useNavigate();
  return (
    <div className="instructor">
      <Card>
        <Card.Img src={props.i?.src} alt={props.i?.name}></Card.Img>
        <Card.ImgOverlay>
          <Card.Body className="name">
            <h4 style={{ fontSize: "1rem" }}>{props.i?.name}</h4>
            <Card.Subtitle>{props.i?.from}</Card.Subtitle>
          </Card.Body>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            aperiam quis placeat natus maiores molestiae ad eius numquam eaque
            incidunt facere, accusamus eveniet eum, accusantium laudantium nulla
          </p>
          <Button
            className="button"
            onClick={() => {
              navigate("/t/" + props.i?.nickname);
            }}
          >
            About {props.i?.nickname}
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Instructors;
