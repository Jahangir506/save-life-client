import { Link } from "react-router-dom";

const SearchDonors = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-28">
        <div className="flex justify-center items-center gap-6">
          <div className="form-control grid grid-cols-3 w-3/5 gap-12">
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
                  <th>Email</th>
                  <th>Blood Group</th>
                  <th>Action</th>
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
                      <span className="badge badge-ghost badge-sm">District: </span> Zemlak, Daniel and Leannon
                    </span>
                    <br />
                    <span className="font-medium"><span className="badge badge-ghost badge-sm">Upazila: </span> Desktop
                    Support Technician</span>
                  </td>
                  <td>
                    <p className="text-blue-500 underline">
                      md.jahangir.alam9649@gmail.com
                    </p>
                  </td>
                  <td>A+</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchDonors;
