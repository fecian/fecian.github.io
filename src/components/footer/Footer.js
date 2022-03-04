import React from "react";
import NewsLetter from "./NewsLetter";
import "./footer.css";
import * as icon from "../SocialIcons";
let d = new Date();
const Footer = () => {
  return (
    <div>
      <div id="subscribe1" style={{ padding: "10px" }}>
        <h3 style={{ textAlign: "center", color: "#249020" }}>
          Subscribe for Newsletter
        </h3>
      </div>
      <div className="container-fluid bg-dark">
        <NewsLetter className="row" />
      </div>
      <div style={{ backgroundColor: "black", padding: "50px" }}>
        <h3 style={{ textAlign: "center", color: "grey" }}>Contact Us</h3>
        <div className="container total" id="#contact">
          <h5 style={{ textAlign: "center", color: "grey" }}>
            WEB DEV BANGLADESH
          </h5>
          <small style={{ color: "grey", width: "30em" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            neque est officiis corrupti suscipit, molestiae voluptates expedita,
            possimus doloribus, veniam reiciendis quam aperiam aspernatur.
          </small>
          <div className="social-list">
            <ul>
              <li>
                <a href="http://facebook.com/sohanem0n">{icon.facebook}</a>
              </li>
              <li>
                <a href="http://instagram.com/sohanem0n">{icon.instagram}</a>
              </li>
              <li>
                <a href="http://github.com/sohanemon">{icon.github}</a>
              </li>
              <li>
                <a href="http://twitter.com/sohanemon">{icon.twitter}</a>
              </li>
              <li>
                <a href="http://youtube.com/sohanurrahmanemon">
                  {icon.youtube}
                </a>
              </li>
            </ul>
          </div>
          <footer style={{ color: "grey" }}>
            {" "}
            <small>
              &copy; Copyright {d.getFullYear()}, Sohan Emon. All Rights
              Reserved.
            </small>{" "}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
