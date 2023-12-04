import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <>
      <div>
        <Helmet>
          <title>Save-Life | user-home</title>
        </Helmet>
        {user?.displayName ? user.displayName : "I am Back"}
      </div>
    </>
  );
};
export default UserHome;
