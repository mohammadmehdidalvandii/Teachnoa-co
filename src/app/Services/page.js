import Footer from '@/Components/module/Footer/Footer';
import Navbar from '@/Components/module/Navbar/Navbar';
import PageHeader from '@/Components/module/PageHeader/PageHeader';
import Service from '@/Components/template/Services/Service';
import React from 'react';

function page() {
  return (
    <>
        <Navbar/>
        <PageHeader
            title='خدمات'
            text='خدمات'
        />
        <Service/>
        <Footer/>
    </>
  )
}

export default page