import "./Banner.css";

const Banner = () => {
  return (
    <>
      {/* <div>
        <img src={banner} alt="" className="h-[700px] w-full" />
      </div> */}
      <div
        className="hero min-h-screen banner"
        // style={{
        //   backgroundImage:
        //     "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-max space-y-8">
            <h1 className="mb-5 text-5xl font-bold">
              SMS-based platform to connect <br /> blood searchers with donors
            </h1>
            <p className="mb-5 max-w-xl mx-auto">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center items-center gap-5">
              <button className="btn bg-red-500 text-white hover:bg-black border-none  rounded px-8">Join as a Donor</button>
              <button className="btn bg-white hover:bg-red-500 border-none text-red-500 hover:text-white rounded px-6">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
