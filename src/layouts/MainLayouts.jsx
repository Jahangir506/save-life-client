import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayouts = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <>
     {noHeaderFooter || <div className="fixed  z-50 bg-[#F0412E] w-full">
        <Navbar></Navbar>
      </div>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </>
  );
};
export default MainLayouts;
