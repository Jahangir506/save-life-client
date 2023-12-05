import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Payment from "../../../pages/Dashboard/Payment/Payment";
import TitleSection from "../TitleSection/TitleSection";

const Funding = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const [fund] = useLoaderData();
  console.log(fund.taka);

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
      taka: data.taka,
    };
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
                        <span className="label-text">Taka</span>
                      </label>
                      <input
                        type="name"
                        name="taka"
                        {...register("taka", { required: true })}
                        placeholder="taka"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>
                  <Payment/>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="Please Payment"
                      className="btn bg-red-500 text-white px-6 hover:bg-black rounded-none border-none"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Funding;
