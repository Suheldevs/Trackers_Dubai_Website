import React from "react";
import FaqForm from "@/app/adminpage/pages/admin_faqs/admin_faq_form/FaqForm";
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
      <FaqForm />
    </>
  );
};

export default page;
