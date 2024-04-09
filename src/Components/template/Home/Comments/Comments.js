import React from 'react';
import style from './Comments.module.css';
import TitleCenter from '@/Components/module/TitleCenter/TitleCenter'
import CommentCard from '@/Components/module/CommentCard/CommentCard';

function Comments() {
  return (
    <section className={style.comments}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <TitleCenter
                        title='تیم'
                        text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                   <CommentCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comments