import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const ProductList = () => (
  <div className="">
    <div className="flex justify-center items-center bg-primary">
      <div className="container py-[28px]">
        <Navbar />
      </div>
    </div>
    <div className="flex justify-center items-center bg-primary">
      <div className="container">
        <Banner />
      </div>
    </div>
  </div>
);

export default ProductList;
