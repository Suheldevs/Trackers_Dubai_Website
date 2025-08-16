import React from "react";
import CarEnquiries from "@/app/adminpage/pages/car_enquiries/CarEnquiries";
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
      <CarEnquiries />
    </>
  );
};

export default page;
