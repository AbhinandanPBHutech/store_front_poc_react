import React, { useState } from "react";
import styles from "./fullfledgedbanner.module.scss";
import Img from "../../../assets/fullFledgedBanner/full-fledged-banner.png";
import Img2 from "../../../assets/topBannerImgs/top-banner.png";
function HomeFullFledgedBanner() {
  const [bannerData, setBannerData] = useState([
    {
      first_line: "Save up to 60% off on your first order",
      second_line: "Don’t miss our daily amazing deals.",
      action_text: "SHOP NOW",
    },
  ]);
  return (
    <div className={styles.container}>
      <picture>
        <source
          media="(min-width:650px)"
          className={styles.banner_img_desctop}
          alt=""
          srcset={Img}
        />
        <source
          media="(min-width:465px)"
          className={styles.banner_img_mobile}
          alt=""
          srcset={Img2}
        />
        <img
          className={styles.banner_img_mobile}
          srcset={Img2}
          alt=""
          style={{ width: "auto" }}
        />
      </picture>
      {/* <img src={Img     } alt="" className={styles.banner_img} /> */}
      <div className={styles.text_container}>
        <div className={styles.first_line}>{bannerData[0]?.first_line}</div>
        <div className={styles.second_line}>{bannerData[0]?.second_line}</div>
        <button className={styles.action_btn}>
          {bannerData[0]?.action_text}
        </button>
      </div>
    </div>
  );
}

export default HomeFullFledgedBanner;
