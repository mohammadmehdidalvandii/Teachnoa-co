import React from 'react';
import style from './Contact.module.css';

function Contact() {
  return (
    <section className={style.contact}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.contact_item}>
                        <h4 className={style.contact_item_title}>دفتر آمریکا</h4>
                        <h6 className={style.contact_item_minTitle}>تلفن تماس:</h6>
                        <span className={style.contact_item_text}>+ ۱ ۱۲۳۴ ۵۶ ۷۸۹</span>
                        <span className={style.contact_item_text}>+ ۱ ۱۲۳۴ ۵۶ ۷۸۹</span>
                        <h6 className={style.contact_item_minTitle}>ایمیل:</h6>
                        <span className={style.contact_item_text}>info@example.com</span>
                        <span className={style.contact_item_text}>email@example.com</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.contact_item}>
                        <h4 className={style.contact_item_title}>دفترکانادا</h4>
                        <h6 className={style.contact_item_minTitle}>تلفن تماس:</h6>
                        <span className={style.contact_item_text}>+ ۱ ۱۲۳۴ ۵۶ ۷۸۹</span>
                        <span className={style.contact_item_text}>+ ۱ ۱۲۳۴ ۵۶ ۷۸۹</span>
                        <h6 className={style.contact_item_minTitle}>ایمیل:</h6>
                        <span className={style.contact_item_text}>info@example.com</span>
                        <span className={style.contact_item_text}>email@example.com</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.contact_item}>
                        <h4 className={style.contact_item_title}>دفتر دبی</h4>
                        <h6 className={style.contact_item_minTitle}>تلفن تماس:</h6>
                        <span className={style.contact_item_text}>+ ۱ ۱۲۳۴ ۵۶ ۷۸۹</span>
                        <span className={style.contact_item_text}>+ ۱ ۱۲۳۴ ۵۶ ۷۸۹</span>
                        <h6 className={style.contact_item_minTitle}>ایمیل:</h6>
                        <span className={style.contact_item_text}>info@example.com</span>
                        <span className={style.contact_item_text}>email@example.com</span>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h3 className={style.contact_title}>ارسال پیام به ما </h3>
                    <form action="#" className={style.contact_form}>
                        <div className={style.contact_form_wrapper}>
                        <input type="text" className={style.contact_form_input}  placeholder='نام و نام خانوادگی *'/>
                        <input type="text" className={style.contact_form_input}  placeholder='ایمیل*'/>
                        </div>
                        <input type="text" className={style.contact_form_input}  placeholder='موضوع*'/>
                        <textarea className={style.contact_form_text} placeholder='پیام'></textarea>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact