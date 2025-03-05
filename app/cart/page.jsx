"use client";
import Breadcrumb from "@/components/Breadcrumb";
import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";
import { useState, Fragment } from "react";

export default function Cart() {
  const [links] = useState(["Home", "Cart"]);
  const [cartItems, setCartItems] = useState([
    {
      img: "/images/product/13.jpg",
      name: "Gradient Graphic T-shirt Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      quantity: 1,
      price: 145,
    },
    {
      img: "/images/product/3.jpg",
      name: "Cheeseburger Shirt",
      size: "Medium",
      color: "Red",
      quantity: 1,
      price: 180,
    },
    {
      img: "/images/product/2.jpg",
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      quantity: 1,
      price: 240,
    },
  ]);
  const updateQuantity = (index, delta) => {
    setCartItems(
      cartItems.map((item, i) =>
        i === index && item.quantity + delta > 0
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
    );
  };
  const handleRemoveItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <>
      <section className="container mx-auto px-4 lg:px-0 lg:pt-6 py-5 lg:pb-9">
        <Breadcrumb links={links} />
      </section>
      <section className="container mx-auto px-4 lg:px-0 pb-20">
        <h1 className="text-[40px] font-black uppercase mb-6">You cart</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-[3] p-3.5 lg:px-6 lg:py-5 border rounded-3xl space-y-6">
            {cartItems.map((item, index) => (
              <Fragment key={index}>
                <div className="flex gap-3 lg:gap-5 items-center min-w-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="size-24 lg:size-32 object-cover rounded-xl flex-shrink-0"
                  />
                  <div className="flex flex-col w-full justify-between min-w-0">
                    <div className="overflow-hidden min-w-0">
                      <div className="flex items-center gap-1.5 w-full min-w-0">
                        <p className="flex-1 font-bold lg:text-xl truncate min-w-0">
                          {item.name}
                        </p>
                        <Trash2Icon
                          className="w-6 text-red-500 cursor-pointer flex-shrink-0"
                          onClick={() => handleRemoveItem(index)}
                        />
                      </div>
                      <p className="text-xs lg:text-sm">
                        Size: <span className="text-gray-500">{item.size}</span>
                      </p>
                      <p className="text-xs lg:text-sm">
                        Color:{" "}
                        <span className="text-gray-500">{item.color}</span>
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="font-black text-xl lg:text-2xl">
                        ${item.price}
                      </p>

                      <div className="bg-gray-200 rounded-full py-1 lg:py-3 px-3 lg:px-6 flex items-center gap-4">
                        <MinusIcon
                          className="cursor-pointer hover:opacity-80 transition"
                          onClick={() => updateQuantity(index, -1)}
                        />
                        <p className="font-semibold">{item.quantity}</p>
                        <PlusIcon
                          className="cursor-pointer hover:opacity-80 transition"
                          onClick={() => updateQuantity(index, 1)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {index !== cartItems.length - 1 && (
                  <hr className="border-gray-300" />
                )}
              </Fragment>
            ))}
          </div>
          <div className="flex-[2] ">
            <div className="px-5 lg:px-6 py-5 border rounded-3xl space-y-4 lg:space-y-6">
              <h3 className="font-bold text-xl lg:text-2xl">Order Summery</h3>
              <div className="space-y-5">
                <div className="flex justify-between">
                  <p className="text-black/60 text-base lg:text-xl">Subtotal</p>
                  <p className="font-bold text-base lg:text-xl">$565</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-black/60 text-base lg:text-xl">
                    Discount (-20%)
                  </p>
                  <p className="font-bold text-base lg:text-xl text-red-500">
                    -$113
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-black/60 text-base lg:text-xl">
                    Delivery fee
                  </p>
                  <p className="font-bold text-base lg:text-xl">$15</p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p className="text-black/60 text-base lg:text-xl">Total</p>
                  <p className="font-bold text-xl lg:text-2xl">$467</p>
                </div>
              </div>
              <form className="relative flex items-center gap-2 lg:gap-3">
                <label
                  htmlFor="search"
                  className="absolute left-3 top-3 text-black/40"
                >
                  <TagIcon />
                </label>
                <input
                  type="search"
                  placeholder="Add promo code"
                  className="w-full bg-[#F0F0F0] border-none outline-none py-3 pl-12 rounded-full text-black/40"
                />
                <button
                  type="submit"
                  className="bg-black text-white te xt-sm lg:text-base rounded-full py-3 px-4 lg:px-8"
                >
                  Apply
                </button>
              </form>

              <button className="bg-black text-white rounded-full py-4 px-8 w-full flex items-center justify-center gap-3">
                Go to Checkout <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
