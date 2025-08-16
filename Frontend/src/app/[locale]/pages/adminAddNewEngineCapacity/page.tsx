import React from "react";
import EngineCapacityForm from "@/app/adminpage/pages/engine_capacities/eng_cap_form/EngineCapacityForm";
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
      <EngineCapacityForm />
    </>
  );
};

export default page;
