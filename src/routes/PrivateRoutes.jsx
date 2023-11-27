import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress
          className="progress progress-error w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}}/>;
};
export default PrivateRoutes;
