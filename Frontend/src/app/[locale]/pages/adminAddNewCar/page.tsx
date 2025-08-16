import AddCarform from "@/app/adminpage/pages/admin_cars/addnewcar/AddCarform";
import React from "react";
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
      <AddCarform />
    </>
  );
};

export default page;
