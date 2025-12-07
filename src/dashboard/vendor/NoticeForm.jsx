import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function NoticeForm() {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post("/api/notices", data);

      if (response.status === 201) {
        toast.success("✅ Notice added successfully!");
        reset();
      }
    } catch (error) {
      console.error(error);

      if (error.response?.status === 403) {
        toast.error("⚠️ Only teachers can post notices.");
      } else if (error.response?.status === 401) {
        toast.error("🔒 Please log in to post a notice.");
      } else {
        toast.error("❌ Failed to add notice.");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-2xl mt-10">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0]">
        Add a New Notice
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter notice title"
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3f51b5] transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Write the full notice here..."
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm h-44 resize-none focus:outline-none focus:ring-2 focus:ring-[#3f51b5] transition"
          ></textarea>
        </div>

        {/* Publisher */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Publisher Name</label>
          <input
            type="text"
            {...register("publisher", { required: true })}
            placeholder="Publisher name"
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3f51b5] transition"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Department</label>
          <input
            type="text"
            {...register("department")}
            placeholder="e.g. CSE/EEE/ENG/FD"
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3f51b5] transition"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Publish Time</label>
          <input
            type="datetime-local"
            {...register("time", { required: true })}
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3f51b5] transition"
          />
        </div>

        {/* Notice Type */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Notice Type</label>
          <select
            {...register("type")}
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3f51b5] transition"
          >
            <option value="General">General</option>
            <option value="Important">Important</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] text-white font-semibold text-lg shadow-lg hover:scale-105 transform transition"
        >
          Post Notice
        </button>
      </form>
    </div>
  );
}
