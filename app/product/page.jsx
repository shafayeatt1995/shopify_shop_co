"use client";
import Breadcrumb from "@/components/Breadcrumb";
import GreenCheck from "@/components/GreenCheck";
import ProductCard from "@/components/ProductCard";
import Rating from "@/components/Rating";
import {
  CheckIcon,
  ChevronDownIcon,
  EllipsisIcon,
  MinusIcon,
  PlusIcon,
  SlidersVerticalIcon,
} from "lucide-react";
import React from "react";
import { useState } from "react";

export default function Product() {
  const [links] = useState(["Home", "Shop", "Men", "T-shirt"]);
  const [images] = useState([
    "/images/product/9.jpg",
    "/images/product/10.jpg",
    "/images/product/11.jpg",
  ]);
  const [mainImage, setMainImage] = useState("/images/product/9.jpg");
  const [product] = useState({
    name: "Skinny Fit Jeans",
    price: "260",
    discountPrice: "300",
    discount: "-40%",
    rating: "4.5",
  });
  const [colors] = useState(["#4F4631", "#314F", "#31344F"]);
  const [activeColor, setActiveColor] = useState("#4F4631");
  const [sizes] = useState(["Small", "Medium", "Large", "X-Large"]);
  const [activeSize, setActiveSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [menus] = useState(["Product Details", "Rating & Reviews", "FAQs"]);
  const [activeMenu, setActiveMenu] = useState(1);
  const [reviews] = useState([
    {
      rating: "4.5",
      name: "Samantha D.",
      message: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
      createdAt: "Posted on August 14, 2023",
    },
    {
      rating: "4.0",
      name: "Alex M.",
      message: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
      createdAt: "Posted on August 15, 2023",
    },
    {
      rating: "3.5",
      name: "Ethan R.",
      message: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
      createdAt: "Posted on August 16, 2023",
    },
    {
      rating: "4.0",
      name: "Olivia P.",
      message: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
      createdAt: "Posted on August 17, 2023",
    },
    {
      rating: "4.0",
      name: "Liam K.",
      message: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
      createdAt: "Posted on August 18, 2023",
    },
    {
      rating: "4.5",
      name: "Ava H.",
      message: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
      createdAt: "Posted on August 19, 2023",
    },
  ]);
  const [products] = useState([
    {
      img: "/images/product/12.jpg",
      name: "Polo with Contrast Trims",
      price: "212",
      discountPrice: "242",
      discount: "-20%",
      rating: "4.0",
    },
    {
      img: "/images/product/13.jpg",
      name: "Gradient Graphic T-shirt",
      price: "145",
      rating: "3.5",
    },
    {
      img: "/images/product/14.jpg",
      name: "Polo with Tipping Details",
      price: "180",
      rating: "4.5",
    },
    {
      img: "/images/product/15.jpg",
      name: "Black Striped T-shirt",
      price: "120",
      discountPrice: "150",
      discount: "-30%",
      rating: "5.0",
    },
  ]);

  return (
    <>
      <section className="container mx-auto px-4 lg:px-0 lg:pt-6 py-5 lg:pb-9">
        <Breadcrumb links={links} />
      </section>
      <section className="container mx-auto px-4 lg:px-0 lg:pb-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full">
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              <div className="flex lg:flex-col lg:w-44 gap-4">
                {images.map((image, index) => (
                  <img
                    src={image}
                    alt=""
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`cursor-pointer lg:w-auto w-full max-h-28 lg:max-h-40 rounded-2xl overflow-hidden border object-cover ${
                      mainImage === image
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>
              <div className="w-full">
                <img
                  src={mainImage}
                  alt=""
                  className="w-full max-h-80 lg:max-h-[500px] object-cover rounded-3xl overflow-hidden"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-2xl lg:text-[40px] font-black pb-3 uppercase">
              One Life Graphic T-shirt
            </h1>
            <div className="flex items-center gap-3 pb-3">
              <div className="flex items-center gap-1.5">
                <Rating rating={product.rating} />
              </div>
              <p className="text-sm">
                {product.rating}/<span className="text-black/60">5</span>
              </p>
            </div>
            <div className="flex items-center gap-2.5 pb-3">
              <p className="text-2xl lg:text-3xl font-semibold">
                ${product.price}
              </p>
              {product.discountPrice && (
                <del className="text-2xl lg:text-3xl font-semibold text-[#b2b2b2]">
                  ${product.discountPrice}
                </del>
              )}
              {product.discount && (
                <p className="text-[#FF3333] bg-[#FF3333]/10 rounded-full px-3 py-1 text-sm lg:text-base">
                  {product.discount}
                </p>
              )}
            </div>
            <p className="text-black/60 pb-5 text-sm lg:text-base">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <hr />
            <div className="py-5">
              <p className="mb-2 text-sm lg:text-base">Select Colors</p>
              <div className="flex flex-wrap items-center gap-4">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                    className="size-10 rounded-full flex justify-center items-center text-white cursor-pointer"
                    onClick={() => setActiveColor(color)}
                  >
                    {activeColor === color && <CheckIcon size={16} />}
                  </button>
                ))}
              </div>
            </div>
            <hr />
            <div className="py-5">
              <p className="mb-2 text-sm lg:text-base">Choose Size</p>
              <div className="flex items-center flex-wrap lg:gap-4 gap-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 rounded-full flex justify-center items-center cursor-pointer text-sm lg:text-base ${
                      activeSize === size
                        ? "bg-black text-white"
                        : "bg-[#F0F0F0]"
                    }`}
                    onClick={() => setActiveSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <hr />
            <div className="pt-5">
              <div className="flex items-center gap-5">
                <div className="bg-[#F0F0F0] w-52 rounded-full py-4 px-5 flex justify-between items-center select-none">
                  <MinusIcon
                    className="cursor-pointer"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  />
                  <p>{quantity}</p>
                  <PlusIcon
                    className="cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  />
                </div>
                <button className="w-full bg-black text-white py-4 px-6 rounded-full text-sm lg:text-base">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-3 items-center justify-items-center w-full border-b-2 gap-1">
          {menus.map((menu, index) => (
            <button
              key={index}
              className={`hover:text-black cursor-pointer flex items-center py-4 w-full justify-center border-b-2 -mb-[2px] ${
                activeMenu === index
                  ? "border-black text-black"
                  : "text-black/60 border-transparent"
              }`}
              onClick={() => setActiveMenu(index)}
            >
              {menu}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center pt-5 lg:pt-11">
          <p className="text-xl lg:text-2xl font-semibold">
            All Reviews
            <span className="text-sm lg:text-base text-black/60 font-normal">
              {" "}
              (451)
            </span>
          </p>
          <div className="flex gap-2.5">
            <button className="cursor-pointer size-10 lg:size-14 bg-[#F0F0F0] rounded-full flex justify-center items-center">
              <SlidersVerticalIcon size={20} />
            </button>
            <button className="cursor-pointer py-4 px-6 bg-[#F0F0F0] rounded-full lg:flex justify-between items-center gap-5 font-medium hidden">
              Latest <ChevronDownIcon />
            </button>
            <button className="text-sm lg:text-base cursor-pointer py-2 lg:py-4 px-4 lg:px-8 bg-black text-white rounded-full font-medium">
              Write a Review
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 lg:px-0 pt-6">
        <div className="grid lg:grid-cols-2 gap-5">
          {reviews.map((review, index) => (
            <div className="border px-8 py-7 rounded-2xl min-h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 mb-5">
                  <Rating rating={review.rating} />
                </div>
                <EllipsisIcon className="cursor-pointer text-black/40" />
              </div>
              <h2 className="font-bold text-xl mb-2 flex items-center gap-1">
                {review.name}
                <GreenCheck />
              </h2>
              <p className="text-black/60">{review.message}</p>
              <p className="text-black/60 font-medium mt-6">
                {review.createdAt}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-9">
          <button className="py-3 rounded-full border w-2/3 lg:w-auto">
            Load More Reviews
          </button>
        </div>
      </section>
      <section className="pt-16 pb-20">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="font-black text-4xl lg:text-5xl text-center lg:pb-14 pb-8 uppercase px-14">
            You might also like
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
        </div>
      </section>
    </>
  );
}
