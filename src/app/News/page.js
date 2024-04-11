import Footer from '@/Components/module/Footer/Footer'
import Navbar from '@/Components/module/Navbar/Navbar'
import PageHeader from '@/Components/module/PageHeader/PageHeader'
import NewsItem from '@/Components/template/news/NewsItem'
import React from 'react'

function page() {
  return (
    <>
        <Navbar/>
        <PageHeader
            title='اخبار'
            text='اخبار'
        />
        <NewsItem/>
        <Footer/>
    </>
  )
}

export default page