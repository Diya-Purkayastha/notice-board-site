import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/admin/dashboard-stats`);
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[60vh] text-my-primary text-xl font-semibold">
        Loading admin dashboard...
      </div>
    );

  return (
  <div className="p-8 max-w-7xl mx-auto space-y-12">
    {/* Welcome Section */}
    <section className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl shadow-xl relative overflow-hidden bg-gradient-to-r from-my-primary/90 to-my-primary-dark text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover" />
      <img
        src={user.photoURL || "/admin-avatar.png"}
        alt="Admin Avatar"
        className="w-28 h-28 rounded-full ring-4 ring-white shadow-md object-cover z-10"
      />
      <div className="z-10 text-center md:text-left">
        <h2 className="text-4xl font-extrabold mb-2 tracking-tight">
          Welcome, {user.displayName || "Admin"} 👋
        </h2>
        <p className="text-white/90 text-lg">{user.email}</p>
        <span className="inline-block mt-4 px-5 py-1.5 text-sm font-semibold bg-white/20 backdrop-blur-md rounded-full tracking-wide capitalize">
          Admin Dashboard
        </span>
      </div>
    </section>

      {/* Modern & Large Dashboard Stat Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
  {/* Total Users */}
  <div className="p-10 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-white flex items-center justify-between">
    <div>
      <h3 className="text-gray-200 font-semibold mb-3 text-xl md:text-2xl">Total Users</h3>
      <p className="text-4xl md:text-5xl font-extrabold">{stats.totalUsers || 0}</p>
    </div>
    <div className="text-5xl md:text-6xl opacity-80">
      <i className="fas fa-users"></i>
    </div>
  </div>

  {/* Total Notices */}
  <div className="p-10 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-white flex items-center justify-between">
    <div>
      <h3 className="text-gray-200 font-semibold mb-3 text-xl md:text-2xl">Total Notices</h3>
      <p className="text-4xl md:text-5xl font-extrabold">{stats.totalNotices || 0}</p>
    </div>
    <div className="text-5xl md:text-6xl opacity-80">
      <i className="fas fa-sticky-note"></i>
    </div>
  </div>

  {/* Approved Notices */}
  <div className="p-10 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-white flex items-center justify-between">
    <div>
      <h3 className="text-gray-200 font-semibold mb-3 text-xl md:text-2xl">Approved Notices</h3>
      <p className="text-4xl md:text-5xl font-extrabold">{stats.approvedNotices || 0}</p>
    </div>
    <div className="text-5xl md:text-6xl opacity-80">
      <i className="fas fa-check-circle"></i>
    </div>
  </div>

  {/* Pending Notices */}
  <div className="p-10 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-white flex items-center justify-between">
    <div>
      <h3 className="text-gray-200 font-semibold mb-3 text-xl md:text-2xl">Pending Notices</h3>
      <p className="text-4xl md:text-5xl font-extrabold">{stats.pendingNotices || 0}</p>
    </div>
    <div className="text-5xl md:text-6xl opacity-80">
      <i className="fas fa-hourglass-half"></i>
    </div>
  </div>
</div>


  </div>
);
};

export default AdminDashboard;
