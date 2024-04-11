import React from 'react';
import style from './Service.module.css';
import { FaLaptopCode } from "react-icons/fa";
import { MdSpeed , MdAttachMoney , MdEmail } from "react-icons/md";
import { IoIosSettings , IoMdAirplane } from "react-icons/io";
import { PiBellSimpleRingingFill } from "react-icons/pi";
import { TbDeviceMobileSearch } from "react-icons/tb";



function Service() {
  return (
    <section className={style.service}>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.service_item}>
                        <span className={style.Service_item_icon}>
                            <FaLaptopCode/>
                        </span>
                        <h4 className={style.service_item_title}>توسعه وب</h4>
                        <p className={style.service_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.service_item}>
                        <span className={style.Service_item_icon}>
                        <MdSpeed/>
                        </span>
                        <h4 className={style.service_item_title}>بهینه سازی سئو</h4>
                        <p className={style.service_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.service_item}>
                        <span className={style.Service_item_icon}>
                            <IoIosSettings/>
                        </span>
                        <h4 className={style.service_item_title}>راه حل IT</h4>
                        <p className={style.service_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.service_item}>
                        <span className={style.Service_item_icon}>
                            <MdAttachMoney/>
                        </span>
                        <h4 className={style.service_item_title}>کمپین دیجیتال</h4>
                        <p className={style.service_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.service_item}>
                        <span className={style.Service_item_icon}>
                            <PiBellSimpleRingingFill/>
                        </span>
                        <h4 className={style.service_item_title}>ترویج</h4>
                        <p className={style.service_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.service_item}>
                        <span className={style.Service_item_icon}>
                            <IoMdAirplane/>
                        </span>
                        <h4 className={style.service_item_title}>راه اندازی محصول</h4>
                        <p className={style.service_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.service_item}>
                        <span className={style.Service_item_icon}>
                            <MdEmail/>
                        </span>
                        <h4 className={style.service_item_title}>بازاریابی ایمیلی</h4>
                        <p className={style.service_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className={style.service_item}>
                        <span className={style.Service_item_icon}>
                            <TbDeviceMobileSearch/>
                        </span>
                        <h4 className={style.service_item_title}>نکهداری برنامه</h4>
                        <p className={style.service_item_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service