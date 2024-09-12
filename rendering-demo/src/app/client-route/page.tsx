"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';

export default function ClientRoutePage() {
    const theme = useTheme();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <>
        <h1 style={{color: theme.secondary}}>Client Route Page</h1>
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
        </>
      );
}