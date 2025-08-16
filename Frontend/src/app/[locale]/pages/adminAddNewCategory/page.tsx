import React from "react";
import AddNewCateMain from "@/app/adminpage/pages/manage_catego/mancat_form/AddNewCateMain";
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
      <AddNewCateMain />
    </>
  );
};

export default page;
