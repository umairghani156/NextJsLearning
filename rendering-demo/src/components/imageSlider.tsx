"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
      return (
        <div className="image-slider-container">
          <Slider {...settings}>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
          </Slider>
        </div>
      );
}