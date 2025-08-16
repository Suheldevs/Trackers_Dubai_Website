"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { carCategories } from "./data";

export default function CarCategorySection() {
  const router = useRouter();

  return (
    <div className="bg-[#f9fbfd] py-12 min-h-[60vh]" id="carWithCategoryID">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-[#01437d] drop-shadow-sm">
            INJAZ RENTAL CARS – Deposit Free
          </h1>
          <h2 className="text-lg font-semibold text-[#22263c]">
           Best Car Rental Services in {" "}
            <Link
              href="/pages/carWithLocation/?locaNametion=Abu Dhabi"
              className="text-[#01437d] hover:text-blue-700 underline underline-offset-4 font-bold ml-1"
            >
              Abu Dhabi
            </Link>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {carCategories.map((car, index) => (
            <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
              key={index}
              className="cursor-pointer transition-all duration-200 hover:shadow-xl bg-white rounded-xl overflow-hidden max-w-xs mx-auto group hover:-translate-y-1"
              onClick={() =>
                router.push(`/pages/carWithCategory?category=${car.category}`)
              }
            >
              
              <div className="flex items-center justify-center bg-[#f3f8fc] h-32 md:h-36">
                <Image
                  src={car.src}
                  alt={car.category}
                  loading="lazy"
                  width={220}
                  height={96}
                  className="object-contain hover:scale-105 w-auto h-full"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <p className="text-[#01437d] font-semibold text-base mb-1 text-center">
                  {car.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
