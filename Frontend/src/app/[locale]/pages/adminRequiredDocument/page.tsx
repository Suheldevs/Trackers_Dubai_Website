import React from "react";
import RequiredDocs from "@/app/adminpage/pages/required_docs/RequiredDocs";
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
      <RequiredDocs />
    </>
  );
};

export default page;
