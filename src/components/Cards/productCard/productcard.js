import React from "react";
import styles from "./productcard.module.scss";
import { useNavigate } from "react-router-dom";
function ProductCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate("/product-details")}>
      {data?.off_percentage && <div className={styles.traingle}></div>}
      {data?.off_percentage && (
        <>
          <div className={styles.offer_percentage}>50%</div>
        </>
      )}

      {data?.imgs?.slice(0, 1)?.map((item, index) => {
        return <img className={styles.card_img} src={item} alt="" />;
      })}
      <div className={styles.card_title}>{data?.title}</div>
      <div className={styles.card_price}>
        <div className={styles.card_price_left}>
          <div className={styles.card_discount_price}>
            {data?.discount_price}
          </div>
          <div>
            <s className={styles.card_actual_price}>{data?.actual_price}</s>
          </div>
        </div>
        <div>
          <button className={styles.add_to_card_btn}>ADD</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
