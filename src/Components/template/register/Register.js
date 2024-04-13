import React from 'react';
import style from './Register.module.css';
import Link from 'next/link'

function Register() {
  return (
    <section className={style.register}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.register_wrapper}>
                        <h5 className={style.register_title}>ثبت نام !</h5>
                        <form action="#" className="from">
                        <div className='form_link_text'>
                      <span className='form_text'>ایا حساب کاربری دارید ؟</span>
                      <Link href='/Login' className='form_link'>ورود</Link>
                    </div>
                    <input type="text" className='form_input' placeholder='نام و نام خانوادگی' />
                    <input type="text" className='form_input' placeholder='آدرس ایمیل' />
                    <input type="text" className='form_input' placeholder='تلفن' />
                    <input type="password" className='form_input' placeholder='رمز عبور' />
                    <button className='form_submit button'>ثیت نام</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register