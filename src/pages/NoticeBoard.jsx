import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function NoticeBoard() {
  const { user } = useAuth();
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const { data: notices = [], isLoading } = useQuery({
    queryKey: ["notices", department, type],
    queryFn: async () => {
      const params = {};
      if (department) params.department = department;
      if (type) params.type = type;
      const res = await axios.get("https://notice-board-server-pearl.vercel.app/api/public-notices", { params });
      return res.data;
    },
  });

  const sortedNotices = [...notices].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#2e3192]">
          Notice Board
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <select
            className="select select-bordered w-44"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            <option value="CSE">CSE</option>
            <option value="ENG">ENG</option>
            <option value="EEE">EEE</option>
            <option value="FD">FD</option>
          </select>

          <select
            className="select select-bordered w-44"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All Notice Types</option>
            <option value="General">General</option>
            <option value="Exam">Exam</option>
            <option value="Event">Event</option>
            <option value="Academic">Academic</option>
          </select>
        </div>

        {/* Notices */}
        {isLoading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="animate-spin w-8 h-8 text-[#2e3192]" />
          </div>
        ) : sortedNotices.length === 0 ? (
          <p className="text-center text-gray-500">No notices found.</p>
        ) : (
          <div className="grid gap-6">
            {sortedNotices.map((notice) => (
              <div
                key={notice._id}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {notice.title}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {format(new Date(notice.createdAt), "PPP p")}
                  </span>
                </div>

                <p className="text-gray-600 mb-3">{notice.description}</p>

                <div className="text-sm text-gray-500 flex flex-wrap gap-4">
                  {notice.department && (
                    <span>📚 Dept: {notice.department}</span>
                  )}
                  {notice.type && <span>🗂 Type: {notice.type}</span>}
                  <span>👤 {notice.publisher}</span>
                </div>
                <button
      className="btn btn-sm btn-primary"
      onClick={() => {
        if (!user) {
          toast.error("Please login to view notice details");
          return;
        }
        navigate(`/notices/${notice._id}`);
      }}
    >
      Details
    </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
