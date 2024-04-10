import Footer from "@/Components/module/Footer/Footer";
import Navbar from "@/Components/module/Navbar/Navbar";
import PageHeader from "@/Components/module/PageHeader/PageHeader";
import WhyUs from "@/Components/template/Home/WhyUs/WhyUs";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <PageHeader title="درباره ما" text="درباره ما" />
      <WhyUs/>
      <Footer />
    </>
  );
}

export default page;
