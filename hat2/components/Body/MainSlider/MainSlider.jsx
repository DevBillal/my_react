
import React from "react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
// images
import img from './img/img';
// Import JSX file style
import classes from "./MainSlider.module.css";
// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);



const MainSlider = () => {

  return (
    <div className={classes.margin}>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{"delay": 2500,"disableOnInteraction": false}}
        pagination={{"type": "progressbar"}}
        navigation={true}
        loop={'true'}
        className="mySwiper">
            <SwiperSlide>
                <img alt='slider pico' src={img.hut} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='slider pico' src={img.hut1} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='slider pico' src={img.hut2} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='slider pico' src={img.hut3} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='slider pico' src={img.hut4} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='slider pico' src={img.hut5} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='slider pico' src={img.hut6} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='slider pico' src={img.hut7} />
            </SwiperSlide>
            <SwiperSlide>
                <img alt='slider pico' src={img.hut8} />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default MainSlider