import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TitleSection from "../TitleSection/TitleSection";
import Payment from "./Payment/Payment";

const Funding = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const funding = {
      name: data.name,
      email: data.email,
      amount: data.amount,
    };
console.log(funding);
    axiosPublic
      .post("/funding", funding)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="py-20 max-w-7xl mx-auto">
        <div className="">
          <TitleSection heading="Funding" />
        </div>
        <div>
          <Helmet>
            <title>Save-Life | create-donation-request</title>
          </Helmet>
          <div className="hero min-h-screen">
            <div className="w-full">
              <div className="card shadow-2xl w-full bg-base-100 mx-auto my-10">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-body w-full"
                >
                  <div className="flex gap-6 w-full">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="name"
                        name="name"
                        {...register("name")}
                        placeholder="name"
                        defaultValue={user?.displayName}
                        className="input input-bordered w-full"
                      />
                      {errors.name && (
                        <span className="text-red-600">Name is required</span>
                      )}
                    </div>
                  </div>
                  <div className="flex  gap-6 w-full">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="name"
                        name="email"
                        {...register("email")}
                        placeholder="email"
                        defaultValue={user?.email}
                        className="input input-bordered w-full"
                      />
                      {errors.name && (
                        <span className="text-red-600">Name is required</span>
                      )}
                    </div>
                  </div>
                  <div className="flex  gap-6 w-full">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">amount</span>
                      </label>
                      <input
                        type="name"
                        name="amount"
                        {...register("amount", { required: true })}
                        placeholder="amount"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <input
                      type="submit"
                      placeholder="payment"
                      className="btn bg-red-500 text-white w-24 hover:bg-black rounded-none border-none"
                    >
                    </input>
                  </div>
                </form>
                <div>
                  <Payment/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Funding;
