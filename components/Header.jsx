import React from "react";
import {
  ChevronDownIcon,
  CircleUserRoundIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <section>
      <div className="bg-black">
        <div className="container mx-auto relative">
          <p className="text-white text-center py-2 text-xs lg:text-sm">
            Sign up and get 20% off to your first order.{" "}
            <a href="#" className="underline font-semibold">
              Sign Up Now
            </a>
          </p>
          <button
            type="button"
            className="absolute text-white top-0 right-2 h-full flex items-center  cursor-pointer"
          >
            <XIcon />
          </button>
        </div>
      </div>
      <div className="container mx-auto border-b py-6 px-4 lg:px-0">
        <div className="flex items-center justify-between gap-10">
          <div className="flex gap-3">
            <MenuIcon size={26} className="cursor-pointer lg:hidden" />
            <Link href="/">
              <img src="/images/logo.png" className="max-w-40 max-h-6" />
            </Link>
          </div>
          <ul className="ml-auto gap-6 hidden md:flex">
            <li>
              <a href="#" className="flex items-center">
                Shop <ChevronDownIcon size={18} />
              </a>
            </li>
            <li>
              <Link href="/category">Category</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
          <div className="flex-1 hidden lg:block">
            <form className="relative">
              <label
                htmlFor="search"
                className="absolute left-3 top-3 text-black/40"
              >
                <SearchIcon />
              </label>
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full bg-[#F0F0F0] border-none outline-none py-3 pl-12 rounded-full text-black/40"
              />
            </form>
          </div>
          <ul className="flex gap-3.5 ">
            <li className="lg:hidden">
              <a href="#">
                <SearchIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <ShoppingCartIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <CircleUserRoundIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
