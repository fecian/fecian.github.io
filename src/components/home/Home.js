import React from "react";
import { Route, Routes } from "react-router-dom";
import TutorHome from "./tutors/TutorHome";
import Courses from "./courses/Courses";
import Body from "./Body";
import TutorOverview from "./tutors/TutorOverview";
import Course from "./courses/Course";
import About from "./About";
import Contact from "./Contact";

const Home = (props) => {
  return (
    <div>
      <Routes>
        <Route exact path="home" element={<Body />} />
        <Route exact path="tutors" element={<TutorHome />} />
        <Route exact path="t/:nickname" element={<TutorOverview />} />
        <Route exact path="courses" element={<Courses />} />
        <Route exact path="course/:link" element={<Course />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="/" element={<Body />} />
      </Routes>
    </div>
  );
};

export default Home;
