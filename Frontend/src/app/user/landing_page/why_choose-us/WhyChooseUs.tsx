import React from "react";
import Image from "next/image";
import { Star, Award, MapPin, Shield } from "lucide-react";

const WhyChooseUsSection = () => {
  

 type FeatureColor = "blue" | "green" | "purple" | "red";

interface Feature {
  id: number;
  title: string;
  image: string;
  alt: string;
  description: string;
  icon: React.ElementType;
  color: FeatureColor;
}

const features: Feature[] = [
  {
    id: 1,
    title: "#1 CAR RENTAL SERVICE PROVIDER AROUND DUBAI AND ABU DHABI",
    image: "/1-Small-enoughwebp.webp",
    alt: "#1 CAR RENTAL SERVICE PROVIDER AROUND DUBAI AND ABU DHABI",
    description:
      "Our personable service, delivered by locals who know the area...",
    icon: Award,
    color: "blue",
  },
  {
    id: 2,
    title: "FLEXIBLE PICK UP AND DROP OFF SERVICE",
    image: "/2-Flexiblewebp.webp",
    alt: "FLEXIBLE PICK UP AND DROP OFF SERVICE",
    description:
      "Our friendly staff pick you up from your location...",
    icon: MapPin,
    color: "green",
  },
  {
    id: 3,
    title: "QUALITY SERVICE",
    image: "/6-Qualitywebp.webp",
    alt: "QUALITY SERVICE",
    description:
      "With a wide range of vehicles, optional extras – such as child seats...",
    icon: Star,
    color: "purple",
  },
  {
    id: 4,
    title: "SAFETY",
    image: "/7-Safetywebp.webp",
    alt: "SAFETY",
    description:
      "INJAZ car Rental espouse the highest standards of safety...",
    icon: Shield,
    color: "red",
  },
];

const getColorClasses = (color: FeatureColor) => {
  const colorMap = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      hover: "hover:from-blue-500 hover:to-blue-600",
      icon: "text-blue-500",
      border: "border-blue-200",
    },
    green: {
      bg: "from-green-50 to-green-100",
      hover: "hover:from-green-500 hover:to-green-600",
      icon: "text-green-500",
      border: "border-green-200",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      hover: "hover:from-purple-500 hover:to-purple-600",
      icon: "text-purple-500",
      border: "border-purple-200",
    },
    red: {
      bg: "from-red-50 to-red-100",
      hover: "hover:from-red-500 hover:to-red-600",
      icon: "text-red-500",
      border: "border-red-200",
    },
  };
  return colorMap[color];
};


  return (
    <section className="relative py-8 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/10 to-purple-100/10 rounded-full transform translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100/10 to-yellow-100/10 rounded-full transform -translate-x-40 translate-y-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-10">
          {/* Badge */}
          <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
              Premium Car Rental Experience
            </span>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          </div>

          <h2 data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              INJAZ Cars
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="text-lg lg:text-xl font-semibold text-gray-800">
              At INJAZ Car Rental our expert staff offer a high quality service at a lower price than our competitors.
            </h3>
            
           
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colors = getColorClasses(feature.color);
            
            return (
              <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
                key={feature.id}
                className={`
                  group relative bg-gradient-to-br ${colors.bg} rounded-3xl p-6 lg:p-8
                  border ${colors.border} shadow-sm transition-all duration-500
                  hover:shadow-2xl hover:scale-[1.02] ${colors.hover} hover:text-white
                  cursor-pointer overflow-hidden
                `}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_currentColor_1px,_transparent_0)] bg-[length:24px_24px]" />
                </div>
                
                {/* Content Layout */}
                <div className="relative flex flex-col lg:flex-row items-start gap-6">
                  
                  {/* Left side - Icon and Image */}
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    {/* Icon */}
                    <div className="flex justify-center lg:justify-start mb-4">
                      <div className={`
                        w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm 
                        flex items-center justify-center shadow-md group-hover:bg-white/95
                        transition-all duration-300 group-hover:scale-110
                      `}>
                        <IconComponent className={`w-7 h-7 ${colors.icon}  transition-colors duration-300`} />
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={feature.image}
                          alt={feature.alt}
                          width={200}
                          height={175}
                          loading="lazy"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-4 leading-tight">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-700 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-sm lg:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-current opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Bottom border accent */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colors.hover.replace('hover:', '')} w-0 group-hover:w-full transition-all duration-500 rounded-full`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true" className="inline-flex items-center justify-center gap-4 lg:gap-6 bg-white/80 backdrop-blur-sm px-6 lg:px-8 py-4 rounded-2xl border border-gray-200/50 shadow-sm">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-sm lg:text-base font-semibold text-gray-700">
                Award Winning Service
              </span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm lg:text-base font-semibold text-gray-700">
                100% Safe & Secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;