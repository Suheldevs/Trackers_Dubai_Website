import React from "react";
import CreatedCarMain from "@/app/adminpage/pages/createdCars/AddCarform";
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
      <CreatedCarMain />
    </>
  );
};

export default page;
