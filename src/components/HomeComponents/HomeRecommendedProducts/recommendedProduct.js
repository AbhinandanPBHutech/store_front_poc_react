import React from "react";
import { productCardData } from "../../../constants/JsonData/productCardData";
import styles from "./recommendedProduct.module.scss";
import { Row, Col } from "antd";
import ProductCard from "../../Cards/productCard/productcard";
function HomeRecommendedProduct() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.top_row}>
        <div className={styles.top_row_left_section}>
          {productCardData?.label1}
        </div>
        <div className={styles.top_row_right_section}>
          {productCardData?.label2}
        </div>
      </div>
      <div>
        <Row gutter={[32, 32]}>
          {productCardData?.data?.slice(0, 4)?.map((item, index) => {
            return (
              <Col xs={24} xl={6} lg={6} md={8} sm={24}>
                <ProductCard data={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default HomeRecommendedProduct;
