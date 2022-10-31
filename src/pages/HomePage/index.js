import React from "react";
import HomeCategories from "../../components/HomeComponents/HomeCategories/homecategories";
import HomeFullFledgedBanner from "../../components/HomeComponents/HomeFullFledgedBanner/fullfledgedbanner";
import HomePopulerProduct from "../../components/HomeComponents/HomeMostPopulerProduct/populerproduct";
import HomeRecommendedProduct from "../../components/HomeComponents/HomeRecommendedProducts/recommendedProduct";
import HomeSubBanners from "../../components/HomeComponents/HomeSubBanners/homesubbanner";
import MobileAppBanner from "../../components/HomeComponents/MobileAppBanner/mobileappbanner";
import TopBanner from "../../components/HomeComponents/TopBanner/topbanner";
import Policys from "../../components/Policys/policy";
function HomePage() {
  return (
    <div style={{ paddingBottom: "1px" }}>
      <TopBanner />
      <HomeCategories />
      <HomeSubBanners />
      <HomePopulerProduct />
      <HomeFullFledgedBanner />
      <HomeRecommendedProduct />
      <MobileAppBanner />
      <Policys />
    </div>
  );
}

export default HomePage;
