import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";

export default function NoticeDetails() {
  const { id } = useParams();

  const { data: notice, isLoading } = useQuery({
    queryKey: ["notice", id],
    queryFn: async () => {
      const token = localStorage.getItem("access-token"); // Firebase JWT
      const res = await axios.get(`https://notice-board-server-pearl.vercel.app/api/notices/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="animate-spin w-8 h-8 text-[#2e3192]" />
      </div>
    );

  if (!notice)
    return <p className="text-center text-gray-500">Notice not found.</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-[#2e3192]">{notice.title}</h1>
        <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-4">
          {notice.department && <span>📚 Dept: {notice.department}</span>}
          {notice.type && <span>🗂 Type: {notice.type}</span>}
          <span>👤 {notice.publisher}</span>
          <span>📅 {new Date(notice.createdAt).toLocaleString()}</span>
        </div>
        <p className="text-gray-700">{notice.description}</p>
      </div>
    </div>
  );
}
