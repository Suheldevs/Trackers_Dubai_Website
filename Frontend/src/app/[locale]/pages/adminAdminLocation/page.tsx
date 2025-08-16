import React from "react";
import AdminLocation from "@/app/adminpage/pages/admin_location/AdminLocation";
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
      <AdminLocation />
    </>
  );
};

export default page;
