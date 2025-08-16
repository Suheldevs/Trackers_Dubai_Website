import React from "react";
import LocationForm from "@/app/adminpage/pages/admin_location/admin_location_form/LocationForm";
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
      <LocationForm />
    </>
  );
};

export default page;
