import React from "react";
import CarEnquiries from "@/app/adminpage/pages/car_enquiries/CarEnquiries";
// src/app/[locale]/page.tsx
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
    // baaki locales
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
