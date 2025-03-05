import React from "react";
import {
  FacebookIcon,
  Github,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import { integralCF } from "@/app/fonts";

export default function Footer() {
  return (
    <section className="bg-[#F2F0F1] px-4 lg:px-0 mt-40 lg:mt-24">
      <div className="container mx-auto -translate-y-1/2">
        <div className="bg-black rounded-3xl px-6 lg:px-16 py-9 flex items-center flex-col lg:flex-row lg:gap-14 gap-8">
          <h2
            className={`text-white text-[32px] lg:text-[40px] font-bold w-full ${integralCF.className}`}
          >
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <form className="w-full flex flex-col items-end gap-3.5">
            <div className="relative w-full lg:w-96">
              <label className="text-black/40 absolute left-5 top-1/2 -translate-y-1/2">
                <MailIcon />
              </label>
              <input
                type="text"
                className="w-full bg-white pl-14 py-3 rounded-full text-black/40 outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <button
              className="w-full lg:w-96 bg-white text-black rounded-full py-3"
              type="submit"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto -mt-28 lg:-mt-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-20">
          <div className="w-full lg:max-w-80">
            <img
              src="/images/logo.png"
              alt="logo"
              className="max-w-40 max-h-6"
            />
            <p className="text-black/60 mt-6">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex mt-5 lg:mt-9 items-center gap-3">
              <a
                href="#"
                target="_blank"
                className="size-7 flex justify-center items-center rounded-full border border-black/60 hover:border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <TwitterIcon size={15} />
              </a>
              <a
                href="#"
                target="_blank"
                className="size-7 flex justify-center items-center rounded-full border border-black/60 hover:border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <FacebookIcon size={15} />
              </a>
              <a
                href="#"
                target="_blank"
                className="size-7 flex justify-center items-center rounded-full border border-black/60 hover:border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="#"
                target="_blank"
                className="size-7 flex justify-center items-center rounded-full border border-black/60 hover:border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <Github size={15} />
              </a>
            </div>
          </div>
          <div className="w-full grid lg:grid-cols-4 grid-cols-2 items-center gap-6">
            <div>
              <h3 className="font-semibold uppercase">Company</h3>
              <ul className="mt-3 lg:mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase">Help</h3>
              <ul className="mt-3 lg:mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase">FAQ</h3>
              <ul className="mt-3 lg:mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Payments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase">Resources</h3>
              <ul className="mt-3 lg:mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black/60 hover:text-black hover:underline"
                  >
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="lg:my-10 my-4" />
        <div className="flex flex-col lg:flex-row justify-between items-center pb-16 gap-4 px-0 ">
          <p className="text-black/60 text-sm lg:text-base">
            Shop.co © {new Date().getFullYear()}. Developed by{" "}
            <a
              href="http://github.com/shafayeatt1995"
              className="underline text-black font-bold"
            >
              Shafayet Al-Anik
            </a>
          </p>
          <div className="px-10">
            <img
              src="/images/payment.png"
              alt="payment"
              className="lg:h-10 w-full lg:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
