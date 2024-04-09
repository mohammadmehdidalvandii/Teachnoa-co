import React from 'react';
import style from './Counter.module.css';
import { FaUsers , FaChartSimple} from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";



function Counter() {
  return (
    <section className={style.counter}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.counter_wrapper}>
                        <div className={style.counter_item}>
                                <span className={style.counter_item_icon}>
                                    <FaUsers/>
                                </span>
                                <h4 className={style.counter_item_number}>8097</h4>
                                <p className={style.counter_item_desc}>مشتریان خوشحال</p>
                        </div>
                        <div className={style.counter_item}>
                                <span className={style.counter_item_icon}>
                                    <FaChartSimple/>
                                </span>
                                <h4 className={style.counter_item_number}>780</h4>
                                <p className={style.counter_item_desc}>پروژه های انجام شد</p>
                        </div>
                        <div className={style.counter_item}>
                                <span className={style.counter_item_icon}>
                                    <IoSettings/>
                                </span>
                                <h4 className={style.counter_item_number}>7800</h4>
                                <p className={style.counter_item_desc}>پشتیانی</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Counter