import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

const DetailProduct = () => (
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

    <div className="flex justify-center items-center bg-secondary h-[300px]">
      <div className="container"></div>
    </div>

    <div className="flex justify-center items-center bg-primary">
      <div className="container">
        <JoinUs />
      </div>
    </div>

    <div className="flex justify-center items-center bg-white">
      <div className="container">
        <Footer />
      </div>
    </div>
  </div>
);

export default DetailProduct;
