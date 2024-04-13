import Footer from '@/Components/module/Footer/Footer';
import Navbar from '@/Components/module/Navbar/Navbar';
import PageHeader from '@/Components/module/PageHeader/PageHeader';
import SampleWork from '@/Components/template/smWork/SampleWork';
import React from 'react';

function page() {
  return (
    <>
    <Navbar/>
    <PageHeader
        title='نمونه کار'
        text='نمونه کار'
    />
    <SampleWork/>
    <Footer/>
    </>
  )
}

export default page