import React from "react";
import AdminFaqs from "@/app/adminpage/pages/admin_faqs/AdminFaqs";
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
      <AdminFaqs />
    </>
  );
};

export default page;
