"use client"
import React, { useState } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';
import { FaBars , FaTimes  } from "react-icons/fa";


function Navbar() {
    const [menuNav , setMenuNav] = useState(false);
    const [activeMenu , setActiveMenu] = useState('/')

    const handlerMenuNav = ()=>{
        setMenuNav(! menuNav)
    }
  return (
    <>
        <section className={`${style.navBar} ${'d-none d-lg-flex'}`}>
            <div className="container">
                <div className={style.navbar_wrapper}>
                    <Link href='/'  className={style.navbar_logo}>
                        تکنوآ
                    </Link>

                    <ul className={style.navbar_items}>
                        <li className={style.navbar_item}>
                            <Link href='/' className={ activeMenu === '/' ?  style.navbar_item_link_active  :style.navbar_item_link} >خانه</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/About' className={ activeMenu === '/About' ?  style.navbar_item_link_active  :style.navbar_item_link} >درباره ما</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/Services' className={ activeMenu === '/Services' ?  style.navbar_item_link_active  :style.navbar_item_link} >خدمات ما</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/Sm_work' className={ activeMenu === '/Sm_work' ?  style.navbar_item_link_active  :style.navbar_item_link} >نمونه کارها</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/News' className={ activeMenu === '/News' ?  style.navbar_item_link_active  :style.navbar_item_link} >اخبار</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/Contact' className={ activeMenu === '/Contact' ?  style.navbar_item_link_active  :style.navbar_item_link} >تماس با ما</Link>
                        </li>
                    </ul>
                    <Link href='/' className={`${style.navbar_login} ${'button'}`}>ورود</Link>
                </div>
            </div>
        </section>
        
        <section className={`${style.navbar_Res} ${'d-block d-lg-none'}`}>
            <div className="container">
                <div className={style.navbar_Res_wrapper}>
                    <Link href='/' className={style.navbar_Res_logo}>
                        تنکوآ
                    </Link>
                    {menuNav ? (
                           <span className={style.navbar_Res_icon} onClick={handlerMenuNav}>
                           <FaTimes />
                       </span>
                    ) :(
                        <span className={style.navbar_Res_icon} onClick={handlerMenuNav}>
                        <FaBars/>
                    </span>
                    )}
                    
                        {menuNav && (
                            <ul className={style.navbar_Res_items}>
                            <li className={style.navbar_Res_item}>
                                <Link  href='/' className={activeMenu === '/'? style.navbar_Res_item_linkActive : style.navbar_Res_item_link}>خانه</Link>
                            </li>
                            <li className={style.navbar_Res_item}>
                                <Link  href='/About' className={activeMenu === '/About'? style.navbar_Res_item_linkActive : style.navbar_Res_item_link}>درباره ما</Link>
                            </li>
                            <li className={style.navbar_Res_item}>
                                <Link  href='/Services' className={activeMenu === '/Services'? style.navbar_Res_item_linkActive : style.navbar_Res_item_link}>خدمات ما</Link>
                            </li>
                            <li className={style.navbar_Res_item}>
                                <Link  href='/Sm_work' className={activeMenu === '/Sm_work'? style.navbar_Res_item_linkActive : style.navbar_Res_item_link}>نمونه کارها</Link>
                            </li>
                            <li className={style.navbar_Res_item}>
                                <Link  href='/News' className={activeMenu === '/News'? style.navbar_Res_item_linkActive : style.navbar_Res_item_link}>اخبار</Link>
                            </li>
                            <li className={style.navbar_Res_item}>
                                <Link  href='/Contact' className={activeMenu === '/Contact'? style.navbar_Res_item_linkActive : style.navbar_Res_item_link}>تماس با ما</Link>
                            </li>
                            <li className={style.navbar_Res_item}>
                                <Link  href='/Login' className={activeMenu === '/Login'? style.navbar_Res_item_linkActive : style.navbar_Res_item_link}>ورود</Link>
                            </li>
                        </ul>
                        )}
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar