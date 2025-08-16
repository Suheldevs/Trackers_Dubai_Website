import AcceptedEnquiry from '@/app/adminpage/pages/car_enquiries/enquiryStatus/acceptedEnquiry/AcceptedEnquiry'
import React from 'react'

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
 
  ];
}

const page = () => {
  return (
    <>
     <AcceptedEnquiry /> 
    </>
  )
}

export default page
