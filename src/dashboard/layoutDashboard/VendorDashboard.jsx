import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { FaBoxOpen, FaCheckCircle, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";

const VendorDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["vendor-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/vendor/dashboard-stats?email=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-gray-500 animate-pulse">
        Loading your dashboard...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-my-neutral via-white to-my-accent p-6 space-y-8">
      
      {/* ✅ Vendor Info Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-base-100 shadow-xl rounded-xl border border-my-accent">
        <img
          src={user.photoURL || "/avatar.png"}
          alt="Vendor Avatar"
          className="w-24 h-24 rounded-full ring-4 ring-my-primary shadow-md"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-my-primary">
            Welcome, {user.displayName || "Teacher"} 👋
          </h2>
          <p className="text-gray-500">{user.email}</p>
          <div className="badge bg-my-secondary text-white mt-3 capitalize">
            {stats.role || "teacher"}
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default VendorDashboard;
