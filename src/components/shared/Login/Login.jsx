import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin";

const Login = () => {
  const { signIn } = useAuth()
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        reset()
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "User Login successfully",
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Save-Life | Registration</title>
      </Helmet>
      <div className="hero min-h-screen bg-red-200">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login with Save Life!</h1>
          </div>
          <div className="card shadow-2xl w-full max-w-md bg-base-100 mx-auto my-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <div className="flex gap-6 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="name"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
              </div>
              <div className="flex  gap-6 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">
                     This field is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less then 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one uppercase, one lower case, one
                      number and one special characters
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 mt-2">
                <input
                  onClick={() => setShowPass(!showPass)}
                  type="checkbox"
                  checked={showPass ? "checked" : ""}
                  defaultChecked
                  className="checkbox checkbox-sm checkbox-error"
                />
                <span className="label-text text-sm">Show Password</span>
              </div>
              <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Donation Request"
                  className="btn bg-red-500 text-white px-6 hover:bg-black rounded-none border-none"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
              Do not have an Registration?
                <Link to="/register" className="underline text-blue-700">
                  {" "}
                  Registration for Save-Life
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
