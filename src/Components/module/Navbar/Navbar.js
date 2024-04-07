import React from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';

function Navbar() {
  return (
    <>
        <section className={style.navBar}>
            <div className="container">
                <div className={style.navbar_wrapper}>
                    <Link href='/'  className={style.navbar_logo}>
                        تکنوآ
                    </Link>

                    <ul className={style.navbar_items}>
                        <li className={style.navbar_item}>
                            <Link href='/' className={style.navbar_item_link}>خانه</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/' className={style.navbar_item_link}>درباره ما</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/' className={style.navbar_item_link}>خدمات ما</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/' className={style.navbar_item_link}>نمونه کارها</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/' className={style.navbar_item_link}>اخبار</Link>
                        </li>
                        <li className={style.navbar_item}>
                            <Link href='/' className={style.navbar_item_link}>تماس با ما</Link>
                        </li>
                    </ul>
                    <Link href='/' className={`${style.navbar_login} ${'button'}`}>ورود</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar