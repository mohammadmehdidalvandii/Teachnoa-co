import Navbar from '@/Components/module/Navbar/Navbar'
import Banner from '@/Components/template/Home/Banner/Banner'
import Comments from '@/Components/template/Home/Comments/Comments'
import Counter from '@/Components/template/Home/Counter/Counter'
import Services from '@/Components/template/Home/Services/Services'
import WhyUs from '@/Components/template/Home/WhyUs/WhyUs'
import React from 'react'

function page() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <WhyUs/>
      <Counter/>
      <Comments/>
    </>
    )
}

export default page