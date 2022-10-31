import React, { useLayoutEffect, useState } from "react";
import { categoriesData } from "../../../constants/JsonData/subBannerData";
import Slider from "react-slick";
import styles from "./homesubbanner.module.scss";
import SubBannerCard from "../../Cards/subBannerCard/subbannercard";

function HomeSubBanners() {
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
    <div className={`${styles.container}`}>
      <div className="px-10">
        <Slider
          slidesToShow={size < 600 ? 1 : 2}
          prevArrow={null}
          nextArrow={null}
          {...settings}
        >
          {categoriesData?.data?.map((item, index) => {
            return <SubBannerCard data={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default HomeSubBanners;
