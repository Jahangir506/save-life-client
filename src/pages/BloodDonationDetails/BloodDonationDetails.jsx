import { useLoaderData } from "react-router-dom";

const BloodDonationDetails = () => {
    const detail = useLoaderData()
    console.log(detail);

  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
      <div className="hero h-96 bg-red-400 relative">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={detail.photo} />
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
              <span className="font-semibold mr-44">Recipient Name</span>{" "}
              <span className="mr-36">{detail.recipientName}</span> 
            </p>
            <p>
              <span className="font-semibold mr-44">Address</span>{" "}
              <span className="mr-36">:</span> {detail.address}
            </p>
            <p>
              <span className="font-semibold mr-44">Date</span>{" "}
              <span className="mr-36">:</span>{detail.date}
            </p>
            <p>
              <span className="font-semibold mr-44">Time</span>{" "}
              <span className="mr-36">:</span> {detail.time}
            </p>
            <p>
              <span className="font-semibold mr-44">Hospital Name</span>{" "}
              <span className="mr-36">:</span> {detail.hospitalName}
            </p>
            <p>
              <span className="font-semibold mr-44">District</span>{" "}
              <span className="mr-36">:</span> {detail.district}
            </p>
            <p>
              <span className="font-semibold mr-44">Upazila</span>{" "}
              <span className="mr-36">:</span> {detail.upazila}
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
