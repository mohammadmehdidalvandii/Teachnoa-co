import React from 'react';
import style from './TitleCenter.module.css';

function TitleCenter({title , text}) {
  return (
    <section className={style.titleCenter}>
        <div className={style.titleCenter_wrapper}>
            <h2 className={style.titleCenter_title}>{title}</h2>
            <p className={style.titleCenter_text}>{text}</p>
        </div>
    </section>
  )
}

export default TitleCenter