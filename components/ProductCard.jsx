"use client";

import React from "react";

export default function ProductCard({ product, className }) {
  return (
    <div className={className}>
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
            {product.rating}/<span className="text-black/60">5</span>
          </p>
        </div>
        <div className="flex items-center gap-1.5 lg:gap-2.5">
          <p className="text-xl lg:text-2xl font-bold">${product.price}</p>
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
  );
}
