"use client";
import ProductCard from "@/components/ProductCard";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisIcon,
  MinusIcon,
  PlusIcon,
  SlidersVerticalIcon,
} from "lucide-react";
import React from "react";
import { useState } from "react";
import { integralCF } from "../fonts";

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
        <div className="flex items-center gap-1">
          {links.map((link, index) => (
            <a
              href="#"
              key={index}
              className="text-black/60 hover:text-black cursor-pointer flex items-center"
            >
              {link}
              {index !== links.length - 1 && <ChevronRightIcon size={18} />}
            </a>
          ))}
        </div>
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
            <h1
              className={`text-2xl lg:text-[40px] font-bold pb-3 uppercase ${integralCF.className}`}
            >
              One Life Graphic T-shirt
            </h1>
            <div className="flex items-center gap-3 pb-3">
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
            <div
              className="border px-8 py-7 rounded-2xl min-h-full"
              key={index}
            >
              <div className="flex items-center justify-between">
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
                <EllipsisIcon className="cursor-pointer text-black/40" />
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
              <p className="text-black/60 font-medium mt-6">
                {review.createdAt}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-9">
          <button className="py-3 rounded-full border px-10">
            Load More Reviews
          </button>
        </div>
      </section>
      <section className="pt-16 pb-20">
        <div className="container mx-auto px-4 lg:px-0">
          <h2
            className={`font-bold text-4xl lg:text-5xl text-center lg:pb-14 pb-8 uppercase px-14 ${integralCF.className}`}
          >
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
