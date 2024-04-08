import React from 'react';
import style from './Services.module.css';
import { FaCode } from "react-icons/fa6";
import { IoMdTimer , IoMdSettings } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";




function Services() {
  return (
    <section className={style.services}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className={style.services_item}>
                        <span className={style.services_item_icon}>
                            <FaCode/>
                        </span>
                        <h6 className={style.services_item_title}>توسعه وب</h6>
                        <p className={style.services_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className={style.services_item}>
                        <span className={style.services_item_icon}>
                            <IoMdTimer/>
                        </span>
                        <h6 className={style.services_item_title}>بهینه سازی سئو</h6>
                        <p className={style.services_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className={style.services_item}>
                        <span className={style.services_item_icon}>
                            <IoMdSettings/>
                        </span>
                        <h6 className={style.services_item_title}>راه فناوری</h6>
                        <p className={style.services_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <div className={style.services_item}>
                        <span className={style.services_item_icon}>
                            <FaMoneyBillAlt/>
                        </span>
                        <h6 className={style.services_item_title}>مالی </h6>
                        <p className={style.services_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services