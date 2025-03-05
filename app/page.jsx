"use client";
import GreenCheck from "@/components/GreenCheck";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Rating from "@/components/Rating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React, { useState } from "react";

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
                <h1 className="text-4xl lg:text-7xl font-black">
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
          <h2 className="font-black text-5xl text-center lg:py-14 py-8">
            NEW ARRIVALS
          </h2>
          <div className="overflow-x-auto pb-5">
            <div className="flex lg:grid lg:grid-cols-4 gap-5 whitespace-nowrap scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 mr-4">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  className="max-w-52 lg:max-w-none flex-shrink-0"
                />
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
          <h2 className="font-black text-5xl text-center lg:py-14 py-8">
            TOP SELLING
          </h2>
          <div className="overflow-x-auto pb-5">
            <div className="flex lg:grid lg:grid-cols-4 gap-5 whitespace-nowrap scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300 mr-4">
              {topProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  className="max-w-52 lg:max-w-none flex-shrink-0"
                />
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
          <h2 className="font-black text-4xl lg:text-5xl text-center pb-16 pt-8 px-9">
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
          <h2 className="font-black text-4xl lg:text-5xl lg:pb-10 pb-6 pt-6">
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
                        <Rating rating={review.rating} />
                      </div>
                      <h2 className="font-bold text-xl mb-2 flex items-center gap-1">
                        {review.name}
                        <GreenCheck />
                      </h2>
                      <p className="text-black/60">{review.message}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                variant="ghost"
                className="absolute -top-10 right-10 left-auto hover:bg-transparent cursor-pointer text-9xl"
                iconsize={48}
              />
              <CarouselNext
                variant="ghost"
                className="absolute -top-10 right-0 hover:bg-transparent cursor-pointer text-9xl"
                iconsize={48}
              />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
