import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useCreateDonationReq from "../../../hooks/useCreateDonationReq";
import DonationRequestTableView from "./UserHome/DonationRequestTableView";
import { useState } from "react";

const MyDonationRequest = () => {
  const { user } = useAuth();
  const [createDonationReq] = useCreateDonationReq();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const donationReq = createDonationReq.filter(
    (detail) => detail.requesterEmail === user?.email
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDonationReq = donationReq.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>Save-Life | my-donation-request</title>
      </Helmet>
      <div className="py-8 max-w-7xl mx-auto">
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
              {/* row 1 */}
              {currentDonationReq.map((detail, index) => (
                <DonationRequestTableView
                  key={detail._id}
                  detail={detail}
                  index={index}
                ></DonationRequestTableView>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center my-10">
          {Array.from({
            length: Math.ceil(donationReq.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className="ml-6 btn btn-secondary text-center"
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default MyDonationRequest;
