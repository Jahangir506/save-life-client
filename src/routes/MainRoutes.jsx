import { createBrowserRouter } from "react-router-dom";
import DonationRequest from "../components/DonationRequest/DonationRequest";
import Funding from "../components/shared/Funding/Funding";
import Login from "../components/shared/Login/Login";
import Register from "../components/shared/Register/Register";
import Dashboard from "../layouts/Dashboard";
import MainLayouts from "../layouts/MainLayouts";
import Blogs from "../pages/Blogs/Blogs";
import BloodDonationDetails from "../pages/BloodDonationDetails/BloodDonationDetails";
import AdminBloodDonationRequest from "../pages/Dashboard/Admin/AdminBloodDonationRequest";
import AdminContentManage from "../pages/Dashboard/Admin/AdminContentManage";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import CreateDonationRequest from "../pages/Dashboard/Users/CreateDonationRequest";
import MyDonationRequest from "../pages/Dashboard/Users/MyDonationRequest";
import UpdateDonReq from "../pages/Dashboard/Users/UpdateDonReq";
import UserHome from "../pages/Dashboard/Users/UserHome/UserHome";
import ContentManagement from "../pages/Dashboard/Volunteer/ContentManagement";
import AllBloodDonationRequest from "../pages/Dashboard/Volunteer/VolunteerBloodDonationRequest";
import VolunteerHome from "../pages/Dashboard/Volunteer/VolunteerHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SearchDonors from "../pages/SearchDonors/SearchDonors";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import VolunteerRoutes from "./VolunteerRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/searchDonors",
        element: <SearchDonors />,
      },
      {
        path: "/donationRequest",
        element: <DonationRequest />,
      },
      {
        path: "/funding",
        element: <Funding/>,
      },
      {
        path: "/createDonationRequest/:id",
        element: (
          <PrivateRoutes>
            <BloodDonationDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/createDonationRequest/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "admin-home",
        element: (
          <AdminRoutes>
            <AdminHome />
          </AdminRoutes>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "admin-all-blood-donation-request",
        element: (
          <AdminRoutes>
            <AdminBloodDonationRequest/>
          </AdminRoutes>
        ),
      },
      {
        path: "admin-content-management",
        element: (
          <AdminRoutes>
            <AdminContentManage />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/content-management/add-blog",
        element: (
          <AdminRoutes>
           <Blogs/>
          </AdminRoutes>
        ),
      },
      {
        path: "users-home",
        element: <UserHome/>,
      },
      {
        path: "my-donation-requests",
        element: <MyDonationRequest />,
      },
      {
        path: "create-donation-request",
        element: <CreateDonationRequest />,
      },
      {
        path: "/dashboard/update-donation-request/:id",
        element: <UpdateDonReq/>,
        loader: ({params}) => fetch(`http://localhost:5000/createDonationRequest/${params.id}`)
      },
      {
        path: "volunteer-home",
        element: (
          <VolunteerRoutes>
            <VolunteerHome />
          </VolunteerRoutes>
        ),
      },
      {
        path: "all-blood-donation-request",
        element: (
          <VolunteerRoutes>
            <AllBloodDonationRequest />
          </VolunteerRoutes>
        ),
      },
      {
        path: "content-management",
        element: (
          <VolunteerRoutes>
            <ContentManagement />
          </VolunteerRoutes>
        ),
      },
    ],
  },
]);
