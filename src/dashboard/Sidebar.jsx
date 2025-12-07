import { Link, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import { useEffect } from "react";// optional icon

import logo from '../../public/logo.jpg'

import { Home, Menu } from "lucide-react";
import Forbidden from "../pages/Forbidden";

const Sidebar = () => {
  const { user, loading: authLoading } = useAuth();
  const { role, roleLoading, refetch } = useUserRole();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (authLoading || roleLoading) {
    return (
      <span className="loading loading-spinner loading-lg block mx-auto my-10"></span>
    );
  }

  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer Toggle Button for Mobile */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        {/* Top Navbar for Mobile */}
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-xl text-my-primary font-bold">Dashboard</h2>
          <label
            htmlFor="dashboard-drawer"
            className="btn bg-my-primary text-white drawer-button lg:hidden"
          >
            <Menu size={20} /> {/* hamburger icon */}
          </label>
        </div>

        {/* ✅ Here you render the main dashboard content */}
        <div className="p-4">
          {/* Outlet or content goes here */}
          <Outlet></Outlet>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div className="drawer-side">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-70 min-h-full bg-my-primary text-white">
          <div className="flex gap-1 items-center mb-6">
            <img src={logo} alt="" className="w-15 rounded-full"/>
          <a href="/dashboard"><h2 className="text-3xl font-bold">Dashboard</h2></a>
          </div>
          <ul className="space-y-3 text-lg font-semibold">
            {role === "admin" && (
              <>
                <li>
                  <Link to="users">All Users</Link>
                </li>
                <li>
                  <Link to="all-notice">All Notice</Link>
                </li>
                
              </>
            )}
            {role === "teacher" && (
              <>
                <li>
                  <Link to="add-notice">Add Notice</Link>
                </li>
                
              </>
            )}
            {role === "user" && (
              <>
                
              </>
            )}
            <li>
              <Link to="/" className="flex items-center gap-2 font-bold p-2 border-1">
                <Home size={18} /> 
                Back To Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
