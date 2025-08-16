import React from "react";
import PhoneAndEmail from "@/app/adminpage/pages/adminSettings/phoneAndEmail/PhoneAndEmail";
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
      <PhoneAndEmail />
    </>
  );
};

export default page;
