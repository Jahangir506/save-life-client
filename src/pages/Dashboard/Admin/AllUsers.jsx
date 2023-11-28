import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = []}= useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    return(
        <>
            <div>
            <h1> Manage All Users {users.length}</h1>
            </div>
        </>
    )}
export default AllUsers;