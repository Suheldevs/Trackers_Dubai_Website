'use client';
import NavFooter from "@/utils/Na_Fo";
import React from "react";
import { collection, disclosureInfo, idInfo, onlinePrivacy } from "./data";

// ====== Arrow SVG (in place of MUI ArrowRightAltIcon) ======
const ArrowRight = () => (
  <svg
    className="w-4 h-4 mr-1 text-black inline-block"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7 7l7-7-7-7" />
  </svg>
);

// ====== COMPONENT ======
const PrivacyPolicy = () => (
  <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-slate-200 to-slate-100
 flex flex-col">
        <NavFooter footer={true}>

    <header className="bg-white py-6 shadow">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-2 text-center">Privacy Policy</h1>
      </div>
    </header>

    <main className="flex-1 py-6">
      <section className="max-w-3xl mx-auto px-4 space-y-10">

        {/* Online Privacy Policy */}
        {onlinePrivacy.map((item, idx) => (
          <article data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
  key={idx}
  className="bg-white group hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-black p-6 rounded-lg shadow-sm border border-gray-200 space-y-2 transition-colors duration-200"
>
  <h2 className="text-xl font-semibold group-hover:text-black text-blue-900 transition-colors duration-200">
    {item.heading}
  </h2>
  <p className="group-hover:text-white text-black transition-colors duration-200">
    {item.para}
  </p>
</article>

        ))}

        {/* Collection Policy */}
        {collection.map((item, idx) => (
          <article data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" key={idx} className="bg-white group hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-black  p-6 rounded-lg shadow-sm border border-gray-200 space-y-2">
            <h2 className="text-xl font-semibold group-hover:text-black text-blue-900">{item.heading}</h2>
            <p className="text-black group-hover:text-white ">{item.para}</p>
            <ul className="ml-2">
              {item.points.map((point, pi) => (
                <li key={pi} className="flex group-hover:text-white items-start mt-1 text-black">
                  <ArrowRight />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-black group-hover:text-white">{item.para2}</p>
          </article>
        ))}

        {/* ID Info */}
        {idInfo.map((item, idx) => (
          <article data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" key={idx} className="bg-white group hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-black p-6 rounded-lg shadow-sm border border-gray-200 space-y-2">
            <h2 className="text-xl font-semibold group-hover:text-black text-blue-900">{item.heading}</h2>
            <p className="text-black group-hover:text-white">{item.para}</p>
            <strong className="block text-blue-900 group-hover:text-black mt-2">{item.title1}</strong>
            <ul className="ml-2 text-black ">
              {item.points1.map((point, pi) => (
                <li key={pi} className="flex items-start mt-1 text-black group-hover:text-white">
                  <ArrowRight />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <strong className="block text-blue-900 group-hover:text-black mt-2">{item.title2}</strong>
            <ul className="ml-2">
              {item.points2.map((point, pi) => (
                <li key={pi} className="flex items-start mt-1 text-black group-hover:text-white">
                  <ArrowRight />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-black group-hover:text-white">{item.para2}</p>
          </article>
        ))}

        {/* Disclosure Info */}
        {disclosureInfo.map((item, idx) => (
  <article data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    key={idx}
    className="bg-white group hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.01] border border-gray-200 space-y-2 transition-all duration-200 ease-in-out"
  >
    <h2 className="text-xl font-semibold text-blue-900 group-hover:text-white transition-colors duration-200">
      {item.title}
    </h2>

    {item.details.length > 0 ? (
      <ul  className="ml-2">
        {item.details.map((detail, di) => (
          <li
            key={di}
            className="flex items-start mt-1 text-black group-hover:text-white transition-colors duration-200"
          >
            <span className="min-w-[20px] group-hover:text-white transition-colors duration-200">
              {item.details.length > 1 ? `${di + 1}. ` : ""}
            </span>
            <span className="group-hover:text-white transition-colors duration-200">{detail}</span>
          </li>
        ))}
      </ul>
    ) : (
      <span className="block text-black group-hover:text-white transition-colors duration-200">—</span>
    )}
  </article>
))}

      </section>
    </main>
</NavFooter>
  
  </div>
);

export default PrivacyPolicy;