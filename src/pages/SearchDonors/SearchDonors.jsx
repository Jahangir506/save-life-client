// import { Link } from "react-router-dom";
// import DonationRequestTable from "../../components/DonationRequest/DonationRequestTable";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useForm } from "react-hook-form";
// import useDistrictsUpazilas from "../../hooks/useDistrictsUpazilas";
// import { useState } from "react";

// const SearchDonors = () => {
//   const axiosPublic = useAxiosPublic();
//   const [districts, upazilas] = useDistrictsUpazilas();
//   const [search, setSearch] = useState({
//     district: "",
//     upazila: "",
//     bloodGroup: "",
//   });

//   console.log(search);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { data: createDonationReq = [] } = useQuery({
//     queryKey: ["createDonationReq"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/createDonationRequest");
//       return res.data;
//     },
//   });

//  const onSubmit = (data) => {
//     setSearch({
//       district: data.district,
//       upazila: data.upazila,
//       bloodGroup: data.bloodGroup,
//     });
//   };

//   const filteredDonationReq = createDonationReq.filter((detail) => {
//     const districtMatch =
//       search.district === "" ||
//       detail.district.toLowerCase().includes(search.district.toLowerCase());

//     const upazilaMatch =
//       search.upazila === "" ||
//       detail.upazila.toLowerCase().includes(search.upazila.toLowerCase());

//     const bloodGroupMatch =
//       search.bloodGroup === "" ||
//       detail.bloodGroup.toLowerCase().includes(search.bloodGroup.toLowerCase());

//     return districtMatch && upazilaMatch && bloodGroupMatch;
//   });

//   return (
//     <>
//       <div className="max-w-7xl mx-auto pt-24 bg-white/20 ">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="form-control grid grid-cols-4 gap-6 pl-24"
//         >
//           <div>
//             <label className="label">
//               <span className="label-text">Blood Group</span>
//             </label>
//             <select
//               {...register("bloodGroup", { required: true })}
//               className="select select-error w-full"
//               defaultValue="Select"
//             >
//               <option disabled>Select</option>
//               <option>A+</option>
//               <option>A-</option>
//               <option>B+</option>
//               <option>B-</option>
//               <option>AB+</option>
//               <option>AB-</option>
//               <option>O+</option>
//               <option>O-</option>
//             </select>
//           </div>
//           <div>
//             <label className="label">
//               <span className="label-text">District</span>
//             </label>
//             <select
//               className="select select-bordered w-full max-w-xs"
//               defaultValue="Select"
//               {...register("district", { required: true })}
//             >
//               <option disabled>Select</option>
//               {districts.map((district) => (
//                 <option key={district.id}>{district.name}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="label">
//               <span className="label-text">Upazila</span>
//             </label>
//             <select
//               className="select select-bordered w-full max-w-xs"
//               defaultValue="Select"
//               {...register("upazila", { required: true })}
//             >
//               <option disabled>Select</option>
//               {upazilas.map((upazila) => (
//                 <option key={upazila.id}>{upazila.name}</option>
//               ))}
//             </select>
//           </div>
//           <div className="mt-9">
//             <input
//               type="submit"
//               value="Search Donors"
//               className="px-6 font-medium py-3 hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-none"
//             ></input>
//           </div>
//         </form>
//         <div className="my-10">
//           <div className="bg-[#F0412E] py-4 w-full">
//             <h2 className="text-center text-white text-2xl">
//               Available blood donors
//             </h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="table">
//               {/* head */}
//               <thead className="bg-[#F0412E] text-white border border-gray-400">
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Location</th>
//                   <th>Date & Time</th>
//                   <th>Action</th>
//                   <th>Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* row 1 */}
//                 {createDonationReq
//                   .filter((detail) => {
//                     return (
//                       search.district === "" ||
//                       detail.district.toLowerCase().includes(search.district.toLowerCase())
                
//                       search.upazila === "" ||
//                       detail.upazila.toLowerCase().includes(search.upazila.toLowerCase());
                
//                       search.bloodGroup === "" ||
//                       detail.bloodGroup.toLowerCase().includes(search.bloodGroup.toLowerCase())
//                     );
//                   })
//                   .map((detail, index) => (
//                     <DonationRequestTable
//                       key={detail._id}
//                       detail={detail}
//                       index={index}
//                     ></DonationRequestTable>
//                   ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SearchDonors;


import DonationRequestTable from "../../components/DonationRequest/DonationRequestTable";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useDistrictsUpazilas from "../../hooks/useDistrictsUpazilas";
import { useState } from "react";

const SearchDonors = () => {
  const axiosPublic = useAxiosPublic();
  const [districts, upazilas] = useDistrictsUpazilas();
  const [search, setSearch] = useState({
    district: "",
    upazila: "",
    bloodGroup: "",
  });

  console.log(search);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: createDonationReq = [] } = useQuery({
    queryKey: ["createDonationReq"],
    queryFn: async () => {
      const res = await axiosPublic.get("/createDonationRequest");
      return res.data;
    },
  });

  const onSubmit = (data) => {
    setSearch({
      district: data.district,
      upazila: data.upazila,
      bloodGroup: data.bloodGroup,
    });
  };

  const filteredDonationReq = createDonationReq.filter((detail) => {
    const districtMatch =
      search.district === '' ||
      (detail.district && detail.district.toLowerCase().includes(search.district.toLowerCase()));

    const upazilaMatch =
      search.upazila === '' ||
      (detail.upazila && detail.upazila.toLowerCase().includes(search.upazila.toLowerCase()));

    const bloodGroupMatch =
      search.bloodGroup ||
      (detail.bloodGroup && detail.bloodGroup.toLowerCase().includes(search.bloodGroup.toLowerCase()));

      console.log(districtMatch && upazilaMatch && bloodGroupMatch );
    return districtMatch && upazilaMatch && bloodGroupMatch ;
  });

  console.log(filteredDonationReq);

  return (
    <div className="max-w-7xl mx-auto pt-24 bg-white/20">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-4 gap-6 pl-24">
        <div>
          <label className="label">
            <span className="label-text">Blood Group</span>
          </label>
          <select
            {...register("bloodGroup", { required: true })}
            className="select select-error w-full"
            defaultValue=""
          >
            <option value="" disabled>Select</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">District</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue=""
            {...register("district", { required: true })}
          >
            <option value="" disabled>Select</option>
            {districts.map((district) => (
              <option key={district.id} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Upazila</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            defaultValue=""
            {...register("upazila", { required: true })}
          >
            <option value="" disabled>Select</option>
            {upazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.name}>
                {upazila.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-9">
          <input
            type="submit"
            value="Search Donors"
            className="px-6 font-medium py-3 hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-none"
          />
        </div>
      </form>
      <div className="my-10">
        <div className="bg-[#F0412E] py-4 w-full">
          <h2 className="text-center text-white text-2xl">Available blood donors</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-[#F0412E] text-white border border-gray-400">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Location</th>
                <th>Date & Time</th>
                <th>Action</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredDonationReq.map((detail, index) => (
                <DonationRequestTable key={detail._id} detail={detail} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchDonors;
