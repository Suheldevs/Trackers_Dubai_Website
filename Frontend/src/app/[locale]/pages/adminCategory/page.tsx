import React from 'react';
import ManageCategories from '@/app/adminpage/pages/manage_catego/ManageCategories';
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
      <ManageCategories />
    </>
  )
}

export default page
