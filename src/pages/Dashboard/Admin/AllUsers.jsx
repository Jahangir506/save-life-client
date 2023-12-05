import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAllUser from "../../../hooks/useAllUser";

const AllUsers = () => {
  const [users, refetch]= useAllUser()
  console.log(users);
  const axiosSecure = useAxiosSecure();

  const handleAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleVolunteer = (user) => {
    axiosSecure.patch(`/users/volunteer/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Volunteer Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleUserDelete = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
      <div className="my-20">
        <div className="flex justify-evenly">
          <h1 className="text-4xl font-semibold">All Users</h1>
        </div>
        <div className="max-w-7xl mx-auto my-14">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Admin</th>
                  <th>Volunteer</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
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
                        <div>{user.name}</div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>Purple</td>
                    <th>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleAdmin(user)}
                          className="btn text-red-500 bg-red-200 hover:bg-black hover:text-white text-base btn-sm"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </th>
                    <th>
                      {user.role === "volunteer" ? (
                        "Volunteer"
                      ) : (
                        <button
                          onClick={() => handleVolunteer(user)}
                          className="btn text-red-500 bg-red-200 hover:bg-black hover:text-white text-base btn-sm"
                        >
                          <FaUsers />
                        </button>
                      )}
                    </th>
                    <td>
                      <button
                        onClick={() => handleUserDelete(user)}
                        className="btn text-red-500 bg-red-200 hover:bg-black hover:text-white text-base btn-sm"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllUsers;
