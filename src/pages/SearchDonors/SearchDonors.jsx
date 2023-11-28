import { Link, useLocation } from "react-router-dom";
import DonationRequest from "../../components/DonationRequest/DonationRequest";

const SearchDonors = () => {
  const location = useLocation();
  const noSearchSection = location.pathname.includes("donationRequest");
  return (
    <>
      <div className="max-w-7xl mx-auto py-28">
        {noSearchSection || (
          <div className="flex justify-center items-center gap-6 px-8 mx-auto">
            <div className="form-control grid grid-cols-3 w-3/5 gap-6">
              <div>
                <label className="label">
                  <span className="label-text">Blood Group</span>
                </label>
                <select
                  className="select select-error w-full max-w-xs"
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
            </div>
            <div className="flex justify-center flex-1 gap-6 items-center">
              <div className="w-2/3">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  defaultValue="md.jahangir.alam9649@gmil.com"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="mt-9 w-1/3">
                <Link to="/searchDonors">
                  <button className="btn hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-none">
                    Search Donors
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
        <DonationRequest />
      </div>
    </>
  );
};
export default SearchDonors;
