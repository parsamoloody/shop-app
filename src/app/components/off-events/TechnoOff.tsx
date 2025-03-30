"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/../public/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Data, Product } from "../../../types/index";
import "swiper/css";

const TechnoOff = () => {

    const inOffProducts: Product | any = data.products.filter((product) => product.discount.isDiscount);
    return (
        <div className="story_container my-4 px-2 lg:px-6">
            <Swiper
                slidesPerView={2.1}
                breakpoints={{
                    419: { slidesPerView: 2.5 },
                    512: { slidesPerView: 3 },
                    640: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {inOffProducts.map((product: Product) => (
                    <SwiperSlide key={product.id}>

                        <div className="title_I grid grid-cols-1 justify-center w-full px-4 text-red-700">
                            <div className="flex items-center justify-between">
                                <p>تکنوآف</p>
                                <p>{
                                    2025
                                }</p>
                            </div>
                            <span className="h-[0.18rem] w-full rounded-full bg-red-600"></span>
                        </div>
                        <Link
                            href={`/products/${product.id}`}
                            className="category_link flex flex-col justify-center items-center space-y-2.5 border-l-2"
                        >
                            <div className="image_container relative w-24 md:w-32 lg:w-32 md:h-32 lg:h-32 h-24 ">
                                <Image
                                    src={product.images.find((image) => image.main === true)?.src || "@/img/default/default-featured-image.png.jpg"}
                                    alt={product.name}
                                    fill={true}
                                    className="category_image p-1"
                                />
                            </div>
                            <div className="grid space-y-4 px-3">
                                <p className="text-xs sm:text-[.79rem] lg:text-[0.875rem] text-right leading-6 text-slate-800">
                                    {product.name}
                                </p>
                                <div className="pricing_d">
                                    <div className="flex_wrapper flex justify-between items-center">
                                        {/* discount and main price */}
                                        <div className="text-black space-y-3">
                                            <p className="flex h-4 items-center space-x-1">
                                                <span className="price_tag text-xs lg:text-[1.10rem]"> تومان </span>
                                                <span className="price text-xs lg:text-[1rem] font-bold">{
                                                    product.price - (product.price * product.discount.discountPercentage / 100)
                                                }</span>
                                            </p>
                                            <p className="flex">
                                                <span className="text-xs text-white lg:text-[1.10rem] md:text-slate-500"> تومان </span>
                                                <span className="text-xs text-slate-500 lg:text-[1.25rem] line-through"> {product.price}</span>
                                            </p>
                                        </div>
                                        <div className="disount_percentage text-xs lg:text[0.10rem] text-white bg-red-600 w-6 rounded-sm px-1 flex items-center justify-center">
                                            <p>{product.discount.discountPercentage}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


export default TechnoOff;