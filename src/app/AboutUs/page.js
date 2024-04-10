import Footer from "@/Components/module/Footer/Footer";
import Navbar from "@/Components/module/Navbar/Navbar";
import PageHeader from "@/Components/module/PageHeader/PageHeader";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <PageHeader title="درباره ما" text="درباره ما" />
      <Footer />
    </>
  );
}

export default page;
