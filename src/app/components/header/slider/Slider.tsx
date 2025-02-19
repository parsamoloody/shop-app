"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import image1 from '@/../public/assets/img/banners/b1.webp';
import image2 from '@/../public/assets/img/banners/b2.webp';
import image3 from '@/../public/assets/img/banners/b3.webp';
import image4 from '@/../public/assets/img/banners/b4.gif';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <Swiper
      className='h-40 lg:h-[20.5rem]'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {[image1, image4, image2, image3].map((image, index) => (
        <SwiperSlide key={index} className="relative h-full">
          <Image
            src={image}
            alt={`slider ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
