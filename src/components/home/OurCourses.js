import React from "react";
import "./our-courses.css";

const OurCourses = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h4 className="headline">{props.children}</h4>
    </div>
  );
};

export default OurCourses;
