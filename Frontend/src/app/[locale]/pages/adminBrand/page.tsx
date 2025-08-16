import React from "react";
import CarBrands from "@/app/adminpage/pages/car_brands/CarBrands";
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
      <CarBrands />
    </>
  );
};

export default page;
