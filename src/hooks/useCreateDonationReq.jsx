import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCreateDonationReq = () => {
    const axiosPublic = useAxiosPublic()

    const {data: createDonationReq = [], refetch} = useQuery({
      queryKey: ['createDonationReq'],
      queryFn: async ()=> {
        const res = await axiosPublic.get('/createDonationRequest')
        return(res.data);
      }
    })
    
    return [createDonationReq, refetch]
}
export default useCreateDonationReq;