import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import DonationRequestTable from "../../../components/DonationRequest/DonationRequestTable";

const AdminBloodDonationRequest = () => {
    const axiosPublic = useAxiosPublic()

    const {data: createDonationReq = []} = useQuery({
      queryKey: ['createDonationReq'],
      queryFn: async ()=> {
        const res = await axiosPublic.get('/createDonationRequest')
        return(res.data);
      }
    })
  return (
    <>
      <Helmet>
        <title>Save-Life | Admin Blood Donation Request</title>
      </Helmet>
      <div className="py-36 max-w-7xl mx-auto">
        <div className="bg-[#F0412E] py-4 w-full">
          <h2 className="text-center text-white text-2xl">
            All Blood Donation Request
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
    </>
  );
};
export default AdminBloodDonationRequest;
