import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useDistrictsUpazilas from "../../../hooks/useDistrictsUpazilas";
import TitleSection from "/src/components/shared/TitleSection/TitleSection";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateDonationRequest = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const [districts, upazilas] = useDistrictsUpazilas();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const createDonationReq = {
      address: data.address,
      date: data.date,
      district: data.district,
      hospitalName: data.hospitalName,
      recipientName: data.recipientName,
      reqMessage: data.reqMessage,
      requesterEmail: data.requesterEmail,
      requesterName: data.requesterName,
      time: data.time,
      upazila: data.upazila,
      photo: user?.photoURL
    }
    console.log(createDonationReq);
    const createDonReq = await axiosPublic.post("/createDonationRequest", createDonationReq)
    if(createDonReq.data.insertedId){
      reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Create Donation Request Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    navigate('/')
    }
  };

  return (
    <>
      <div className="mt-20 mb-12">
        <TitleSection heading="Create Donation Request" />
      </div>
      <div>
        <Helmet>
          <title>Save-Life | create-donation-request</title>
        </Helmet>
        <div className="hero">
          <div className="card shadow-2xl w-full max-w-5xl bg-base-100">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <div className="flex gap-6 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Requester Name</span>
                  </label>
                  <input
                    type="name"
                    name="requesterName"
                    {...register("requesterName", { required: true })}
                    placeholder="requester name"
                    className="input input-bordered w-full"
                    required
                    defaultValue={user?.displayName}
                  />
                  {errors.requesterName && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Requester Email</span>
                  </label>
                  <input
                    type="email"
                    name="requesterEmail"
                    {...register("requesterEmail", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                    required
                    defaultValue={user?.email}
                  />
                  {errors.requesterEmail && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
              </div>
              <div className="flex gap-6 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Recipient Name</span>
                  </label>
                  <input
                    type="name"
                    name="recipientName"
                    {...register("recipientName", { required: true })}
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.recipientName && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Hospital Name</span>
                  </label>
                  <input
                    type="text"
                    name="hospitalName"
                    {...register("hospitalName", { required: true })}
                    placeholder="hospital name"
                    className="input input-bordered"
                    required
                  />
                  {errors.hospitalName && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
              </div>
              <div className="flex  gap-6 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">District</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    defaultValue="Select"
                    {...register("district")}
                  >
                    <option disabled>Select</option>
                    {districts.map((district) => (
                      <option key={district.id}>{district.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Upazila</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    defaultValue="Select"
                    {...register("upazila")}
                  >
                    <option disabled>Select</option>
                    {upazilas.map((upazila) => (
                      <option key={upazila.id}>{upazila.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex  gap-6 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Donation Time</span>
                  </label>
                  <input
                    type="time"
                    name="time"
                    {...register("time", { required: true })}
                    placeholder="time"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.time && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Donation Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    {...register("date", { required: true })}
                    placeholder="date"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.date && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
              </div>
              <div className="flex  gap-6 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Full Address</span>
                  </label>
                  <textarea
                    type="text"
                    name="address"
                    {...register("address")}
                    className="textarea textarea-bordered"
                    placeholder="address"
                  ></textarea>
                  {errors.address && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Request Message</span>
                  </label>
                  <textarea
                    type="text"
                    name="reqMessage"
                    {...register("reqMessage")}
                    className="textarea textarea-bordered"
                    placeholder="Message"
                  ></textarea>
                  {errors.reqMessage && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Donation Request"
                  className="btn bg-red-500 text-white px-6 hover:bg-black rounded-none border-none"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateDonationRequest;
