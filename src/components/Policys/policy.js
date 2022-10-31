import React from "react";
import styles from "./policy.module.scss";
import { policyData } from "../../constants/JsonData/policyData";
import { Row, Col } from "antd";
function Policys() {
  return (
    <div className={styles.container}>
      <Row>
        {policyData?.data?.map((item, index) => {
          return (
            <Col xl={6} lg={24} md={6} sm={24} className={styles.card}>
              <img className={styles.policy_img} src={item?.img} alt="" />
              <div className={styles.policy_text_wrapper}>
                <div className={styles.heading}>{item?.heading}</div>
                <div className={styles.sub_heading}>{item?.sub_heading}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Policys;
