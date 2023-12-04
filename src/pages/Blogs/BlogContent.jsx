import { useEffect } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import BlogPost from "./BlogPost";

const BlogContent = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosPublic();
  const [blogs, setBlogs]= useState([])

  console.log(user);
  useEffect(() => {
    axiosSecure.get("/blogs").then((res) => {
        setBlogs(res.data);
    });
  }, [axiosSecure]);

  return (
    <>
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <a role="tab" className="tab">
            Relevant
          </a>
          <a role="tab" className="tab tab-active">
            Latest
          </a>
          <a role="tab" className="tab">
            Top
          </a>
        </div>
        <div className="my-5">
          <div className="flex justify-between bg-gray-200 px-3">
            <div className="flex">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <div className="ml-4">
                <p>{user?.displayName}</p>
                <p>{user?.metadata.creationTime}</p>
              </div>
            </div>
            <div className="flex justify-center items-center text-xl">
              <FaRegBookmark className="mr-3" />
              <AiOutlineShareAlt className="text-2xl" />
            </div>
          </div>
          <div className=" py-4 px-4">
            <div>
             {
                blogs.map(blog => <BlogPost key={blog._id} blog={blog}></BlogPost>)
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogContent;
