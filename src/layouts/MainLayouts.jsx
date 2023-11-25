import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <>
      <div className="fixed shadow-md  z-50 bg-[#F0412E] w-full">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
export default MainLayouts;
