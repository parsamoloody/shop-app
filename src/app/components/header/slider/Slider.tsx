"use client";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import Image from "next/image";
import image1 from '@/../public/assets/img/banners/b1.webp';
import image2 from '@/../public/assets/img/banners/b2.webp';
import image3 from '@/../public/assets/img/banners/b3.webp';
import image4 from '@/../public/assets/img/banners/b4.gif';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CSSProperties } from 'react';

const Slider = () => {

  const buttonStyle: CSSProperties = {
    color: '#e3e3e3',
    fontSize: '1.6rem',
    zIndex: 10,
  };

  return (
    <div className="relative overflow-visible">
      <Swiper
        className='h-40 lg:h-[20.5rem]'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        updateOnWindowResize={true}
        speed={344}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ nextEl: '.button-next', prevEl: '.button-prev' }}
        pagination={{ dynamicBullets: true, progressbarOpposite: true, clickable: true }}
        scrollbar={false}
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
      <div className="nav_button absolute z-50 justify-between top-1/2 -translate-y-1/2 w-full px-2 hidden md:flex">
        <button className="button-prev arrow left-0">
          <BiLeftArrow style={buttonStyle} />
        </button>
        <button className="button-next arrow right-0">
          <BiRightArrow style={buttonStyle} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
