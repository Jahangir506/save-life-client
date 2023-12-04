import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Details from "./Details";

const BloodDonationDetails = () => {
  const axiosPublic = useAxiosPublic()

  const {data: createDonationReq=[]} = useQuery({
    queryKey: ['createDonationReq'],
    queryFn: async ()=> {
      const res = await axiosPublic.get('/createDonationRequest')
      return(res.data);
    }
  })

  console.log(createDonationReq);

  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        {
          createDonationReq.map(detail => <Details key={detail._id} detail={detail}/>)
        }
        <div className="flex justify-center items-center mt-12">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-sm rounded-none border-none bg-red-500 text-white  hover:bg-black"
          >
            Confirm Donate
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};
export default BloodDonationDetails;
