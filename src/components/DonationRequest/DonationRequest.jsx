import { Link } from "react-router-dom";

const DonationRequest = () => {
  return (
    <>
      <div className="my-20">
        <div className="bg-[#F0412E] py-4 w-full">
          <h2 className="text-center text-white text-2xl">
            Available blood donors
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#F0412E] text-white border border-gray-400">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Location</th>
                <th>Date & Time</th>
                <th>Action</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-medium">
                    <span className="badge badge-ghost badge-sm">
                      District:{" "}
                    </span>{" "}
                    Zemlak, Daniel and Leannon
                  </span>
                  <br />
                  <span className="font-medium">
                    <span className="badge badge-ghost badge-sm">
                      Upazila:{" "}
                    </span>{" "}
                    Desktop Support Technician
                  </span>
                </td>
                <td>04/12/2023 _ 09:21 am</td>
                <td>Pending</td>
                <th>
                  <Link to="/donationDetails">
                    <button className="btn btn-xs bg-black/25 hover:bg-red-500 hover:text-white">
                      View
                    </button>
                  </Link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default DonationRequest;
