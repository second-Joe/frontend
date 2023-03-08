import "./Row.css";
import React from "react";
import imgLogo from "./post.jpg";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

function Row() {
  return (
    <div className="row">
      <h2>장르</h2>
      <ArrowBackIosOutlined className="sliderArrow left" />
      <div className="row__posters">
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
        <img className="poster" src={imgLogo} />
      </div>
      <ArrowForwardIosOutlined className="sliderArrow right" />
    </div>
  );
}

export default Row;
