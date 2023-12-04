import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BlogPost from "./BlogPost";

const BlogContent = () => {
  const axiosSecure = useAxiosPublic();
  const [blogs, setBlogs] = useState([]);

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
          <div>
            {blogs.map((blog) => (
              <BlogPost key={blog._id} blog={blog}></BlogPost>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogContent;
