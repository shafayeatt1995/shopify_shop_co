"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  SlidersVerticalIcon,
  XIcon,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Category() {
  const [links] = useState(["Home", "Casual"]);
  const [values, setValues] = useState([50, 200]);
  const [activeColor, setActiveColor] = useState(0);
  const [colors] = useState([
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06CAF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "#FFFFFF",
    "#000000",
  ]);
  const [categories] = useState([
    "T-shirt",
    "Shorts",
    "Shirts",
    "Hoodie",
    "Jeans",
  ]);
  const [activeSize, setActiveSize] = useState(4);
  const [sizes] = useState([
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ]);
  const [styles] = useState(["Casual", "Formal", "Party", "Gym"]);
  const [sorts] = useState([
    "Most Popular",
    "Latest",
    "Price: Low to High",
    "Price: High to Low",
  ]);
  const [activeSort, setActiveSort] = useState(0);
  const [products] = useState([
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
      rating: "5",
    },
    {
      img: "/images/product/2.jpg",
      name: "Skinny Fit Jeans",
      price: "240",
      discountPrice: "260",
      discount: "-20%",
      rating: "3.5",
    },
    {
      img: "/images/product/3.jpg",
      name: "Checkered Shirt",
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
      name: "Courage Graphic T-shirt",
      price: "145",
      rating: "4.0",
    },
    {
      img: "/images/product/7.jpg",
      name: "Loose Fit Bermuda Shorts",
      price: "80",
      rating: "3.0",
    },
  ]);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <section className="container mx-auto px-4 lg:px-0 lg:pb-20 pb-14">
        <div className="flex gap-5">
          <div
            className={`w-screen lg:w-96 fixed lg:relative lg:left-0 lg:top-auto top-24 transition-all duration-300 z-10 ${
              showMenu ? "left-0" : "-left-full"
            }`}
          >
            {showMenu && (
              <div
                className="bg-black/50 fixed inset-0 z-10"
                onClick={() => setShowMenu(false)}
              ></div>
            )}
            <div className="w-full border rounded-t-2xl lg:rounded-3xl flex flex-col  bg-white fixed lg:relative max-h-[85vh] lg:max-h-full lg:overflow-hidden overflow-y-auto bottom-0 z-20">
              <div className="px-6 pt-5 flex flex-col gap-3 lg:gap-5 sticky top-0 bg-white z-10">
                <div className="flex justify-between ">
                  <h2 className="text-xl font-bold">Filter</h2>
                  <SlidersVerticalIcon className="hidden lg:block" />
                  <XIcon
                    className="lg:hidden"
                    onClick={() => setShowMenu(false)}
                  />
                </div>
                <hr />
              </div>
              <div className="px-6 py-5 flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-col gap-4">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-black/60"
                    >
                      <p>{category}</p>
                      <ChevronRightIcon size={18} />
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold flex">Price</h3>
                    <ChevronUpIcon size={18} />
                  </div>
                  <div className="relative pt-5 pb-10 w-full">
                    <Slider
                      defaultValue={values}
                      value={values}
                      max={250}
                      step={1}
                      minStepsBetweenThumbs={1}
                      onValueChange={setValues}
                      className="w-full mx-aut"
                    />

                    <div
                      className="absolute bottom-2 transform -translate-x-1/2"
                      style={{
                        left: `calc(${(values[0] / 250) * 100}% * 0.8 + 10%)`,
                      }}
                    >
                      <span className="px-2 py-1 rounded-md text-sm font-medium">
                        ${values[0]}
                      </span>
                    </div>

                    <div
                      className="absolute bottom-2 transform -translate-x-1/2"
                      style={{
                        left: `calc(${(values[1] / 250) * 100}% * 0.83 + 10%)`,
                      }}
                    >
                      <span className="px-2 py-1 rounded-md text-sm font-medium">
                        ${values[1]}
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold flex">Colors</h3>
                    <ChevronUpIcon size={18} />
                  </div>
                  <div className="relative pt-5 w-full">
                    <div className="grid grid-cols-5 gap-2">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className="size-9 rounded-full border flex justify-center items-center text-white cursor-pointer"
                          style={{ backgroundColor: color }}
                          onClick={() => setActiveColor(index)}
                        >
                          {activeColor === index && <CheckIcon />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold flex">Size</h3>
                    <ChevronUpIcon size={18} />
                  </div>
                  <div className="relative pt-5 w-full">
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size, index) => (
                        <div
                          key={index}
                          className={`px-5 py-2.5 rounded-full border flex justify-center items-center cursor-pointer text-sm ${
                            activeSize === index && "bg-black text-white"
                          }`}
                          onClick={() => setActiveSize(index)}
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold flex">Dress Style</h3>
                    <ChevronUpIcon size={18} />
                  </div>
                  <div className="flex flex-col gap-4 pt-5">
                    {styles.map((style, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-black/60"
                      >
                        <p>{style}</p>
                        <ChevronRightIcon size={18} />
                      </div>
                    ))}
                  </div>
                </div>
                <button className="bg-black text-white w-full py-4 rounded-full font-medium">
                  Apply FIlter
                </button>
              </div>
            </div>
          </div>
          <div className="w-full space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl lg:text-3xl font-bold">Casual</h2>
              <div className="flex items-center gap-2">
                <p className="text-sm lg:text-base text-black/60">
                  Showing 1-10 of 100 Products
                </p>
                <div className="hidden lg:flex items-center ">
                  <p className="text-black/60">Sort by:</p>
                  <Select onValueChange={(value) => setActiveSort(value)}>
                    <SelectTrigger className="[&>svg]:!text-black [&>svg]:opacity-100 border-none text-black font-medium text-base shadow-none outline-none focus-visible:outline-none focus-visible:ring-0 ">
                      <p className="text-black">{sorts[activeSort]}</p>
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectGroup>
                        {sorts.map((sort, index) => (
                          <SelectItem key={index} value={index}>
                            {sort}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <button
                className="lg:hidden bg-[#F0F0F0] size-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                <SlidersVerticalIcon size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3.5 lg:gap-x-5 gap-y-2 lg:gap-y-8">
              {products.map((product, index) => (
                <div key={index}>
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
            <hr />
            <div className="flex justify-between items-center gap-2">
              <button className="gap-1 lg:gap-2 flex items-center border py-2 px-2 lg:px-4 rounded-md lg:rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-200 text-xs lg:text-base font-medium lg:font-normal">
                <ArrowLeftIcon size={isMobile ? 12 : 24} />
                Previous
              </button>
              <div className="flex items-center lg:gap-[2px] text-xs lg:text-base">
                <button className="size-9 lg:size-10 bg-black/10 rounded-md font-medium flex justify-center items-center cursor-pointer hover:bg-black/10 hover:text-black transition-all duration-200">
                  1
                </button>
                <button className="size-9 lg:size-10 font-medium flex justify-center items-center cursor-pointer text-black/50 hover:bg-black/10 rounded-md hover:text-black transition-all duration-200">
                  2
                </button>
                <button className="size-9 lg:size-10 font-medium hidden lg:flex justify-center items-center cursor-pointer text-black/50 hover:bg-black/10 rounded-md hover:text-black transition-all duration-200 ">
                  3
                </button>
                <button className="size-9 lg:size-10 font-medium flex justify-center items-center ">
                  ...
                </button>
                <button className="size-9 lg:size-10 font-medium hidden lg:flex justify-center items-center cursor-pointer text-black/50 hover:bg-black/10 rounded-md hover:text-black transition-all duration-200">
                  8
                </button>
                <button className="size-9 lg:size-10 font-medium flex justify-center items-center cursor-pointer text-black/50 hover:bg-black/10 rounded-md hover:text-black transition-all duration-200">
                  9
                </button>
                <button className="size-9 lg:size-10 font-medium flex justify-center items-center cursor-pointer text-black/50 hover:bg-black/10 rounded-md hover:text-black transition-all duration-200">
                  10
                </button>
              </div>
              <button className="gap-2 flex items-center border py-2 px-2 lg:px-4 rounded-md lg:rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-200 text-xs lg:text-base font-medium lg:font-normal">
                Next
                <ArrowRightIcon size={isMobile ? 12 : 24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
