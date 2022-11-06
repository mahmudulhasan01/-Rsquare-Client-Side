import React from "react";
import "./header.css";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const Header = () => {
  return (
    <div className="header_container">
      <div className="">
        <h1>Media Library</h1>
        <p>
          <span>0</span>images
        </p>
      </div>
      <div className="">
        <button className="upload_btn">
          <ControlPointOutlinedIcon /> Upload new image
        </button>
      </div>
    </div>
  );
};

export default Header;
