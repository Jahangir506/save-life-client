import { Link } from "react-router-dom";
import DonationRequestTable from "../../components/DonationRequest/DonationRequestTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SearchDonors = () => {
  const axiosPublic = useAxiosPublic();

  const { data: createDonationReq = [] } = useQuery({
    queryKey: ["createDonationReq"],
    queryFn: async () => {
      const res = await axiosPublic.get("/createDonationRequest");
      return res.data;
    },
  });

  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 bg-white/20 ">
        <div className="form-control grid grid-cols-4 gap-6 pl-24">
          <div>
            <label className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <select
              className="select select-error w-full"
              defaultValue="Select"
            >
              <option disabled>Select</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">District</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              defaultValue="Select"
            >
              <option disabled>Select</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Upazila</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              defaultValue="Select"
            >
              <option disabled>Select</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          <div className="mt-9">
            <Link to="/searchDonors">
              <button className="px-6 font-medium py-3 hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-none">
                Search Donors
              </button>
            </Link>
          </div>
        </div>
        <div className="my-10">
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
                {createDonationReq.map((detail, index) => (
                  <DonationRequestTable
                    key={detail._id}
                    detail={detail}
                    index={index}
                  ></DonationRequestTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchDonors;
