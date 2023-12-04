import { createBrowserRouter } from "react-router-dom";
import DonationRequest from "../components/DonationRequest/DonationRequest";
import Login from "../components/shared/Login/Login";
import Register from "../components/shared/Register/Register";
import Dashboard from "../layouts/Dashboard";
import MainLayouts from "../layouts/MainLayouts";
import Blogs from "../pages/Blogs/Blogs";
import BloodDonationDetails from "../pages/BloodDonationDetails/BloodDonationDetails";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import CreateDonationRequest from "../pages/Dashboard/Users/CreateDonationRequest";
import MyDonationRequest from "../pages/Dashboard/Users/MyDonationRequest";
import UserHome from "../pages/Dashboard/Users/UserHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SearchDonors from "../pages/SearchDonors/SearchDonors";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

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
        path: "/createDonationRequest/:id",
        element: (
          <PrivateRoutes>
            <BloodDonationDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://save-life-server.vercel.app/createDonationRequest/${params.id}`
          ),
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
        path: "users-home",
        element: <UserHome />,
      },
      {
        path: "my-donation-requests",
        element: <MyDonationRequest />,
      },
      {
        path: "create-donation-request",
        element: <CreateDonationRequest />,
      },
    ],
  },
]);
