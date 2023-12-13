import TitleSection from "../../../components/shared/TitleSection/TitleSection";
import s1 from "../../../assets/images/s1.jpg";
import s2 from "../../../assets/images/s2.jpg";
import s3 from "../../../assets/images/s3.jpg";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="pt-20">
        <TitleSection subHeading={"What We Do"} heading={"Our Best Services"} />
        <div className="my-12">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <motion.div className="w-1/2" whileHover={{ scale: 1.1 }}>
                <img
                  src={s1}
                  className="max-w-6xl w-full lg:w-[625px] shadow-2xl"
                />
              </motion.div>
              <div className="w-1/2 ml-10">
                <h1 className="text-7xl mb-2 font-bold opacity-40">01</h1>
                <h1 className="text-4xl font-bold">Blood Donation</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-red-500 text-white px-6 hover:bg-black rounded-none border-none">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <motion.div className="w-1/2" whileHover={{ scale: 1.1 }}>
                <img
                  src={s2}
                  className="max-w-6xl w-full lg:w-[625px] shadow-2xl"
                />
              </motion.div>

              <div className="w-1/2 text-end mr-10">
                <h1 className="text-7xl mb-2 font-bold opacity-40">02</h1>
                <h1 className="text-4xl font-bold">Health Check</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-red-500 text-white px-6 hover:bg-black rounded-none border-none">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="hero-content flex-col lg:flex-row">
            <motion.div className="w-1/2" whileHover={{ scale: 1.1 }}>
              <img
                src={s3}
                className="max-w-6xl w-full lg:w-[625px] shadow-2xl"
              />
            </motion.div>
            <div className="w-1/2 ml-10">
              <h1 className="text-7xl mb-2 font-bold opacity-40">03</h1>
              <h1 className="text-4xl font-bold">Blood Bank</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-red-500 text-white px-6 hover:bg-black rounded-none border-none">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
