import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const DonationRequestTableView = ({detail, index}) => {


    return(
        <>
      <tr key={detail?._id}>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            {/* <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={detail?.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div> */}
            <div>
              <div className="font-bold">{detail?.recipientName}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="font-medium">
            <span className="badge badge-ghost badge-sm">District: </span>{" "}
            {detail?.district}
          </span>
          <br />
          <span className="font-medium">
            <span className="badge badge-ghost badge-sm">Upazila: </span>{" "}
            <small>{detail?.upazila}</small>
          </span>
        </td>
        <td>
          {detail?.date} _ {detail?.time}
        </td>
        <td>Pending</td>
        <th>
          <Link to={`/createDonationRequest/${detail?._id}`}>
            <button className="btn btn-sm bg-black/25 hover:bg-red-500 hover:text-white">
              View Details
            </button>
          </Link>
        </th>
        <th>
          <Link to={`/createDonationRequest/${detail?._id}`}>
            <button className="btn btn-sm bg-black/25 hover:bg-red-500 hover:text-white">
              <FaEdit className="text-lg"/>
            </button>
          </Link>
        </th>
        <th>
          <Link to={`/createDonationRequest/${detail?._id}`}>
            <button className="btn btn-sm bg-black/25 hover:bg-red-500 hover:text-white">
            <FaTrashAlt className="text-lg" />
            </button>
          </Link>
        </th>
      </tr>
    </>
    )}
export default DonationRequestTableView;