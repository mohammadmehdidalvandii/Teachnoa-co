import React from "react";
import style from "./Banner.module.css";
import Link from "next/link";

function Banner() {
  return (
    <section className={style.banner}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.banner_content}>
              <h5 className={style.banner_content_text}>
                نوآوری با مورد اعتماد
              </h5>
              <h1 className={style.banner_content_title}>راه حل های فن آوری</h1>
              <p className={style.banner_content_paraph}>
                الگوی وب سایت راه حل های فناوری اطلاعات. افزایش سرعت وب سایت شما{" "}
              </p>

              <Link href="/" className={`${style.Banner_link} ${"button"}`}>
                دریافت نقل قول
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              src="/images/banner-1.png"
              alt="banner-png"
              className={style.banner_img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
