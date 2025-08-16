'use client';
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import NavFooter from "@/utils/Na_Fo";  // Adjust import if needed or remove if not used

// FAQ content data
const box1 = [
  {
    head: "FREQUENTLY ASKED QUESTIONS",
    subHead:
      "Have questions about renting car in Musaffah or Rent A Car in Abu Dhabi? Explore our frequently asked questions below to find answers to your queries.",
  },
];

const box2 = [
  {
    head:
      "Who can rent a car from INJAZ RENT A CAR, and is there a minimum rental period?",
    subHead: "INJAZ Car Rental offers services to:",
    list: ["Tourists", "UAE residents", "UAE nationals"],
    subHead2:
      "To rent a car, individuals must provide the required documentation.",
  },
];

const box3 = [
  {
    head: "Minimum Rental Period RENT A CAR:",
    subHead:
      "Yes, we have a minimum rental period of 24 hours starting from the time of delivery.",
  },
];

const box4 = [
  {
    head: "What are the requirements to hire a car from INJAZ Car Rental?",
    subHead:
      "To use our rent a car in Abu Dhabi or Dubai service, the requirements are as follows:",
    listOneHead: "For UAE Residents:",
    listOne: [
      "Must be at least 25 years old.",
      "Must hold a valid UAE driving license that is at least six months old.",
    ],
    listTwoHead: "For Tourists:",
    listTwo: [
      "Must hold a valid International Driving License.",
      "Additional required documents include:",
      "A copy of your Visa.",
      "A copy of your Passport.",
    ],
    subHeadTwo:
      "If you have further questions or require assistance, please contact your local INJAZ Reservations Office for support or send mail to info@injazrent.ae",
  },
];

const box5 = [
  {
    head:
      "What should I know about parking in the UAE while using Rent A Car?",
    list: [
      {
        s1: "Parking is generally",
        s2: "readily available",
        s3: "across the UAE.",
      },
      {
        s1: "Be cautious of",
        s2: "paid parking zones",
        s3: "and ensure you pay the required fees to avoid fines.",
      },
      {
        s1:
          "To conveniently manage parking payments in Abu Dhabi, Dubai, Sharjah, and Ajman, it is recommended to install the",
        s2: "Prkn application",
        s3: ".",
      },
    ],
  },
];

const box6 = [
  {
    head: "What should I do if a breakdown or accident occurs Rent A Car?",
    subHead:
      "If your rental car, such as a Toyota Yaris, experiences a breakdown or accident, follow these steps:",
  },
];

const box7 = [
  {
    head: "In Case of a Breakdown:",
    list: [
      {
        s1: "Do not panic; INJAZ Car Rental provides",
        s2: "24/7 roadside assistance",
        s3: "anywhere in the UAE.",
      },
      {
        s1: "Contact our roadside assistance team immediately at",
        s2: "+971-50-996-1569 or +971-50-237-8558",
        s3: ".",
      },
    ],
  },
];

const box8 = [
  {
    head: "In Case of an Accident:",
    points: [
      {
        head: "1. Do Not Move the Vehicle:",
        list: [
          "Leave the car at the accident site unless:",
          "There is minimal damage.",
          "The vehicle is causing a traffic obstruction.",
        ],
      },
      {
        head: "2. Contact the Police:",
        list: [
          "Call the authorities immediately and remain with the vehicle until they arrive.",
        ],
      },
      {
        head: "3. Obtain a Police Report:",
        list: [
          "The customer must provide a police report to facilitate an insurance claim for the damage.",
        ],
      },
    ],
  },
];

// Compose FAQ Data for accordion rendering
const faqData = [
  {
    title: box2[0].head,
    content: (
      <div >
        <p className="text-gray-700 mb-2">{box2[0].subHead}</p>
        <ul className="list-disc list-inside mb-2 pl-4">
          {box2[0].list.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <p className="text-gray-700">{box2[0].subHead2}</p>
      </div>
    ),
  },
  {
    title: box3[0].head,
    content: <p className="text-gray-700">{box3[0].subHead}</p>,
  },
  {
    title: box4[0].head,
    content: (
      <>
        <p className="text-gray-700 mb-2">{box4[0].subHead}</p>
        <div className="mb-2">
          <p className="font-semibold text-gray-800">{box4[0].listOneHead}</p>
          <ul className="list-disc list-inside pl-4 mb-2">
            {box4[0].listOne.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-gray-800">{box4[0].listTwoHead}</p>
          <ul className="list-disc list-inside pl-4 mb-2">
            {box4[0].listTwo.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
        <p className="text-gray-700">{box4[0].subHeadTwo}</p>
      </>
    ),
  },
  {
    title: box5[0].head,
    content: (
      <ul className="list-disc list-inside pl-4">
        {box5[0].list.map((l, i) => (
          <li key={i} className="mb-2">
            <span className="text-gray-700">{l.s1} <span className="font-semibold">{l.s2}</span>{l.s3}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: box6[0].head,
    content: <p className="text-gray-700">{box6[0].subHead}</p>,
  },
  {
    title: box7[0].head,
    content: (
      <ul className="list-disc list-inside pl-4">
        {box7[0].list.map((l, i) => (
          <li key={i} className="mb-1">
            <span className="text-gray-700">{l.s1} <span className="font-semibold">{l.s2}</span>{l.s3}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: box8[0].head,
    content: (
      <>
        {box8[0].points.map((pt, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">{pt.head}</p>
            <ul className="list-disc list-inside pl-4">
              {pt.list.map((li, j) => <li key={j} className="text-gray-700">{li}</li>)}
            </ul>
          </div>
        ))}
      </>
    ),
  },
];

// Main Component with animated background
export default function NewFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      
      {/* Animated Gradient Background */}
      <div
        className="
          fixed inset-0 z-0 
          bg-gradient-to-br from-slate-50 via-slate-200 to-slate-100
          bg-[length:200%_200%]
          animate-bgGradient
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* Main Content - above background */}
      <div className="relative z-10">
        <NavFooter footer>
          <div className="max-w-2xl mx-auto py-10 px-4">
            {/* FAQ Header */}
            <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="mb-10">
              <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">{box1[0].head}</h2>
              <p className="text-blue-500 text-lg text-center">{box1[0].subHead}</p>
            </div>

            {/* FAQ Accordion */}
            <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="space-y-4">
              {faqData.map((item, idx) => (
                <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" key={idx} className="bg-white/90 border border-blue-300 shadow-xl rounded-lg overflow-hidden backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center px-5 py-4 focus:outline-none group"
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="text-left text-lg font-medium text-blue-900 group-hover:text-blue-700">
                      {item.title}
                    </span>
                    <ChevronDownIcon
                      className={`w-5 h-5 ml-2 transition-transform duration-300 text-blue-500 ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={`faq-panel-${idx}`}
                    className={`px-5 py-3 text-gray-700 border-t transition-all duration-300 ease-in-out ${
                      openIndex === idx ? "block" : "hidden"
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </NavFooter>
      </div>
    </div>
  );
}
