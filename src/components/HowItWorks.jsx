import React from "react";
import { FaUserGraduate, FaBell, FaClipboardList } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-white text-3xl" />,
    title: "Login or Sign Up",
    description:
      "Access your personalized dashboard by logging in with your university email. Students, faculty, and admins can manage notices easily.",
  },
  {
    id: 2,
    icon: <FaClipboardList className="text-white text-3xl" />,
    title: "Browse Notices by Department",
    description:
      "View categorized notices for your department, event updates, and important academic announcements—all in one place.",
  },
  {
    id: 3,
    icon: <FaBell className="text-white text-3xl" />,
    title: "Stay Notified",
    description:
      "Get instant updates whenever a new notice is approved and published by the admin. Never miss an important announcement again.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#e6e9ff] via-[#eef1f9] to-white md:mt-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="relative group">
          <div className="bg-white rounded-3xl shadow-2xl p-6 transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
            <img
              src="https://i.ibb.co.com/zW5HtFDX/Sign-up-bro-1.png"
              alt="How it works illustration"
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Blue glows */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-[#2e3192] to-[#3f51b5] rounded-full opacity-40 blur-3xl animate-pulse"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-[#3f51b5] to-[#5c6bc0] rounded-full opacity-40 blur-3xl animate-pulse"></div>
        </div>

        {/* Right Steps */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-my-primary mb-12 tracking-wide">
            How It Works
          </h2>

          <div className="space-y-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#2e3192] to-[#3f51b5] flex items-center justify-center shadow-md text-white text-2xl">
                  {step.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
