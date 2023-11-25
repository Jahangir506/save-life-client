import ContactUs from "../../components/ContactUs/ContactUs";
import Banner from "./Banner/Banner";
import SaveLifePerformance from "./SaveLifePerformance/SaveLifePerformance";
import Services from "./Services/Services";
import "./homeOutlet.css";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="homeOutletBg">
        <div className=" max-w-7xl mx-auto ">
          <Services />
          <SaveLifePerformance />
          <ContactUs />
        </div>
      </div>
    </>
  );
};
export default Home;
