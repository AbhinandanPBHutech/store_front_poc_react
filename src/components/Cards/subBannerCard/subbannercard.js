import React from "react";
import styles from "./subbannercard.module.scss";
function SubBannerCard({ data }) {
  return (
    <div
      className={`${styles.container} flex`}
      style={{ backgroundColor: `${data?.bg_color}` }}
    >
      <div className={`${styles.card_left} p-3`}>
        <div className={`${styles.top_text}`}>{data?.top_text}</div>
        <div className={`${styles.secondery_text}`}>{data?.secondery_text}</div>
        <div className={`${styles.tertiary_text}`}>{data?.tertiary_text}</div>
        <div className={`${styles.action_text}`}>{data?.action_text}</div>
      </div>
      <div className={`${styles.card_right}`}>
        <img src={data?.img} alt="" className={`${styles.card_img}`} />
      </div>
    </div>
  );
}

export default SubBannerCard;
