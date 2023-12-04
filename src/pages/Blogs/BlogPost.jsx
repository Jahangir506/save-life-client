const BlogPost = ({ blog }) => {
  return (
    <>
      <div className="my-8">
        <h3 className="bg-red-100 p-4">{blog.title}</h3>
        <figure className="flex justify-center items-center">
          <img src={blog.images} className="w-96" alt="Album" />
        </figure>
        <p>{blog.postDetails}</p>
      </div>
    </>
  );
};
export default BlogPost;
