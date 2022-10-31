import React, { useLayoutEffect, useState } from "react";
import { categoriesData } from "../../../constants/JsonData/categoryData";
import Slider from "react-slick";
import styles from "./homecategories.module.scss";
import CategoriesCard from "../../Cards/categoryCard/categorycard";
function HomeCategories() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
  };

  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.top_row} flex justify-between mb-3`}>
        <div className={`${styles.label1}`}>{categoriesData?.label1}</div>
        <div className={`${styles.label2}`}>{categoriesData?.label2}</div>
      </div>
      <div className="px-10">
        <Slider
          slidesToShow={size < 600 ? 1 : 6}
          prevArrow={null}
          nextArrow={null}
          {...settings}
        >
          {categoriesData?.data?.map((item, index) => {
            return (
              <div>
                <CategoriesCard data={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default HomeCategories;
