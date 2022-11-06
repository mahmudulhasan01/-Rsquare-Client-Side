import React from "react";
import { Link } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import "./notFound.css";
import four from "../assets/4.png";
import zero from "../assets/0.png";

const NotFound = () => {
  return (
    <section>
      <div className="Not_Found_Container">
        <img className="four" src={four} alt="" />
        <img id="zeroId" className="zero" src={zero} alt="" />
        <img className="four" src={four} alt="" />
        <p>
          oops! looks like you are lost.
          <br /> The page you are looking for could not be found.
        </p>
        <div className="btn_container">
          <Link to="/" className="link">
            <button className="back_btn">
              <ArrowCircleLeftOutlinedIcon />
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
