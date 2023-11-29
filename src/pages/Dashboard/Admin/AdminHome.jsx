import { FaUser } from "react-icons/fa";
import { FaHandHoldingDollar, FaSackDollar } from "react-icons/fa6";

const AdminHome = () => {
  return (
    <>
      <div className="my-20">
        <div className="grid grid-cols-3 max-w-7xl mx-auto">
          <div className="card w-72 h-36 bg-red-400 text-white">
            <div className="card-body items-center text-center">
              <h2 className="card-title"><FaUser className="text-2xl"/></h2>
              <p>Total Users</p>
              <p>0</p>
            </div>
          </div>
          <div className="card w-72 h-36 bg-red-400 text-white">
            <div className="card-body items-center text-center">
              <h2 className="card-title"><FaSackDollar className="text-2xl"/></h2>
              <p>Total Fund</p>
              <p>0</p>
            </div>
          </div>
          <div className="card w-80 h-36 bg-red-400 text-white">
            <div className="card-body items-center text-center">
              <h2 className="card-title"><FaHandHoldingDollar className="text-2xl"/></h2>
              <p>Total Total Blood Donation Request</p>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminHome;
