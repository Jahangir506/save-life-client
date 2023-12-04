import { AiOutlineShareAlt } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";

const BlogPost = ({ blog }) => {
  return (
    <>
      <div className="my-8">
        <div className="flex justify-between bg-gray-200 px-3">
          <div className="flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={blog?.userPhoto} />
              </div>
            </label>
            <div className="ml-4">
              <p className="text-lg font-medium">{blog?.userName}</p>
              <p><small>{blog?.userPostTime}</small></p>
            </div>
          </div>
          <div className="flex justify-center items-center text-xl">
            <FaRegBookmark className="mr-3" />
            <AiOutlineShareAlt className="text-2xl" />
          </div>
        </div>
        <div className="p-4">
          <figure className="flex justify-center items-center">
            <img src={blog.images} className="w-96" alt="Album" />
          </figure>
          <h3 className="card-title mb-2">{blog.title}</h3>
          <p>{blog.postDetails}</p>
        </div>
      </div>
    </>
  );
};
export default BlogPost;
