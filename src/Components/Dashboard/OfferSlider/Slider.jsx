import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ImageSlider({ images }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    // autoplaySpeed: 2000,
    // speed: 500,
    slidesToShow: 2,
    // slidesToScroll: 2,

    // touchMove: false,
  };
  return (
    <div style={{ width: "100%", height: "50%" }}>
      <Slider {...settings}>
    
          <div >
            <img src="http://placekitten.com/g/400/200"  style={{borderRadius:"1.11vw" ,width:"23.75vw",height:"9.4vw"}}   alt="" />
          </div>
          <div >
            <img src="http://placekitten.com/g/400/200" style={{borderRadius:"1.11vw" ,width:"23.75vw",height:"9.4vw"}}  alt="" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" style={{borderRadius:"1.11vw" ,width:"23.75vw",height:"9.44vw"}}  alt="" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" style={{borderRadius:"1.11vw" ,width:"23.75vw",height:"9.44vw"}}  alt="" />
          </div>

      </Slider>
    </div>
  );
}
