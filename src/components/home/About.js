import React from "react";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <img
        src="https://c.tenor.com/0yMdTIJGIH4AAAAd/sleepy-sleeping.gif"
        style={{ width: "100%" }}
      />
      <p>Developer is sleeping . . . </p>
      <p>
        Call him at <a href="http://t.me/sohanemon">@sohanemon.</a>
      </p>
    </div>
  );
};

export default About;
