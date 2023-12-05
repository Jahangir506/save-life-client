import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCreateDonationReq from "../../../../hooks/useCreateDonationReq";

const DonationRequestTableView = ({ detail, index }) => {
    const [,refetch] = useCreateDonationReq()
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/createDonationRequest/${id}`).then((res) => {
              refetch();
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });
      };

  return (
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
          <Link to={`/dashboard/update-donation-request/${detail._id}`}>
            <button className="btn btn-sm bg-black/25 hover:bg-red-500 hover:text-white">
              <FaEdit className="text-lg" />
            </button>
          </Link>
        </th>
        <th>
          <button onClick={()=>handleDelete(detail._id)} className="btn btn-sm bg-black/25 hover:bg-red-500 hover:text-white">
            <FaTrashAlt className="text-lg" />
          </button>
        </th>
      </tr>
    </>
  );
};
export default DonationRequestTableView;
