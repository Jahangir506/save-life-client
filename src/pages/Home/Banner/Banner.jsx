import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen banner">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-max space-y-8">
            <h1 className="mb-5 text-5xl font-bold text-white opacity-90">
             Connect to Save-Life blood donation <br /> searchers with donors
            </h1>
            <p className="mb-5 max-w-xl mx-auto">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center items-center gap-5">
              <Link to="/register">
                <button className="btn bg-red-500 text-white hover:bg-black border-none  rounded px-8 uppercase">
                  Join as a Donor
                </button>
              </Link>
              <Link to="/searchDonors">
                <button className="btn bg-white hover:bg-red-500 border-none text-red-500 uppercase hover:text-white rounded px-5">
                  Search Donors
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
