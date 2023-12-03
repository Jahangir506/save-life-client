import { Helmet } from "react-helmet-async";
import { FcGallery } from "react-icons/fc";
import { IoSearch } from "react-icons/io5";

const Blogs = () => {
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
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                    <div className="modal-box">
                      <div>
                        <div className="flex gap-4">
                          <div className="form-control w-1/2">
                            <label className="label">
                              <span className="label-text">Post Type</span>
                            </label>
                            <select
                              className="select select-bordered w-full"
                              // {...register("bloodGroup")}
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
                          <div className="form-control w-1/2">
                            <label className="label">
                              <span className="label-text">Title</span>
                            </label>
                            <input
                              type="name"
                              name="name"
                              //   {...register("name", { required: true })}
                              placeholder="title"
                              className="input input-bordered w-full"
                              required
                            />
                            {/* {errors.name && (
                              <span className="text-red-600">
                                Name is required
                              </span>
                            )} */}
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="form-control w-full">
                            <label className="label">
                              <span className="label-text">Content</span>
                            </label>
                            <textarea
                              className="textarea textarea-bordered w-full h-28"
                              placeholder="write somethings..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between my-8">
                        <div className="flex items-center">
                          <FcGallery
                            onClick={() =>
                              document.getElementById("my_modal_5").showModal()
                            }
                            className="text-4xl mr-1"
                          />
                          <p>Photo/Videos</p>
                        </div>
                        <button className="px-4 font-medium py-2 text-sm hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-full">
                          Submit Post
                        </button>
                      </div>
                    </div>
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
            </div>
          </div>
          <div className="my-8">
            <div className="grid grid-cols-3 gap-8 justify-items-center items-center">
              <div className="w-1/3 border border-rose-500">
                <h3>Home</h3>
                <h3>Profile</h3>
                <h3>Create Post</h3>
                <h3></h3>
              </div>
              <div className="flex-1 border border-rose-500">
                <div>ddkfdhkfgaadsgdfg</div>
              </div>
              <div className="w-1/3 border border-rose-500">
                <h1>dflkdfhdgkf</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
