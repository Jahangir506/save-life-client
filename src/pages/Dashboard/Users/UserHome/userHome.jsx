import { Helmet } from "react-helmet-async";
import TitleSection from "../../../../components/shared/TitleSection/TitleSection";
import useAuth from "../../../../hooks/useAuth";
import useCreateDonationReq from "../../../../hooks/useCreateDonationReq";
import DonationRequestTableView from "./DonationRequestTableView";
import { Link } from "react-router-dom";

const UserHome = () => {
  const { user } = useAuth();
  const [createDonationReq] = useCreateDonationReq();

  const donationReq = createDonationReq.filter((detail) => {
    return detail.requesterEmail === user?.email;
  });

  return (
    <>
      <div>
        <Helmet>
          <title>Save-Life | user-home</title>
        </Helmet>
        <TitleSection heading={`Welcome to ${user.displayName}`} />
        <div>
          <Helmet>
            <title>Save-Life | my-donation-request</title>
          </Helmet>
          <div className="pt-16 pb-6 max-w-7xl mx-auto">
            <div className="bg-[#F0412E] py-4 w-full">
              <h2 className="text-center text-white text-2xl">
                Your Donation Request
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-[#F0412E] text-white border border-gray-400">
                  <tr>
                    <th>#</th>
                    <th>Recipient Name</th>
                    <th>Location</th>
                    <th>Date & Time</th>
                    <th>Status</th>
                    <th>Details</th>
                    <th>Update</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {donationReq.slice(0, 3).map((detail, index) => (
                    <DonationRequestTableView
                      key={detail._id}
                      detail={detail}
                      index={index}
                    ></DonationRequestTableView>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Link to='/dashboard/my-donation-requests' className="flex justify-center items-center">
          <button className="btn btn-xs font-medium hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-none">
            View all request
          </button>
        </Link>
      </div>
    </>
  );
};
export default UserHome;
