import React from "react";
import ContactEnquiries from "@/app/adminpage/pages/contact_enquiries/ContactEnquiries";
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
      <ContactEnquiries />
    </>
  );
};

export default page;
