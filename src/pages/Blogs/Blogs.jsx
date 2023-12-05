import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BlogContent from "./BlogContent";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { FcGallery } from "react-icons/fc";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Blogs = () => {
  // const editor = useRef(null)
  // const [post, setPost]= useState();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.images[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const blogsUser = {
        title: data.title,
        postType: data.postType,
        postDetails: data.postDetails,
        images: res.data.data.display_url,
        userName: user.displayName,
        userPhoto: user.photoURL,
        userPostTime: user.metadata.creationTime,
      };
      const blogs = await axiosSecure.post("/blogs", blogsUser);
      if (blogs.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Post Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Helmet>
          <title>Save-Life | Blogs</title>
        </Helmet>
        <div className="py-16">
          <div className="mb-8">
            <div className="card w-full max-w-6xl mx-auto bg-base-100 rounded-none shadow-md">
              <div className="card-body">
                <h2 className="card-title py-4">Create Post</h2>
                <div className="flex gap-x-4 items-center">
                  <div>
                    <div className="avatar">
                      <div className="w-16 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      type="text"
                      placeholder="Write Something..."
                      className="input input-bordered input-error w-full rounded-full"
                    />
                  </div>
                </div>
                <div className="card-actions justify-between">
                  <div className="flex items-center ml-14">
                    <FcGallery
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="text-5xl mr-1"
                    />
                    <p>Photo/Videos</p>
                  </div>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="px-6 font-medium py-3 hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-full"
                  >
                    Create Post
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="modal-box"
                    >
                      <div>
                        <div className="flex gap-4">
                          <div className="form-control w-1/2">
                            <label className="label">
                              <span className="label-text">Title</span>
                            </label>
                            <input
                              type="name"
                              name="title"
                              {...register("title", { required: true })}
                              placeholder="title"
                              className="input input-bordered w-full"
                              required
                            />
                            {errors.title && (
                              <span className="text-red-600">
                                Name is required
                              </span>
                            )}
                          </div>
                          <div className="form-control w-1/2">
                            <label className="label">
                              <span className="label-text">Post Type</span>
                            </label>
                            <select
                              className="select select-bordered w-full"
                              {...register("postType", { required: true })}
                              defaultValue="Select"
                            >
                              <option disabled>Select</option>
                              <option>Blood Request</option>
                              <option>Question</option>
                              <option>Blood Donation Request</option>
                              <option>Blood</option>
                              <option>AB+</option>
                              <option>AB-</option>
                              <option>O+</option>
                              <option>O-</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Details</span>
                            </label>
                            <textarea
                              {...register("postDetails", { required: true })}
                              className="textarea textarea-bordered w-full h-28"
                              placeholder="write somethings..."
                            ></textarea>
                            {/* <JoditEditor
                                ref={editor}
                                {...register("postDetails", { required: true })}
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between my-8">
                        <div className="flex items-center">
                          <input
                            type="file"
                            {...register("images", { required: true })}
                            className="file-input file-input-bordered file-input-error file-input-xs w-full max-w-xs"
                          />
                        </div>
                        <input
                          type="submit"
                          value="Submit Post"
                          className="px-4 font-medium py-2 text-sm hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-full"
                        ></input>
                      </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg mx-auto relative ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-error w-full max-w-xl"
            />
            <div className="absolute right-3 bottom-1/3">
              <IoSearch />
            </div>
          </div>
          <div className="max-w-3xl mx-auto my-6">
            <div className="grid grid-cols-8 gap-2 justify-items-center">
              <input
                className="join-item btn whitespace-nowrap min-w-full rounded-full"
                type="radio"
                name="options"
                aria-label="All"
              />
              <input
                className="join-item btn whitespace-nowrap min-w-full rounded-full"
                type="radio"
                name="options"
                aria-label="Radio 2"
              />
              <input
                className="join-item btn whitespace-nowrap min-w-full rounded-full"
                type="radio"
                name="options"
                aria-label="Radio 3"
              />
              <input
                className="join-item btn whitespace-nowrap min-w-full rounded-full"
                type="radio"
                name="options"
                aria-label="Radio 1"
              />
              <input
                className="join-item btn whitespace-nowrap min-w-full rounded-full"
                type="radio"
                name="options"
                aria-label="Radio 2"
              />
              <input
                className="join-item btn whitespace-nowrap min-w-full rounded-full"
                type="radio"
                name="options"
                aria-label="Radio 3"
              />
              <input
                className="join-item btn whitespace-nowrap min-w-full rounded-full"
                type="radio"
                name="options"
                aria-label="Radio 1"
              />
              <input
                className="join-item btn whitespace-nowrap min-w-full rounded-full"
                type="radio"
                name="options"
                aria-label="Radio 2"
              />
            </div>
          </div>
          <div className="my-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
              <div className="">
                <LeftSideBar />
              </div>
              <div className="md:col-span-2 border-b border-r border-l">
                <BlogContent />
              </div>
              <div className="">
                <RightSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
