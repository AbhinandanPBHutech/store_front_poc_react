import React from "react";
import styles from "./categorycard.module.scss";

function CategoriesCard({ data }) {
  console.log("data+++", data);
  return (
    <div className={`${styles.container}`}>
      <img className={`${styles.card_img}`} src={data?.img} alt="" />
      <div className={`${styles.card_title} text-center`}>{data?.title}</div>
    </div>
  );
}

export default CategoriesCard;
