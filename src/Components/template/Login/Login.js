import React from 'react';
import style from './Login.module.css';
import Link from 'next/link'

function Login() {
  return (
    <section className={style.login}>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <div className={style.login_wrapper}>
                    <h5 className={style.login_title}>ورود</h5>
                  <form action="#" className='form'>
                    <div className='form_link_text'>
                      <span className='form_text'>ایا حساب کاربری ندارید ؟</span>
                      <Link href='/Register' className='form_link'>ایجاد حساب</Link>
                    </div>
                    <input type="text" className='form_input' placeholder='آدرس ایمیل' />
                    <input type="password" className='form_input' placeholder='رمز عبور' />
                    <Link href='/' className='form_forget'>رمز خود را فراموش کردید؟</Link>
                    <button className='form_submit button'>ورود</button>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Login