import React from "react";
import "./home.css";
import Header from "../Components/Header";

const Home = () => {
  return (
    <section className="home_container">
      <Header></Header>
      <p className="instruction_text">
        Click on ‘Upload’ to start adding images
      </p>
    </section>
  );
};

export default Home;
