import "../SaveLifePerformance/SaveLifePerformance.css";
import { Parallax } from "react-parallax";
import bg from "../../../assets/images/home-bg.jpg";

const SaveLifePerformance = () => {
  return (
    <>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={bg}
        bgImageAlt="the performance"
        strength={-300}
      >
        <div className="hero  my-20">
          <div className="hero-content space-x-36 text-center text-black opacity-75">
            <div className="max-w-sm">
              <h1 className="mb-5 text-4xl font-bold">0</h1>
              <p className="mb-5 text-xl font-semibold">Year Experience</p>
            </div>
            <div className="max-w-sm">
              <h1 className="mb-5 text-4xl font-bold">0</h1>
              <p className="mb-5 text-xl font-semibold">Happy Donors</p>
            </div>
            <div className="max-w-sm">
              <h1 className="mb-5 text-4xl font-bold">0</h1>
              <p className="mb-5 text-xl font-semibold">Total Awards</p>
            </div>
            <div className="max-w-sm">
              <h1 className="mb-5 text-4xl font-bold">0</h1>
              <p className="mb-5 text-xl font-semibold">Happy Recipient</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};
export default SaveLifePerformance;
