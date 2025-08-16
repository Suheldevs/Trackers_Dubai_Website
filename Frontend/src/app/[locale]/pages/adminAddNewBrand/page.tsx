import React from "react";
import AddNewBrand from "@/app/adminpage/pages/car_brands/brandForm/AddNewBrand";
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
      <AddNewBrand />
    </>
  );
};

export default page;
