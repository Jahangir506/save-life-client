import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import TitleSection from "../shared/TitleSection/TitleSection";
const ContactUs = () => {
  return (
    <>
      <div className="hero shadow-2xl bg-base-100 my-20">
        <div className="flex flex-col w-full border-opacity-50 py-8">
          <div className="divider w-[900px] divider-error mx-auto ">
            <TitleSection contact={"Contact Us"}/>
          </div>
          <div className="hero-content gap-8 p-12 w-full flex-col lg:flex-row-reverse">
            <div className="text-center w-1/2 lg:text-left bg-red-500 text-white">
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
                    Emergency Line: (002) 01798520000
                  </p>
                  <p className="flex items-center">
                    <FaLocationDot className="mr-3 text-white" />
                    Location: Street 68, Dhaka, Tangail
                  </p>
                  <p className="flex items-center">
                    <FaClock className="mr-3 text-white" />
                    Mon-Fri: 8:00 am - 7:00 pm
                  </p>
                </div>
              </div>
            </div>
            <div className="card w-1/2 bg-red-300 rounded-none">
              <form className="card-body">
                <div className="flex justify-between mb-3">
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="First Name"
                      className="input input-bordered border-none rounded-none bg-gray-100 w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Last Name"
                      className="input input-bordered border-none rounded-none bg-gray-100 w-full"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered border-none rounded-none bg-gray-100 w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Subject"
                      className="input input-bordered border-none rounded-none bg-gray-100 w-full"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <textarea
                    placeholder="Message"
                    className="textarea textarea-bordered textarea-lg rounded-none border-none bg-gray-100 w-full"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-red-500 text-white hover:bg-black border-none rounded-none uppercase">Login</button>
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
