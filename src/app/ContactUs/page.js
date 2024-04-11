import Footer from '@/Components/module/Footer/Footer';
import Navbar from '@/Components/module/Navbar/Navbar';
import PageHeader from '@/Components/module/PageHeader/PageHeader';
import Contact from '@/Components/template/contact/Contact';
import React from 'react';

function page() {
  return (
    <>
        <Navbar/>
        <PageHeader 
            title='تماس با ما'
            text='تماس با ما'
        />
        <Contact/>
        <Footer/>
    </>
  )
}

export default page