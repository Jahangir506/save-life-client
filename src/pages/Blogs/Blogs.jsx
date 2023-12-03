import { Helmet } from "react-helmet-async";
import { IoSearch } from "react-icons/io5";

const Blogs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Helmet>
          <title>Save-Life | Blogs</title>
        </Helmet>
        <div className="py-24">
          <div className="w-full max-w-lg mx-auto relative ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-error w-full max-w-xl"
            />
            <div className="absolute right-3 bottom-1/3">
                <IoSearch/>
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
        </div>
      </div>
    </>
  );
};
export default Blogs;
