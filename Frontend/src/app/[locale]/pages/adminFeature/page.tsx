import React from "react";
import CarFeatures from "@/app/adminpage/pages/car_features/CarFeatures";
export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" },
    // agar aur locales hain to add karo
  ];
}
const page = () => {
  return (
    <>
      <CarFeatures />
    </>
  );
};

export default page;
