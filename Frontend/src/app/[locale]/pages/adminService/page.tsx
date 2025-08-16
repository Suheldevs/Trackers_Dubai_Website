import React from "react";
import ManageServices from "@/app/adminpage/pages/manage_services/ManageServices";
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
      <ManageServices />
    </>
  );
};

export default page;
