import RejectedEnquiry from '@/app/adminpage/pages/car_enquiries/enquiryStatus/rejectedEnquiry/RejectedEnquiry';
import React from 'react';
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
      <RejectedEnquiry/>
    </>
  )
}

export default page
