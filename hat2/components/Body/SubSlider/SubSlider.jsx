
import React from "react";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
// images
import img from '../MainSlider/img/img';
// css 
import classes from './SubSlider.module.css';
// install Swiper modules
SwiperCore.use([Autoplay,Pagination]);

const SubSlider = () => {
  
  
  
  return (
    <div className={classes.margin}>
        <Swiper
            autoplay={{"delay": 2500,"disableOnInteraction": false}}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            grabCursor={true}
            pagination={{"clickable": true}}
            className="mySwiper">
                <SwiperSlide>
                    <img alt='slider pico' src={img.hut2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='slider pico' src={img.hut1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='slider pico' src={img.hut3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='slider pico' src={img.hut6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='slider pico' src={img.hut4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='slider pico' src={img.hut7} />
                </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SubSlider