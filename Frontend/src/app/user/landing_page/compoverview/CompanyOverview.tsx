// "use client";
// import React from "react";
// import "../compoverview/compoverview.css";
// import { Container, Grid } from "@mui/material";
// import Image from "next/image";
// import mainImage from "../../../../../public/company-overview-img-1.jpg";
// import Link from "next/link";
// const CompanyOverview = () => {
//   return (
//     <section id="company_overview" className="company_overview">
//       <Container maxWidth="lg">
//         <div className="faq_head">
//           <h3>
//             Find the best car rental{" "}
//             <Link
//               href="https://logicrent.ae/"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "#01437d", textDecoration: "none" }}
//             >
//               company
//             </Link>{" "}
//             for you
//           </h3>
//         </div>
//         <Grid container sx={{ alignItems: "center" }} spacing={4}>
//           <Grid item xs={12} sm={6} md={6} lg={6}>
//             <div className="overview_text" style={{ padding: "0px 10px" }}>
//               <p style={{ marginBottom: "0.5rem" }}>
//                 <i>INJAZ</i> Cars Rental is the perfect choice for anyone
//                 seeking a reliable and affordable car rental provider in{" "}
//                 <b>Abu Dhabi</b>. With a wide selection of vehicles, competitive
//                 pricing, and exceptional customer service, <i>INJAZ</i> has
//                 established itself as a leader in the UAE’s car rental industry,
//                 Whether individual looking for a{" "}
//                 <Link
//                   href="/pages/carWithLocation/?daily=daily"
//                   style={{ color: "#01437d", textDecoration: "none" }}
//                 >
//                   short-term
//                 </Link>{" "}
//                 rental or a business in need of a{" "}
//                 <Link
//                   href="/pages/carWithLocation/?monthly=monthly"
//                   style={{ color: "#01437d", textDecoration: "none" }}
//                 >
//                   long-term
//                 </Link>{" "}
//                 lease
//               </p>
//             </div>
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={6}
//             lg={6}
//             sx={{
//               display: "flex",
//               justifyContent: "end",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               src={mainImage}
//               alt="company image"
//               loading="lazy"
//               width={400}
//               height={200}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </section>
//   );
// };

// export default CompanyOverview;


"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Award, Users, MapPin } from "lucide-react";
import mainImage from "../../../../../public/company-overview-img-1.jpg";
const CompanyOverview = () => {
  return (
    <section id="company_overview" className=" relative py-8 lg:py-12 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20">
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/10 to-transparent rounded-full -translate-x-36 -translate-y-36" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-slate-100/20 to-transparent rounded-full translate-x-48 translate-y-48" /> */}
      
      <div className="relative max-w-6xl mx-auto px-4 lg:px-6">
        
        {/* Header Section - Compact */}
        <div className="text-center mb-6 lg:mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full mb-3">
            <Award className="w-4 h-4 text-[#01437d]" />
            <span className="text-xs font-semibold text-[#01437d] uppercase tracking-wide">
              Trusted Since 2010
            </span>
          </div>
          
          <h2 data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Find the best car rental{" "}
            <Link
              href="https://logicrent.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#01437d] hover:text-blue-700 transition-colors duration-200 relative group"
            >
              company
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#01437d] transition-all duration-300 group-hover:w-full"></span>
            </Link>{" "}
            for you
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-4 lg:space-y-6">
            {/* Main description */}
            <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 lg:p-6 shadow-sm border border-gray-100/50">
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                <span className="font-bold text-[#01437d] text-lg">INJAZ</span> Cars Rental is the perfect choice for anyone
                seeking a reliable and affordable car rental provider in{" "}
                <span className="font-semibold text-gray-900">Abu Dhabi</span>. 
                With a wide selection of vehicles, competitive pricing, and exceptional customer service, 
                <span className="font-bold text-[#01437d]"> INJAZ</span> has established itself as a leader in the UAE&apos;s car rental industry.
              </p>
            </div>

            {/* Service options */}
            <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="grid sm:grid-cols-2 gap-3 lg:gap-4">
              <Link
                href="/pages/carWithLocation/?daily=daily"
                className="group bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 p-4 rounded-xl border border-blue-200/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#01437d] rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-[#01437d]">Short-term Rental</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Perfect for daily and weekly needs
                </p>
                <div className="flex items-center text-xs text-[#01437d] font-medium group-hover:translate-x-1 transition-transform">
                  <span>Explore options</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>

              <Link
                href="/pages/carWithLocation/?monthly=monthly"
                className="group bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 p-4 rounded-xl border border-green-200/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-green-700">Long-term Lease</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Ideal for business and extended stays
                </p>
                <div className="flex items-center text-xs text-green-700 font-medium group-hover:translate-x-1 transition-transform">
                  <span>View packages</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            </div>

            {/* Key features */}
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-gray-200/50">
                <Users className="w-3 h-3 text-[#01437d]" />
                <span className="text-xs font-medium text-gray-700">Expert Service</span>
              </div>
              <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-gray-200/50">
                <MapPin className="w-3 h-3 text-green-600" />
                <span className="text-xs font-medium text-gray-700">UAE Coverage</span>
              </div>
              <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full border border-gray-200/50">
                <Award className="w-3 h-3 text-yellow-600" />
                <span className="text-xs font-medium text-gray-700">Premium Fleet</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="relative lg:order-last">
            <div className="relative group">
              {/* Image container with modern styling */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg">
                <Image
                  src={mainImage}
                  alt="INJAZ Car Rental Company"
                  loading="lazy"
                  width={400}
                  height={280}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 lg:p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-gray-700">Available Now</span>
                </div>
                <p className="text-lg font-bold text-[#01437d]">500+</p>
                <p className="text-xs text-gray-600">Vehicles Ready</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                <Award className="w-5 h-5 text-[#01437d]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;