import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';
import { FaFacebookF , FaTwitter , FaGoogle } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";



function Footer() {
  return (
    <section className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className={style.footer_content}>
               <h2 className={style.footer_content_title}>تکنوآ .</h2>
               <p className={style.footer_content_desc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
               <div className={style.footer_content_media}>
                  <Link href='/' className={style.footer_content_linkMedia}>
                    <FaFacebookF/>
                  </Link>
                  <Link href='/' className={style.footer_content_linkMedia}>
                    <FaTwitter/> 
                  </Link>
                  <Link href='/' className={style.footer_content_linkMedia}>
                    <FaGoogle/>
                  </Link>
               </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <h4 className={style.footer_title}>لینک های مفید</h4>
              <div className={style.footer_wrapper}>
                <ul className={style.footer_items}>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>خانه</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>خدمات</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>گواهینامه</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>درباره ما</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>سوالات متدوال</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>اخبارما</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                      <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>تیم ما</span>
                    </Link>
                  </li>
                </ul>

                <ul className={style.footer_items}>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>درباره ما</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>نمونه کارها</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>تماس با ما</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>قیمت گذاری</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>به زوردی</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>خدمات ما</span>
                    </Link>
                  </li>
                  <li className={style.footer_item}>
                    <Link href='/' className={style.footer_item_link}>
                      <span className={style.footer_item_icon}>
                        <MdKeyboardDoubleArrowLeft/>
                      </span>
                      <span className={style.footer_item_text}>بسته ها</span>
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <h4 className={style.footer_title}>تماس با ما :</h4>
              <div className={style.footer_address}>
                <h6 className={style.footer_address_title}>آدرس ما :</h6>
                  <span className={style.footer_address_text}>
                  خیابان معلم کوچه باغ نوش
                  </span>
              </div>
              <div className={style.footer_address}>
                <h6 className={style.footer_address_title}> تماس با ما :</h6>
                  <span className={style.footer_address_text}>
                    021-22221111
                  </span>
                  <span className={style.footer_address_text}>
                    021-22221111
                  </span>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer