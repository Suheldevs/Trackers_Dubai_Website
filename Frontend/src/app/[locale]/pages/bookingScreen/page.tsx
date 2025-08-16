import BookingScreen from '@/app/user/landing_page/bookingScreen/BookingScreen'
import React from 'react'
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
      <BookingScreen/>
    </>
  )
}

export default page
