import React from "react";
import { Bell, FileText, Users } from "lucide-react";

const Additional = () => {
  return (
    <section>
      {/* Service Section */}
      <section className="md:container mx-auto md:mt-20">
        <div className="flex justify-center">
          <h2 className="text-center font-extrabold text-4xl md:text-5xl relative inline-block text-my-primary">
            Services
            <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-full -translate-x-1/2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8 px-4">
          {/* Service Card 1 */}
          <div className="group bg-gradient-to-b from-[#e6e9ff] via-[#eef1f9] to-white text-center h-80 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
            <figure className="flex justify-center items-center bg-gradient-to-r from-[#2e3192] to-[#3f51b5] w-28 h-28 rounded-full mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Bell size={60} className="text-white" />
            </figure>
            <h4 className="font-semibold text-2xl relative mt-4 text-gray-800">
              Instant Notifications
              <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-full -translate-x-1/2"></span>
            </h4>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Stay updated with real-time university <br /> notices and
              announcements — anywhere, anytime.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="group bg-gradient-to-b from-[#e6e9ff] via-[#eef1f9] to-white text-center h-80 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
            <figure className="flex justify-center items-center bg-gradient-to-r from-[#2e3192] to-[#3f51b5] w-28 h-28 rounded-full mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
              <FileText size={60} className="text-white" />
            </figure>
            <h4 className="font-semibold text-2xl mt-4 relative text-gray-800">
              Verified Information
              <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-full -translate-x-1/2"></span>
            </h4>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Every notice is reviewed and approved <br /> by the admin before
              publication to ensure authenticity.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="group bg-gradient-to-b from-[#e6e9ff] via-[#eef1f9] to-white text-center h-80 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
            <figure className="flex justify-center items-center bg-gradient-to-r from-[#2e3192] to-[#3f51b5] w-28 h-28 rounded-full mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Users size={60} className="text-white" />
            </figure>
            <h4 className="font-semibold text-2xl relative mt-4 text-gray-800">
              Department Access
              <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-full -translate-x-1/2"></span>
            </h4>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Browse and filter notices by department <br /> to find what’s most
              relevant to you easily.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Additional;
