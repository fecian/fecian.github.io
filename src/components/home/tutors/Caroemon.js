import React from "react";
import { Carousel } from "react-bootstrap";

const Caroemon = (props) => {
  return (
    <>
      <Carousel.Item interval={200} {...props}>
        <img
          style={{ width: "100%", height: "500px", borderRadius: "10px" }}
          src={props.src}
          alt={props.label}
        />
        <Carousel.Caption>
          <h3>{props.label}</h3>
          <p>{props.p}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
};

export default Caroemon;
