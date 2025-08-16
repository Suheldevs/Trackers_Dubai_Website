'use client';
import React from "react";
import NavFooter from "@/utils/Na_Fo";
import { data, wordsToHighlight } from "./data";

// --- DYNAMIC HIGHLIGHT LOGIC ---
const styleWords = (text: any, wordsToStyle: any) => {
  const regex = new RegExp(`(${wordsToStyle.join("|")})`, "gi");
  return text.replace(
    regex,
    (matched: any) =>
      `<span style="font-weight: bold; color: #01437d;">${matched}</span>`
  );
};

// --- MAIN COMPONENT ---
const TermsAndCondition = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <NavFooter footer={true}>
      {/* Header */}
      <header className="bg-white py-6 shadow">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-balck mb-2 text-center">
            Terms &amp; Conditions
          </h2>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-6">
        <section className="max-w-4xl mx-auto px-4 space-y-10">
          {data.map((item, i) => (
            <article data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
              key={i}
              className="group bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 p-6 rounded-lg shadow-sm hover:shadow-lg border border-gray-200 space-y-4 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-blue-900 group-hover:text-black transition-colors duration-200">
                {item.heading}
              </h3>

              <div className="space-y-2">
                {item.text.map((paragraph, pidx) => (
                  <p
                    key={pidx}
                    className="text-black group-hover:text-white text-base leading-relaxed transition-colors duration-200"
                    dangerouslySetInnerHTML={{
                      __html: styleWords(paragraph, wordsToHighlight)
                    }}
                  />
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </NavFooter>
  </div>
);

export default TermsAndCondition;
