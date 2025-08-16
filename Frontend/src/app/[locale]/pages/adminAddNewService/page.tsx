import React from "react";
import ManageServiceForm from "@/app/adminpage/pages/manage_services/manage_serv_form/ManageServiceForm";
export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ar" },
    // agar aur locales hain to add karo
  ];
}
const page = () => {
  return (
    <div>
      <ManageServiceForm />
    </div>
  );
};

export default page;
