import React from "react";
import style from "./CommentCard.module.css";

function CommentCard() {
  return (
    <div className={style.commentCard}>
      <img
        src="/images/cm-1.jpg"
        alt="comment-user"
        className={style.commentCard_img}
      />
      <h5 className={style.commentCard_name}>سارا کرمانی</h5>
      <span className={style.commentCard_jobName}>طراح وب</span>
      <p className={style.commentCard_text}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
    </div>
  );
}

export default CommentCard;
