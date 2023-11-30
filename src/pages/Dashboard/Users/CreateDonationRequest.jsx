import { Link } from "react-router-dom";
import TitleSection from "/src/components/shared/TitleSection/TitleSection";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const CreateDonationRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="mt-20 mb-12">
        <TitleSection heading="Create Donation Request" />
      </div>
      <div>
        <Helmet>
          <title>Save-Life | Registration</title>
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
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Requester Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                  {errors.email && (
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
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Hospital Name</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
              </div>
              <div className="flex  gap-6 w-full">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">District</span>
                  </label>
                  <select defaultValue="default"
                    className="select select-bordered w-full"
                    defaultValue="A+"
                    {...register("bloodGroup")}
                  >
                    <option disabled>Select</option>
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
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Upazila</span>
                  </label>
                  <select
                    className="select select-bordered w-full"
                    defaultValue="Tangail"
                    {...register("district")}
                  >
                    <option disabled>Select</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
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
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Donation Date</span>
                  </label>
                  <input
                    type="date"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
              </div>
              <div className="flex  gap-6 w-full">
              <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Full Address</span>
                  </label>
                  <textarea className="textarea textarea-bordered" placeholder="address"></textarea>
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Request Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                  {errors.name && (
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
