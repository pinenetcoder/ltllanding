import React from "react";
import Slider from "react-slick";
import styles from '@/styles/IndexHeroSlider.module.scss'
import Link from "next/link";


export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function() {
      return (
       <div className="index-page-hero-slider-dot" style={{width: '12px', height: '12px', backgroundColor: "#E8E8E8", borderRadius: '50%'}}></div>
      );
    },
  };

  return (
    <Slider {...settings} className={styles.indexPageSlider}>
      <div className={styles.slickSlide}>
        <div className="container">
          <div className={styles.slideContent}>
            <h1>Making the dream <br /> possible at a fraction <br /> of the price</h1>
            <p>
              With Kocomo, a home is co-owned by no more than eight families 
              while we act as a neutral third-party administrator to ensure transparency and fairness
            </p>

            <div className="action-button-block">
              <Link className="light-green-action-button" href="/">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slickSlide}>
        <div className="container">
          <div className={styles.slideContent}>
            <h1>Making the dream <br /> possible at a fraction <br /> of the price</h1>
            <p>
              With Kocomo, a home is co-owned by no more than eight families 
              while we act as a neutral third-party administrator to ensure transparency and fairness
            </p>

            <div className="action-button-block">
              <Link className="light-green-action-button" href="/">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.slickSlide}>
        <div className="container">
          <div className={styles.slideContent}>
            <h1>Making the dream <br /> possible at a fraction <br /> of the price</h1>
            <p>
              With Kocomo, a home is co-owned by no more than eight families 
              while we act as a neutral third-party administrator to ensure transparency and fairness
            </p>

            <div className="action-button-block">
              <Link className="light-green-action-button" href="/">Learn more</Link>
            </div>
          </div>
        </div>
      </div>            
    </Slider>
  );
}