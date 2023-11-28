import { createBrowserRouter } from "react-router-dom";
import Login from "../components/shared/Login/Login";
import Register from "../components/shared/Register/Register";
import Dashboard from "../layouts/Dashboard";
import MainLayouts from "../layouts/MainLayouts";
import Blogs from "../pages/Blogs/Blogs";
import BloodDonationDetails from "../pages/BloodDonationDetails/BloodDonationDetails";
import CreateDonationRequest from "../pages/Dashboard/CreateDonationRequest";
import MyDonationRequest from "../pages/Dashboard/MyDonationRequest";
import Home from "../pages/Home/Home";
import SearchDonors from "../pages/SearchDonors/SearchDonors";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs/>
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
        element: <SearchDonors />,
      },
      {
        path: "/donationDetails",
        element: (
          <PrivateRoutes>
            <BloodDonationDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    children: [
        {
            path: 'my-donation-requests',
            element: <MyDonationRequest/>
        },
        {
            path: 'create-donation-request',
            element: <CreateDonationRequest/>
        }
    ]
  }
]);
