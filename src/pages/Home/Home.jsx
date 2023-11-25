import ContactUs from "../../components/ContactUs/ContactUs";
import Banner from "./Banner/Banner";
import SaveLifePerformance from "./SaveLifePerformance/SaveLifePerformance";
import Services from "./Services/Services";

const Home = () => {
    return(
        <>
             <Banner></Banner>
             <div className="max-w-7xl mx-auto">
                <Services/>
                <SaveLifePerformance/>
                <ContactUs/>
             </div>
        </>
    )}
export default Home;