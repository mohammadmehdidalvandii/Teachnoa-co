import React from 'react';
import style from './NewsItem.module.css';
import NewsCard from '@/Components/module/NewsCard/NewsCard';

function NewsItem() {
  return (
    <section className={style.newsItem}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <NewsCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <NewsCard/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <NewsCard/>
                </div>
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

export default NewsItem