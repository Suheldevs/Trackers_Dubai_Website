import React from "react";
import CarModels from "@/app/adminpage/pages/car_models/CarModels";
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
      <CarModels />
    </>
  );
};

export default page;
