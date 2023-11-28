import { BiDonateBlood } from "react-icons/bi";
import { FaHome, FaUser } from "react-icons/fa";
import { MdOutlineBloodtype } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <>
      <div className="flex">
        <div className="w-72 min-h-screen bg-red-500 text-white">
          <ul className="menu">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/admin-home">
                    <FaUser />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-users">
                    <BiDonateBlood /> All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-blood-donation-request">
                    <MdOutlineBloodtype /> All Blood Donation Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/content-management">
                    <MdOutlineBloodtype /> Content Management
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/users-home">
                    <FaUser />
                    Users Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-donation-requests">
                    <BiDonateBlood /> My Donation Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/create-donation-request">
                    <MdOutlineBloodtype /> Create Donation Request
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-12 bg-red-100">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
