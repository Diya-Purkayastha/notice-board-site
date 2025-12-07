import {createBrowserRouter} from "react-router";
import mainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Forbidden from "../pages/Forbidden";
import DashboardHome from "../dashboard/DashboardHome";
import AdminRoute from '../routes/AdminRoute'
import VendorRoute from '../routes/VendorRoute'
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ForgetPass from "../pages/authentication/ForgetPass";
import AboutPage from "../pages/AboutPage";
import ContactUs from "../pages/ContactUs";
import AuthLayout from "../layout/AuthLayout";
import AllUsers from "../dashboard/admin/AllUsers";
import NoticeForm from "../dashboard/vendor/NoticeForm";
import NoticeBoard from "../pages/NoticeBoard";
import AllNotices from "../dashboard/admin/AllNotices";
import NoticeDetails from "../pages/NoticeDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    children: [
        {
            index: true,
            Component:Home
        },
       
        {
          path: '/about',
          Component: AboutPage
        },
        {
          path: '/contact',
          Component: ContactUs
        },
        {
          path:'/forbidden',
          Component:Forbidden
        }, 
      {
        path: '/privacypolicy',
        Component: PrivacyPolicy
      },
      {
        path: 'notice',
        Component: NoticeBoard
      },
      {
      path: "/notices/:id",
  element: 
    <PrivateRoute>
      <NoticeDetails />
    </PrivateRoute>
  }
      
    ]
  },
  {
    path:'/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
       {
            path:'login',
            Component:Login
        },
        {
            path: 'register',
            Component: Register
        },
        {
        path: 'forgetpass',
        Component: ForgetPass
      }
    ]

  },
  {
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        Component: DashboardHome
      },
      
      //admin routes
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'all-notice',
        element: <AdminRoute><AllNotices/></AdminRoute>
      },
      {
        path: 'add-notice',
        element: <VendorRoute><NoticeForm></NoticeForm></VendorRoute>
      }

     
    ]
  },
  

]);


