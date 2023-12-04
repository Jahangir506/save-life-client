const Details = ({ detail }) => {
  console.log(detail);
  return (
    <>
      <div>
        <div className="hero h-96 bg-red-400 relative">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <p>{detail.requesterName}</p>
              <p  className="underline">{detail.requesterEmail}</p>
            </div>
          </div>
          <div className="bg-white w-96 absolute -bottom-12 p-7 shadow-xl">
            {/* <div className="flex justify-between items-center">
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
            </div> */}
            <p>
              <span className="font-semibold border-b-2 border-red-500">
                Request Message:
              </span> {detail.reqMessage}
            </p>
          </div>
        </div>
        <div className="max-w-xl mx-auto mt-24">
          <div className="space-y-5">
            <p>
              <span className="font-semibold mr-44">Name</span>{" "}
              <span className="mr-36">:</span> Md. Jahangir Alam
            </p>
            <p>
              <span className="font-semibold mr-44">Name</span>{" "}
              <span className="mr-36">:</span> Md. Jahangir Alam
            </p>
            <p>
              <span className="font-semibold mr-44">Name</span>{" "}
              <span className="mr-36">:</span> Md. Jahangir Alam
            </p>
            <p>
              <span className="font-semibold mr-44">Name</span>{" "}
              <span className="mr-36">:</span> Md. Jahangir Alam
            </p>
            <p>
              <span className="font-semibold mr-44">Name</span>{" "}
              <span className="mr-36">:</span> Md. Jahangir Alam
            </p>
            <p>
              <span className="font-semibold mr-44">Name</span>{" "}
              <span className="mr-36">:</span> Md. Jahangir Alam
            </p>
            <p>
              <span className="font-semibold mr-44">Name</span>{" "}
              <span className="mr-36">:</span> Md. Jahangir Alam
            </p>
            <p>
              <span className="font-semibold mr-44">Name</span>{" "}
              <span className="mr-36">:</span> Md. Jahangir Alam
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
