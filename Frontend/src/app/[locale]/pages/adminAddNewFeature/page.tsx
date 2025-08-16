import React from "react";
import CarFeatureForm from "@/app/adminpage/pages/car_features/car_feature_from/CarFeatureForm";
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
      <CarFeatureForm />
    </>
  );
};

export default page;
