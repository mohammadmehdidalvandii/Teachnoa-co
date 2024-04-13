import Footer from "@/Components/module/Footer/Footer";
import Navbar from "@/Components/module/Navbar/Navbar";
import Register from "@/Components/template/register/Register";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
        <Register/>
      <Footer />
    </>
  );
}

export default page;
