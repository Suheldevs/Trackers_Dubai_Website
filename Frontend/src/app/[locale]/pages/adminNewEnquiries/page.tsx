import React from "react";
import NewEnquiry from "@/app/adminpage/pages/car_enquiries/enquiryStatus/newEnquiry/NewEnquiry";
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
      <NewEnquiry />
    </>
  );
};

export default page;
