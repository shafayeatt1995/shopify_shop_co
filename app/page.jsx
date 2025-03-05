"use client";
import Header from "@/components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React, { useState } from "react";
import { integralCF } from "./fonts";

export default function Home() {
  const [products] = useState([
    {
      img: "/images/product/1.jpg",
      name: "T-shirt with Tape Details",
      price: "120",
      rating: "4.5",
    },
    {
      img: "/images/product/2.jpg",
      name: "Skinny Fit Jeans",
      price: "240",
      discountPrice: "250",
      discount: "-20%",
      rating: "3.5",
    },
    {
      img: "/images/product/3.jpg",
      name: "T-shirt with Tape Details",
      price: "180",
      rating: "4.5",
    },
    {
      img: "/images/product/4.jpg",
      name: "Sleeve Striped T-shirt",
      price: "130",
      discountPrice: "160",
      discount: "-30%",
      rating: "4.5",
    },
  ]);
  const [topProducts] = useState([
    {
      img: "/images/product/5.jpg",
      name: "Vertical Striped Shirt",
      price: "212",
      discountPrice: "232",
      discount: "-20%",
      rating: "5.0",
    },
    {
      img: "/images/product/6.jpg",
      name: "Courage Graphic T-Shirt",
      price: "145",
      rating: "4.0",
    },
    {
      img: "/images/product/7.jpg",
      name: "Loose Fit Bermuda Shorts",
      price: "80",
      rating: "3.0",
    },
    {
      img: "/images/product/8.jpg",
      name: "Faded Skinny Jeans",
      price: "210",
      rating: "4.5",
    },
  ]);
  const [styles] = useState([
    {
      img: "/images/style/1.png",
      name: "Casual",
      span: 1,
    },
    {
      img: "/images/style/2.png",
      name: "Formal",
      span: 2,
    },
    {
      img: "/images/style/3.png",
      name: "Party",
      span: 2,
    },
    {
      img: "/images/style/4.png",
      name: "Gym",
      span: 1,
    },
  ]);
  const [reviews] = useState([
    {
      rating: "5.0",
      name: "Sarah M.",
      message: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
    {
      rating: "5.0",
      name: "Alex K.",
      message: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
    {
      rating: "5.0",
      name: "James L.",
      message: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    },
    {
      rating: "5.0",
      name: "Sarah M.",
      message: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
    {
      rating: "5.0",
      name: "Alex K.",
      message: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
    {
      rating: "5.0",
      name: "James L.",
      message: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    },
  ]);
  return (
    <>
      <section className="bg-[#F2F0F1]">
        <div className="container mx-auto px-5 lg:px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 lg:py-24 pt-10 pb-5 flex flex-col lg:gap-12 gap-5">
              <div className="flex flex-col gap-8">
                <h1
                  className={`text-4xl lg:text-7xl font-bold ${integralCF.className}`}
                >
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="text-black/60">
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                <div className="lg:flex">
                  <button className="bg-black text-white py-3 px-12 rounded-full w-full lg:w-auto">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="flex lg:justify-between justify-center flex-wrap items-center lg:gap-2 gap-5">
                <div>
                  <h2 className="text-2xl lg:text-4xl font-bold">200+</h2>
                  <p className="text-black/60 text-xs lg:text-base">
                    International Brands
                  </p>
                </div>
                <div className="w-[1px] h-14 lg:h-full bg-black/10 "></div>
                <div>
                  <h2 className="text-2xl lg:text-4xl font-bold">2,000+</h2>
                  <p className="text-black/60 text-xs lg:text-base">
                    High-Quality Products
                  </p>
                </div>
                <div className="w-[1px] h-full bg-black/10 hidden lg:block"></div>
                <div className="hidden lg:block">
                  <h2 className="text-2xl lg:text-4xl font-bold">30,000+</h2>
                  <p className="text-black/60 text-xs lg:text-base">
                    Happy Customers
                  </p>
                </div>
                <div className="lg:hidden w-full text-center">
                  <h2 className="text-2xl lg:text-4xl font-bold">30,000+</h2>
                  <p className="text-black/60 text-xs lg:text-base">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-end h-full lg:-mr-16">
                <img
                  src="/images/hero.png"
                  alt="Hero"
                  className="max-h-[660px] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="container mx-auto py-11">
          <div className="flex flex-wrap lg:gap-24 justify-center lg:justify-between gap-y-6">
            <img
              src="/images/brands/versace.png"
              className="w-1/3 px-4 lg:px-0 lg:w-auto object-contain max-h-8"
            />
            <img
              src="/images/brands/zara.png"
              className="w-1/3 px-4 lg:px-0 lg:w-auto object-contain max-h-8"
            />
            <img
              src="/images/brands/gucci.png"
              className="w-1/3 px-4 lg:px-0 lg:w-auto object-contain max-h-8"
            />
            <img
              src="/images/brands/prada.png"
              className="w-1/3 px-4 lg:px-0 lg:w-auto object-contain max-h-8"
            />
            <img
              src="/images/brands/calvin.png"
              className="w-1/3 px-4 lg:px-0 lg:w-auto object-contain max-h-8"
            />
          </div>
        </div>
      </section>
      <section className="lg:py-16 py-12">
        <div className="container mx-auto px-4 lg:px-0">
          <h2
            className={`font-bold text-5xl text-center lg:pb-14 py-8 ${integralCF.className}`}
          >
            NEW ARRIVALS
          </h2>
          <div className="overflow-x-auto pb-5">
            <div className="flex lg:grid lg:grid-cols-4 gap-5 whitespace-nowrap scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 mr-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="max-w-52 lg:max-w-none flex-shrink-0"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-3xl"
                  />
                  <div className="mt-4 space-y-2">
                    <h2 className="text-base lg:text-lg font-bold capitalize truncate">
                      {product.name}
                    </h2>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <React.Fragment key={i}>
                            {i < Math.floor(+product.rating) ? (
                              <svg
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z"
                                  fill="#FFC633"
                                />
                              </svg>
                            ) : i === Math.floor(+product.rating) &&
                              +product.rating % 1 !== 0 ? (
                              <svg
                                width="10"
                                height="17"
                                viewBox="0 0 10 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.76406 16.9793L9.1981 13.956V0.255005L6.57889 5.89491L0.40564 6.6431L4.96013 10.8769L3.76406 16.9793Z"
                                  fill="#FFC633"
                                />
                              </svg>
                            ) : null}
                          </React.Fragment>
                        ))}
                      </div>
                      <p className="text-sm">
                        {product.rating}/
                        <span className="text-black/60">5</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2.5">
                      <p className="text-xl lg:text-2xl font-bold">
                        ${product.price}
                      </p>
                      {product.discountPrice && (
                        <del className="text-xl lg:text-2xl font-bold text-[#b2b2b2]">
                          ${product.discountPrice}
                        </del>
                      )}
                      {product.discount && (
                        <p className="text-[10px] lg:text-sm font-medium text-[#FF3333] bg-[#FF3333]/10 rounded-full px-3 py-1">
                          {product.discount}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-9">
            <button className="py-3 px-20 rounded-full border w-full lg:w-auto">
              View All
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <hr />
      </section>
      <section className="lg:py-16 py-12">
        <div className="container mx-auto px-4 lg:px-0">
          <h2
            className={`font-bold text-5xl text-center lg:pb-14 py-8 ${integralCF.className}`}
          >
            TOP SELLING
          </h2>
          <div className="overflow-x-auto pb-5">
            <div className="flex lg:grid lg:grid-cols-4 gap-5 whitespace-nowrap scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 mr-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="max-w-52 lg:max-w-none flex-shrink-0"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-3xl"
                  />
                  <div className="mt-4 space-y-2">
                    <h2 className="text-base lg:text-lg font-bold capitalize truncate">
                      {product.name}
                    </h2>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <React.Fragment key={i}>
                            {i < Math.floor(+product.rating) ? (
                              <svg
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z"
                                  fill="#FFC633"
                                />
                              </svg>
                            ) : i === Math.floor(+product.rating) &&
                              +product.rating % 1 !== 0 ? (
                              <svg
                                width="10"
                                height="17"
                                viewBox="0 0 10 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.76406 16.9793L9.1981 13.956V0.255005L6.57889 5.89491L0.40564 6.6431L4.96013 10.8769L3.76406 16.9793Z"
                                  fill="#FFC633"
                                />
                              </svg>
                            ) : null}
                          </React.Fragment>
                        ))}
                      </div>
                      <p className="text-sm">
                        {product.rating}/
                        <span className="text-black/60">5</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2.5">
                      <p className="text-xl lg:text-2xl font-bold">
                        ${product.price}
                      </p>
                      {product.discountPrice && (
                        <del className="text-xl lg:text-2xl font-bold text-[#b2b2b2]">
                          ${product.discountPrice}
                        </del>
                      )}
                      {product.discount && (
                        <p className="text-[10px] lg:text-sm font-medium text-[#FF3333] bg-[#FF3333]/10 rounded-full px-3 py-1">
                          {product.discount}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-9">
            <button className="py-3 px-20 rounded-full border w-full lg:w-auto">
              View All
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 lg:px-0">
        <div className="bg-[#F0F0F0] lg:p-16 p-6 rounded-4xl">
          <h2
            className={`font-bold text-4xl lg:text-5xl text-center pb-16 pt-8 px-9 ${integralCF.className}`}
          >
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid lg:grid-cols-3 gap-5">
            {styles.map((style, index) => (
              <div
                key={index}
                className={`${
                  style.span === 1 ? "lg:col-span-1" : "lg:col-span-2"
                } h-72 bg-white rounded-3xl overflow-hidden relative`}
              >
                <img src={style.img} className="w-full h-full object-cover" />
                <p className="absolute top-4 left-6 font-bold text-3xl xl">
                  {style.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 lg:px-0">
        <div className="container mx-auto">
          <h2
            className={`font-bold text-4xl lg:text-5xl lg:pb-10 pb-6 pt-6 ${integralCF.className}`}
          >
            OUR HAPPY CUSTOMERS
          </h2>
          <div>
            <Carousel opts={{ align: "start" }} className="w-full relative">
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="border px-8 py-7 rounded-2xl min-h-full">
                      <div className="flex items-center gap-1 mb-5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <React.Fragment key={i}>
                            {i < Math.floor(+review.rating) ? (
                              <svg
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z"
                                  fill="#FFC633"
                                />
                              </svg>
                            ) : i === Math.floor(+review.rating) &&
                              +review.rating % 1 !== 0 ? (
                              <svg
                                width="10"
                                height="17"
                                viewBox="0 0 10 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.76406 16.9793L9.1981 13.956V0.255005L6.57889 5.89491L0.40564 6.6431L4.96013 10.8769L3.76406 16.9793Z"
                                  fill="#FFC633"
                                />
                              </svg>
                            ) : null}
                          </React.Fragment>
                        ))}
                      </div>
                      <h2 className="font-bold text-xl mb-2 flex items-center gap-1">
                        {review.name}
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0.829102C8.07164 0.829102 6.18657 1.40093 4.58319 2.47227C2.97982 3.54362 1.73013 5.06636 0.992179 6.84794C0.254225 8.62952 0.061142 10.5899 0.437348 12.4812C0.813554 14.3725 1.74215 16.1098 3.10571 17.4734C4.46928 18.837 6.20656 19.7656 8.09787 20.1418C9.98919 20.518 11.9496 20.3249 13.7312 19.5869C15.5127 18.849 17.0355 17.5993 18.1068 15.9959C19.1782 14.3925 19.75 12.5075 19.75 10.5791C19.7473 7.99408 18.7192 5.51571 16.8913 3.68783C15.0634 1.85994 12.585 0.831831 10 0.829102ZM14.2806 8.85973L9.03063 14.1097C8.96097 14.1795 8.87826 14.2348 8.78721 14.2725C8.69616 14.3103 8.59857 14.3297 8.5 14.3297C8.40144 14.3297 8.30385 14.3103 8.2128 14.2725C8.12175 14.2348 8.03903 14.1795 7.96938 14.1097L5.71938 11.8597C5.57865 11.719 5.49959 11.5281 5.49959 11.3291C5.49959 11.1301 5.57865 10.9392 5.71938 10.7985C5.86011 10.6577 6.05098 10.5787 6.25 10.5787C6.44903 10.5787 6.6399 10.6577 6.78063 10.7985L8.5 12.5188L13.2194 7.79848C13.2891 7.72879 13.3718 7.67352 13.4628 7.63581C13.5539 7.59809 13.6515 7.57868 13.75 7.57868C13.8486 7.57868 13.9461 7.59809 14.0372 7.63581C14.1282 7.67352 14.2109 7.72879 14.2806 7.79848C14.3503 7.86816 14.4056 7.95088 14.4433 8.04193C14.481 8.13297 14.5004 8.23056 14.5004 8.3291C14.5004 8.42765 14.481 8.52523 14.4433 8.61627C14.4056 8.70732 14.3503 8.79004 14.2806 8.85973Z"
                            fill="#01AB31"
                          />
                        </svg>
                      </h2>
                      <p className="text-black/60">{review.message}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="absolute -top-10 right-10 left-auto hover:bg-transparent cursor-pointer text-9xl"
                iconsize={24}
              />
              <CarouselNext
                className="absolute -top-10 right-0 hover:bg-transparent cursor-pointer text-9xl"
                iconsize={24}
              />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
