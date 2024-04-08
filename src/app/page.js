import Navbar from '@/Components/module/Navbar/Navbar'
import Banner from '@/Components/template/Home/Banner/Banner'
import Services from '@/Components/template/Home/Services/Services'
import React from 'react'

function page() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
    </>
    )
}

export default page