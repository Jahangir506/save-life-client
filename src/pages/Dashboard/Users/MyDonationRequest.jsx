import { Helmet } from "react-helmet-async";
import DonationRequestTable from "../../../components/DonationRequest/DonationRequestTable";
import useAuth from "../../../hooks/useAuth";
import useCreateDonationReq from "../../../hooks/useCreateDonationReq";

const MyDonationRequest = () => {
  const {user} = useAuth()
  const [createDonationReq] = useCreateDonationReq()

  const donationReq = createDonationReq.filter((detail) => {
    return detail.requesterEmail === user?.email;
  });

  return (
    <>
      <Helmet>
        <title>Save-Life | my-donation-request</title>
      </Helmet>
      <div className="py-36 max-w-7xl mx-auto">
        <div className="bg-[#F0412E] py-4 w-full">
          <h2 className="text-center text-white text-2xl">
           My Donation Request
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
              {donationReq.map((detail, index) => (
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
export default MyDonationRequest;
