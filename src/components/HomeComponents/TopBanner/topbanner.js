import React from "react";
import { topBannerData } from "../../../constants/JsonData/topBannerData";
import Slider from "react-slick";
import styles from "./topbanner.module.scss";

function TopBanner() {
  console.log("?////", topBannerData);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.container}>
      <Slider autoplay={true} prevArrow={null} nextArrow={null} {...settings}>
        {topBannerData?.data?.map((item, index) => {
          return (
            <div className={`${styles.top_banner}`}>
              <img src={item.img} alt="slider-img" />
              <div
                className={
                  item?.text_position === "left"
                    ? styles.left_align
                    : item?.text_position === "right"
                    ? styles.right_align
                    : styles.left_align // make it to center
                }
              >
                <div className={styles.first_line}>
                  Save up to 60% off on your first order
                </div>
                <div className={styles.second_line}>
                  Don’t miss our daily amazing deals.
                </div>
                <button className={styles.banner_action}>SHOP NOW</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TopBanner;
