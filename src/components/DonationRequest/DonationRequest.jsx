import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Details from "../../pages/BloodDonationDetails/Details";

const DonationRequest = () => {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()

  const {data: createDonationReq=[]} = useQuery({
    queryKey: ['createDonationReq'],
    queryFn: async ()=> {
      const res = await axiosPublic.get('/createDonationRequest')
      return(res.data);
    }
  })

  console.log(createDonationReq);

  return (
    <>
    <Helmet>
      <title>Save-Life | Donation Request</title>
    </Helmet>
      <div className="py-36 max-w-7xl mx-auto">
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
             {
              createDonationReq.map((detail, index)=>  <tr key={detail._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{detail.requesterName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="font-medium">
                    <span className="badge badge-ghost badge-sm">
                      District:{" "}
                    </span>{" "}
                  {detail.district}
                  </span>
                  <br />
                  <span className="font-medium">
                    <span className="badge badge-ghost badge-sm">
                      Upazila:{" "}
                    </span>{" "}
                    <small>{detail.upazila}</small>
                  </span>
                </td>
                <td>{detail.date} _ {detail.time}</td>
                <td>Pending</td>
                <th>
                  <Link to={`createDonationRequest/${detail._id}`}>
                    <button className="btn btn-xs bg-black/25 hover:bg-red-500 hover:text-white">
                      View
                    </button>
                  </Link>
                </th>
              </tr>)
             }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default DonationRequest;
