import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import TitleSection from "../shared/TitleSection/TitleSection";
const ContactUs = () => {
  return (
    <>
      <div className="hero mt-20">
        <div className="flex flex-col w-full border-opacity-50 pb-8">
          <div className="divider w-[900px] divide
           mx-auto ">
            <TitleSection heading={"Contact Us"}/>
          </div>
          <div className="hero-content gap-8 p-12 w-full flex-col lg:flex-row">
            <div className="text-center w-1/2 lg:text-left bg-red-400 text-white">
              <div className="card-body space-y-5">
                <p>Blood Excellence!</p>
                <h1 className="text-4xl font-bold">
                  Expanded Blood Donate Services Here!
                </h1>
                <p className="">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                </p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <FaPhone className="mr-3 text-white" />
                    Contact : <span className="ml-8">(+880) 1798520000</span>
                  </p>
                  <p className="flex items-center">
                    <FaLocationDot className="mr-3 text-white" />
                    Location : <span className="ml-7">Tangail, Dhaka, Bangladesh</span>
                  </p>
                  <p className="flex items-center">
                    <FaClock className="mr-3 text-white" />
                    Mon-Fri : <span className="ml-8">8:00 am - 7:00 pm</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card w-1/2 bg-red-400 rounded-none">
              <form className="card-body">
                <div className="flex justify-between mb-3">
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="First Name"
                      className="input input-bordered border-none rounded-none bg-red-200 w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Last Name"
                      className="input input-bordered border-none rounded-none bg-red-200 w-full"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered border-none rounded-none bg-red-200 w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Subject"
                      className="input input-bordered border-none rounded-none bg-red-200 w-full"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <textarea
                    placeholder="Message"
                    className="textarea textarea-bordered textarea-lg rounded-none border-none bg-red-200 w-full"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-red-100 text-black hover:bg-black hover:text-white border-none rounded-none uppercase">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
