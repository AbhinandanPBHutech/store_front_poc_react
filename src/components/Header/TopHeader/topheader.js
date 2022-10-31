import React from "react";
import styles from "./topheader.module.scss";
function TopHeader() {
  return (
    <div className={`${styles.container} flex justify-between py-3`}>
      <div className={`${styles.top_header_left_side} flex pl-5`}>
        <div className={`${styles.top_header_left_user_name} underline`}>
          HOME
        </div>
        <div className={`${styles.top_header_left_user_city} pl-5`}>
          Banglore
        </div>
      </div>
      <div className={`${styles.top_header_right_side} pr-5`}>
        <div className={`${styles.top_header_right_side_text}`}>My Account</div>
      </div>
    </div>
  );
}

export default TopHeader;
