"use client";

import React from "react";
import Rating from "./Rating";

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
            <Rating rating={product.rating} />
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
