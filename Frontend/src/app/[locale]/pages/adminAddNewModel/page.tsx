import React from "react";
import AddNewModel from "@/app/adminpage/pages/car_models/model_form/AddNewModel";
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
      <AddNewModel />
    </>
  );
};

export default page;
