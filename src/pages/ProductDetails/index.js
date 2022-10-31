import React, { useEffect, useState } from "react";
import { Row, Col, Rate, Input } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.scss";
import { productCardData } from "../../constants/JsonData/productCardData";
import ProductCard from "../../components/Cards/productCard/productcard";
import Policys from "../../components/Policys/policy";
import Img1 from "../../assets/homeCatImgs/home-categories1.png";
import Img2 from "../../assets/homeCatImgs/home-categories2.svg";
import Img3 from "../../assets/homeCatImgs/home-categories3.svg";
import Img4 from "../../assets/homeCatImgs/home-categories4.svg";
import Img5 from "../../assets/homeCatImgs/home-categories5.svg";
import DeliveryImg from "../../assets/policys/shipping.svg";

function ProductDetails() {
  const [selectedTab, setselectedTab] = useState("Description");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Carousel showArrows={true}>
            {[Img1, Img2, Img3, Img4, Img5].map((item, index) => {
              return (
                <div>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
        </Col>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={24}
          xs={24}
          className={styles.details_left_side_wrapper}
        >
          <div className={styles.product_details_top_row}>
            <div className={styles.product_title}>
              Sneakers Sneakers For Men - Black, White
            </div>
            <div>Share</div>
          </div>
          <div className={styles.product_rating_wrapper}>
            <Rate defaultValue={4} disabled />
            <span className={styles.product_reviews}>4.9 (210 reviews)</span>
          </div>
          <div className={styles.product_status}>In Stock</div>
          <div className={styles.product_price_wrapper}>
            <div className={styles.product_price}>Price : ₹ 160</div>
            <div>
              <s>₹ 320</s>
            </div>
            <div className={styles.product_offer}>(50% off)</div>
          </div>
          <div className={styles.including_tax}>(Inclusive of all taxes)</div>
          <div className={styles.product_color}>
            <b>Color</b> : Black
          </div>
          <div className={styles.color_box_wrapper}>
            {["#000000", "#207ACD", "#3D3BB7", "#3BA1B7", "#FF8B66"]?.map(
              (item, index) => {
                return (
                  <div
                    className={styles.color_box}
                    style={{ backgroundColor: `${item}` }}
                  ></div>
                );
              }
            )}
          </div>
          <div className={styles.product_color}>
            <b>Sizes</b> : 10
          </div>
          <div className={styles.size_box_wrapper}>
            {[7, 8, 9, 10]?.map((item, index) => {
              return <div className={styles.size_box}>{item}</div>;
            })}
          </div>
          <div className={styles.product_details}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book Read More
          </div>
          <div className={styles.btn_wrapper}>
            <button className={styles.add_to_cart}>ADD TO CART</button>
            <button className={styles.buy_now_btn}>BUY NOW</button>
          </div>
          <div className={styles.delivery_option_wrapper}>
            <div className={styles.delivery_option_title}>Delivery Option</div>
            <img src={DeliveryImg} alt="" />
          </div>
          <div className={styles.input_wrapper}>
            <Input
              value={"591311"}
              placeholder="Enter Pin Code"
              suffix={<div className={styles.input_suffix}>CHANGE</div>}
            />
          </div>
          <div className={styles.delivery_time_wrapper}>
            <div className={styles.delivery_time}>
              Delivery by 11 PM, Tomorrow{" "}
            </div>
            <div className={styles.delivery_charge}>₹50</div>
          </div>
          <div className={styles.warrenty_text_wrapper}>
            <div className={styles.warrenty_text_point_circle}></div>
            <div className={styles.warrenty_text}>
              7 Days Replacement / Return | 1 Year Warranty
            </div>
          </div>
          {/* <div className={styles.offers_wrapper}>
            <div className={styles.offers_wrapper_title}>Available Offers</div>
            <img src={DeliveryImg} alt="" className={styles.offers_tag_img} />
          </div>
          <div>
            {["first line", "second line", "third line", "fourth line"]?.map(
              (item, index) => {
                return <li>{item}</li>;
              }
            )}
            <div>View All Offers</div>
          </div> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.tab_view_offer}>
            {["Description", "Ratings & Reviews"]?.map((item, index) => {
              return (
                <div
                  onClick={() => setselectedTab(item)}
                  className={
                    item === selectedTab
                      ? styles.selected_tab
                      : styles.unselected_tab
                  }
                >
                  {item}
                </div>
              );
            })}
          </div>
          {selectedTab === "Description" ? (
            <div className={styles.description_section_wrapper}>
              <div className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div className={styles.description_details}>
                <div className={styles.description_details_row}>
                  <div className={styles.description_details_title}>
                    Manufacturer
                  </div>
                  <div className={styles.description_details_answer}>:puma</div>
                </div>

                <div className={styles.description_details_row}>
                  <div className={styles.description_details_title}>
                    Country of origin
                  </div>
                  <div className={styles.description_details_answer}>
                    :india
                  </div>
                </div>

                <div className={styles.description_details_row}>
                  <div className={styles.description_details_title}>Brand</div>
                  <div className={styles.description_details_answer}>:puma</div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.review_section_wrapper}>reviews</div>
          )}
        </Col>
      </Row>
      <Row>
        <div>
          <div className={styles.recommended}>
            <div className={styles.recommended_left_section}>
              {productCardData?.label1}
            </div>
            <div className={styles.recommended_right_section}>
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
      </Row>
      <Policys />
      <div style={{ paddingTop: "0.5%" }}> </div> {/* //no need of this line*/}
    </div>
  );
}

export default ProductDetails;
