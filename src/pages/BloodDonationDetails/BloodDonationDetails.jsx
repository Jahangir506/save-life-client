const BloodDonationDetails = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        <div className="hero h-96 bg-red-500 relative">
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <p>dkfdhf</p>
            </div>
          </div>
          <div className="bg-white w-96 absolute -bottom-12 p-7 shadow-xl">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <h2 className="border-b-4 border-red-500 text-lg font-semibold">
                  Blood Group
                </h2>
                <p className="text-xl font-bold my-2">B+</p>
              </div>
              <div className="text-center">
                <h2 className="border-b-4 border-red-500 text-lg font-semibold">
                  Donations
                </h2>
                <p className="text-xl font-bold my-2">0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-16"></div>
      </div>
    </>
  );
};
export default BloodDonationDetails;
