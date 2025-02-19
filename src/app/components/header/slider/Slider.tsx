"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import image1 from '@/../public/assets/img/banners/b1.webp'
import image2 from '@/../public/assets/img/banners/b2.webp'
import image3 from '@/../public/assets/img/banners/b3.webp'
import image4 from '@/../public/assets/img/banners/b4.gif'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image src={image1} alt='slider1'/></SwiperSlide>
      <SwiperSlide><Image src={image4} alt='slider1'/></SwiperSlide>
      <SwiperSlide><Image src={image2} alt='slider1'/></SwiperSlide>
      <SwiperSlide><Image src={image3} alt='slider1'/></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
