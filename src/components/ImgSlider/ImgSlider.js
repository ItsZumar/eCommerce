import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "./imgs/ImageSlider1.jpg";
import img2 from "./imgs/ImageSlider2.jpg";
import img3 from "./imgs/ImageSlider0.jpg";
// import img3 from "../Image/ImageSlider1.jpg";
import { Container, Typography } from "@material-ui/core";

const ImgSlider = () => {
  return (
    <Container>
      <div className="slide-container" style={{ marginTop: 15 }}>
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img alt="#" src={img1} style={{ width: "100%", height: 450 }} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="#" src={img2} style={{ width: "100%", height: 450 }} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="#" src={img3} style={{ width: "100%", height: 450 }} />
            </div>
          </div>
        </Fade>
        <Typography>
          <span style={{ fontWeight: 700 }}>Store Timings:</span>
          11:00am to 7:00pm. Fridays & Sundays Off. Due to safety policies as a
          result of Covid 19, we are experiencing processing and shipping
          delays.
        </Typography>
      </div>
    </Container>
  );
};

export default ImgSlider;
