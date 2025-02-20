"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import categories from "@/../public/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Story = () => {
  const storyCategories = categories.storyCategory || [];
  const [width, setWidth] = useState(0);
  const [preview, setPreview] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(20);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width < 768) {
      setPreview(3.5);
    } else if (width >= 768 && width <= 1024) {
      setPreview(5.5);
    } else {
      setPreview(7.5);
    }
  }, [width]);

  useEffect(() => {
    if (width < 768) {
      setSpaceBetween(20);
    } else if (width >= 768 && width <= 1024) {
      setSpaceBetween(30);
    } else {
      setSpaceBetween(45);
    }
  }, [width]);

  return (
    <div className="story_container my-4 px-2 lg:px-6">
      <Swiper spaceBetween={spaceBetween} slidesPerView={preview}>
        {storyCategories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link
              href={category.link}
              className="category_link flex flex-col justify-center items-center space-y-2.5 focus:border-sky-700 focus:border-2 rounded-full focus:outline-dashed w-full focus:outline-2"
            >
              <div className="image_container relative w-24 md:w-32 lg:w-32 md:h-32 lg:h-32 h-24 border-2 rounded-full border-sky-500 p-1">
                <Image
                  src={`/https://parsamoloody.github.io/shop-app/assets/img/story/${category.image}`}
                  alt={category.name}
                  fill={true}
                  className="category_image p-1"
                />
              </div>
              <p className="text-[.735rem] sm:text-[.900rem] lg:text-[.920rem] text-center">
                {category.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Story;
