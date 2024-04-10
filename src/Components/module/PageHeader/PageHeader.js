import React from 'react';
import style from './PageHeader.module.css';
import Link from 'next/link'

function PageHeader({title , text}) {
  return (
   <section className={style.pageHeader}>
        <div className={style.pageHeader_content}>
            <h2 className={style.pageHeader_content_title}>{title}</h2>
            <p className={style.pageHeader_content_desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className={style.pageHeader_route}>
          <Link href='/' className={style.pageHeader_route_link}>خانه</Link>
            /
            <span className={style.pageHeader_route_text}>{text}</span>
        </div>
   </section>
  )
}

export default PageHeader