import React from "react";
import RequiredDocsForm from "@/app/adminpage/pages/required_docs/req_docs_from/RequiredDocsForm";
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
      <RequiredDocsForm />
    </>
  );
};

export default page;
