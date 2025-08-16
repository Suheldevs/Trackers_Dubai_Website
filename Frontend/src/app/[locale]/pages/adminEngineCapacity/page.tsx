import React from "react";
import EngineCapacities from "@/app/adminpage/pages/engine_capacities/EngineCapacities";
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
      <EngineCapacities />
    </>
  );
};

export default page;
