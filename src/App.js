import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import ProductDetails from "./pages/ProductDetails";
import TopHeader from "../src/components/Header/TopHeader/topheader";
function App() {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product-details" element={<ProductDetails />} />
        {/* <Route path="OtpScreen" element={<OtpScreen mobileNum={mobileNum}/>}/> */}
      </Routes>
    </>
  );
}

export default App;
