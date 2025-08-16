"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cardData } from "./data";

export default function HowItWorks() {
  return (
    <section className="how-it-works bg-white py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-6 text-center">
          <h3 className="text-3xl font-semibold">
            How It{" "}
            <Link
              href="https://www.szgmc.gov.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#01437d] no-underline hover:underline ml-1"
            >
              Works
            </Link>
          </h3>
        </div>

        {/* Subheading */}
        <div  className="mb-10 text-center">
          <h4 className="text-xl font-medium text-black">
            Make it happens in 4 easy steps! Best Of Luck
          </h4>
        </div>

        {/* Cards Grid */}
        <div 
   className="bg-slate-100 rounded-lg shadow-sm" aria-label="How it works steps"
        >
          <div 
     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {cardData.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-4"
              >
                <Image data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
                  src={item.src}
                  alt={item.heading}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="object-contain"
                />
                <h3 data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="text-lg font-semibold text-[#01437d]">
                  {item.heading}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
