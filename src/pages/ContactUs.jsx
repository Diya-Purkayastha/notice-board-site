import React from "react";

import Additional from "../components/Additional";

const ContactUs = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-5xl mx-auto">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] p-10 text-center">
            <h2 className="text-4xl font-bold text-white">Contact Us</h2>
            <p className="text-white/90 mt-2">
              Have questions? We’d love to hear from you.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-12">
            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f51b5] shadow-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f51b5] shadow-sm"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f51b5] shadow-sm"
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f51b5] shadow-sm"
              ></textarea>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] text-white font-semibold text-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
