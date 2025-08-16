import React from "react";
import BannerImages from "@/app/adminpage/pages/adminSettings/bannerImages/BannerImages";
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
      <BannerImages />
    </>
  );
};

export default page;
