import { BiSolidDonateHeart } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import useAllUser from "../../../hooks/useAllUser";
import useCreateDonationReq from "../../../hooks/useCreateDonationReq";
import { FaSackDollar } from "react-icons/fa6";

const AdminHome = () => {
  const [createDonationReq] = useCreateDonationReq();
  const [users] = useAllUser();
  return (
    <>
      <div className="my-20">
        <div className="flex justify-center items-center">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
               <BiSolidDonateHeart  className="text-3xl"/>
              </div>
              <div className="stat-title">Total Blood Donation Request</div>
              <div className="stat-value">{createDonationReq.length}</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
               <FaUsers className="text-3xl"/>
              </div>
              <div className="stat-title">New Users</div>
              <div className="stat-value">{users.length}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
              <FaSackDollar className="text-3xl"/>
              </div>
              <div className="stat-title">Fund</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminHome;
