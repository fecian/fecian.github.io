import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "./home/Home";

const MainComponent = () => {
  return (
    <div>
      <Header></Header>
      <Home />
      <Footer />
    </div>
  );
};

export default MainComponent;
