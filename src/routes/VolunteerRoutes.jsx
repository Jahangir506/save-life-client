import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useVolunteer from "../hooks/useVolunteer";

const VolunteerRoutes = ({children}) => {
  const { user, loading } = useAuth();
  const [isVolunteer, isVolunteerLoading] = useVolunteer();
  const location = useLocation();

  if (loading || isVolunteerLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isVolunteer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};
export default VolunteerRoutes;
