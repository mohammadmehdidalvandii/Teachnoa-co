import React from 'react';
import style from './SampleWork.module.css';

function SampleWork() {
  return (
    <section className={style.sampleWork}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.sampleWork_card}>
                        <img src="/images/smw.jpg" alt="work-image" className={style.sampleWork_card_img} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.sampleWork_card}>
                        <img src="/images/smw.jpg" alt="work-image" className={style.sampleWork_card_img} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.sampleWork_card}>
                        <img src="/images/smw.jpg" alt="work-image" className={style.sampleWork_card_img} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.sampleWork_card}>
                        <img src="/images/smw.jpg" alt="work-image" className={style.sampleWork_card_img} />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.sampleWork_card}>
                        <img src="/images/smw.jpg" alt="work-image" className={style.sampleWork_card_img} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SampleWork