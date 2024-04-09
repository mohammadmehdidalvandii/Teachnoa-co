import React from "react";
import style from './NewsCard.module.css';

function NewsCard() {
  return (
    <div className={style.newsCard}>
      <img
        src="/images/blog-1.jpg"
        alt="news image"
        className={style.newsCard_img}
      />
      <div className={style.newsCard_content}>
        <span className={style.newsCard_category}>دامنه و هاست</span>
        <h5 className={style.newsCard_title}>
          چگونه می توان وب سایت را در هر ارائه دهنده میزبانی میزبانی کرد؟
        </h5>
        <span className={style.newsCard_creator}>علی تابش</span>
        <span className={style.newsCard_date}>11 اردیبهشت</span>
      </div>
    </div>
  );
}

export default NewsCard;
