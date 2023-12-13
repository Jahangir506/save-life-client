import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFundAmount = () => {
    const axiosSecure = useAxiosSecure()

    const { data: fundAmount = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosSecure.get("/funding");
        return res.data;
      },
    });
    return [fundAmount, refetch];
  
  };
export default useFundAmount;