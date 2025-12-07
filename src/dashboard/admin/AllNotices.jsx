import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { Edit, CheckCircle, Trash2 } from "lucide-react";
import { format } from "date-fns";

export default function AllNotices() {
  const queryClient = useQueryClient();
  const [editNotice, setEditNotice] = useState(null);

  // ✅ Fetch all notices
  const { data: notices = [], isLoading } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      const res = await axios.get(`https://notice-board-server-pearl.vercel.app/api/notices`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
  });

  // ✅ Approve mutation
  const approveMutation = useMutation({
    mutationFn: async (id) => {
      const token = localStorage.getItem("access-token");
      await axios.patch(
        `https://notice-board-server-pearl.vercel.app/api/notices/${id}/approve`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },
    onSuccess: () => {
      Swal.fire("Approved!", "The notice has been approved.", "success");
      queryClient.invalidateQueries(["notices"]);
    },
  });

  // ✅ Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const token = localStorage.getItem("access-token");
      await axios.delete(`https://notice-board-server-pearl.vercel.app/api/notices/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
    onSuccess: () => {
      Swal.fire("Deleted!", "The notice has been removed.", "success");
      queryClient.invalidateQueries(["notices"]);
    },
  });

  // ✅ Update mutation
  const updateMutation = useMutation({
    mutationFn: async (updatedNotice) => {
      const token = localStorage.getItem("access-token");
      await axios.put(
        `https://notice-board-server-pearl.vercel.app/api/notices/${updatedNotice._id}`,
        updatedNotice,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },
    onSuccess: () => {
      Swal.fire("Updated!", "Notice updated successfully.", "success");
      setEditNotice(null);
      queryClient.invalidateQueries(["notices"]);
    },
  });

  // ✅ Handle actions
  const handleApprove = (id) => {
    Swal.fire({
      title: "Approve Notice?",
      text: "This notice will be published live!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, approve",
    }).then((res) => {
      if (res.isConfirmed) approveMutation.mutate(id);
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Notice?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    }).then((res) => {
      if (res.isConfirmed) deleteMutation.mutate(id);
    });
  };

  // ✅ Handle edit form submit
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedNotice = {
      _id: editNotice._id,
      title: form.title.value,
      content: form.content.value,
      department: form.department.value,
      type: form.type.value,
    };
    updateMutation.mutate(updatedNotice);
  };

  if (isLoading) return <p className="text-center mt-10">Loading notices...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-[#2e3192]">
        📢 Admin Notice Dashboard
      </h2>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 shadow rounded-xl">
        <table className="table table-zebra">
          <thead className="bg-[#2e3192] text-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Department</th>
              <th>Type</th>
              <th>Publisher</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n, idx) => (
              <tr key={n._id}>
                <td>{idx + 1}</td>
                <td>{n.title}</td>
                <td>{n.department || "N/A"}</td>
                <td>{n.type || "N/A"}</td>
                <td>{n.publisherEmail || "Unknown"}</td>
                <td>
                  <span
                    className={`badge ${
                      n.approved ? "badge-success" : "badge-warning"
                    }`}
                  >
                    {n.approved ? "Approved" : "Pending"}
                  </span>
                </td>
                <td>{format(new Date(n.createdAt), "dd MMM yyyy")}</td>
                <td className="flex gap-2">
                  {!n.approved && (
                    <button
                      className="btn btn-xs btn-success"
                      onClick={() => handleApprove(n._id)}
                    >
                      <CheckCircle size={14} />
                    </button>
                  )}
                  <button
                    className="btn btn-xs btn-info"
                    onClick={() => setEditNotice(n)}
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(n._id)}
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editNotice && (
        <dialog open className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-semibold text-lg mb-3">Edit Notice</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                name="title"
                defaultValue={editNotice.title}
                className="input input-bordered w-full"
              />
              <textarea
                name="content"
                defaultValue={editNotice.content}
                className="textarea textarea-bordered w-full h-28"
              ></textarea>
              <input
                type="text"
                name="department"
                defaultValue={editNotice.department || ""}
                placeholder="Department (optional)"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="type"
                defaultValue={editNotice.type || ""}
                placeholder="Type (optional)"
                className="input input-bordered w-full"
              />

              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setEditNotice(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}
