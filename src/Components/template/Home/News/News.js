import React from 'react';
import style from './News.module.css';
import TitleCenter from '@/Components/module/TitleCenter/TitleCenter';
import NewsCard from '@/Components/module/NewsCard/NewsCard';

function News() {
  return (
    <section className={style.news}>
        <div className="container">
            <div className="row">
                <TitleCenter
                    title='اخبار'
                    text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                />
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <NewsCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <NewsCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <NewsCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News