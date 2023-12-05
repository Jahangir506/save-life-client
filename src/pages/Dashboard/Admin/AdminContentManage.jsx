

import { Link } from "react-router-dom";



const AdminContentManage = () => {

  return (
    <>
      <div>
        <div className="flex justify-end pt-12 pr-24">
          <Link to="/dashboard/content-management/add-blog">
            <button className="px-6 font-medium py-3 hover:bg-black text-white bg-red-500 border-none uppercase hover:text-white rounded-none">
              Add Blogs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AdminContentManage;
