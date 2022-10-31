import React, { useState } from "react";
import styles from "./mobileappbanner.module.scss";
import Img from "../../../assets/mobileAppBanner/mobile-img.png";
import AppleStoreImg from "../../../assets/mobileAppBanner/apple-store.png";
import PlayStoreImg from "../../../assets/mobileAppBanner/play-store.png";
import QrCodeImg from "../../../assets/mobileAppBanner/qr-code.png";
import { Row, Col, Input, Button } from "antd";
function MobileAppBanner() {
  return (
    <div className={styles.container}>
      <Row>
        <Col
          xl={15}
          lg={15}
          md={15}
          sm={24}
          xs={24}
          className={styles.left_side}
        >
          <div className={styles.left_side_div}>
            <div className={styles.first_line}>
              Download our latest application for better user experience.
            </div>
            <div className={styles.second_line}>
              We will send you a link, open it on your phone to download the app
            </div>
            <div className={styles.input_wrapper}>
              <Input placeholder="Enter Mobile Number or Email" />
              <button className={styles.input_wrapper_btn}>Send Link</button>
            </div>
            <div className={styles.availability}>
              <div className={styles.availability_one}>
                Available On iOS and Android
              </div>
              <div className={styles.availability_two}>Scan For Download</div>
            </div>
            <div className={styles.availability_flatform}>
              <img src={AppleStoreImg} alt="" />
              <img src={PlayStoreImg} alt="" />
              <img src={QrCodeImg} alt="" />
            </div>
          </div>
        </Col>
        <Col xl={9} lg={9} md={9} sm={24} xs={24}>
          <img className={styles.mobile_img} src={Img} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default MobileAppBanner;
