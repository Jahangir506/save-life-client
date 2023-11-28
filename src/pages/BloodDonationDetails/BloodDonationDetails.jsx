const BloodDonationDetails = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        <div className="hero h-96 bg-red-400 relative">
          <div className=""></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <p>MD. Jahangir Alam</p>
              <p className="underline">zahangirkhan506@gmail.com</p>
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
              </span>{" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, et non modi obcaecati ipsa nisi explicabo assumenda
              voluptates exercitationem culpa.
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
        <div className="flex justify-center items-center mt-12">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-sm rounded-none border-none bg-red-500 text-white  hover:bg-black"
          >
            Confirm Donate
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};
export default BloodDonationDetails;
