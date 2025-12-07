import React from "react";
import { NavLink } from "react-router";

const AboutPage = () => {
  return (
    <main className="">
      {/* About Section */}
      <section className="md:container mx-auto mb-28 px-6 mt-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-3xl shadow-lg overflow-hidden p-8 lg:p-12">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              About <span className="text-[#eef1f9]">RTM Al-Kabir Notice Board</span>
            </h2>
            <p className="text-lg text-gray-100 leading-relaxed">
              The <b>RTM Al-Kabir Technical University Notice Board</b> is your all-in-one
              digital hub for staying updated with every important campus announcement.
              From academic schedules to examination results, event updates, and
              administrative circulars — everything you need is now just a click away.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed">
              Our mission is to make information sharing faster, smarter, and more
              accessible for every student, teacher, and staff member. Stay informed,
              stay connected — because every notice matters.
            </p>
            <a href="/notices">
              <button className="px-8 py-3 bg-[#3f51b5] text-white font-semibold rounded-xl shadow-md hover:bg-[#2e3192] transition">
                View Notices
              </button>
            </a>
          </div>

          {/* Right Image / Animation */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://i.ibb.co.com/BHk7G5L4/About-us-page-rafiki.png"
              alt="University Notice Illustration"
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </div>
      </section>


      <section className="md:container mx-auto mb-28 px-6">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-extrabold text-my-primary">
      Frequently Asked Questions
    </h2>
    <p className="text-gray-100 mt-4">
      Answers to the most common questions about the RTM Al-Kabir Notice Board.
    </p>
  </div>

  <div className="space-y-4">
    {/* FAQ Item 1 */}
    <div className="bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-2xl p-6 text-white shadow-md">
      <h3 className="font-semibold text-xl cursor-pointer">
        1. Who can access the notice board?
      </h3>
      <p className="mt-2 text-gray-100">
        All students, faculty, and administrative staff of RTM Al-Kabir Technical University can access the notice board.
      </p>
    </div>

    {/* FAQ Item 2 */}
    <div className="bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-2xl p-6 text-white shadow-md">
      <h3 className="font-semibold text-xl cursor-pointer">
        2. How often are notices updated?
      </h3>
      <p className="mt-2 text-gray-100">
        Notices are updated in real-time as soon as the admin approves them, ensuring you never miss an important announcement.
      </p>
    </div>

    {/* FAQ Item 3 */}
    <div className="bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-2xl p-6 text-white shadow-md">
      <h3 className="font-semibold text-xl cursor-pointer">
        3. Can I filter notices by department or category?
      </h3>
      <p className="mt-2 text-gray-100">
        Yes! The notice board allows you to filter notices by department, event type, or category for easier navigation.
      </p>
    </div>

    {/* FAQ Item 4 */}
    <div className="bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-2xl p-6 text-white shadow-md">
      <h3 className="font-semibold text-xl cursor-pointer">
        4. How do I get notifications for new notices?
      </h3>
      <p className="mt-2 text-gray-100">
        By subscribing with your email, you’ll receive instant updates whenever a new notice is published.
      </p>
    </div>

    {/* FAQ Item 5 */}
    <div className="bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-2xl p-6 text-white shadow-md">
      <h3 className="font-semibold text-xl cursor-pointer">
        5. Is the notice board mobile-friendly?
      </h3>
      <p className="mt-2 text-gray-100">
        Absolutely! The notice board is fully responsive and can be accessed from any device, anytime, anywhere.
      </p>
    </div>
  </div>
</section>



      {/* Stay Updated Section */}
      <section className="md:container mx-auto mb-28 px-4 mt-10">
        <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
          
          {/* Left Text */}
          <div className="flex-1 flex justify-center items-center bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-2xl shadow-lg">
            <div className="p-8 lg:p-12 space-y-6 text-center lg:text-left">
              <h2 className="text-white text-3xl lg:text-5xl font-bold leading-snug">
                Stay Updated, <br />
                Anytime & Anywhere <br />
                with Our Digital Notice Board
              </h2>
              <p className="text-gray-100 opacity-90 text-lg max-w-md mx-auto lg:mx-0">
                No more missing important updates! Get real-time notifications of new
                notices, event alerts, and academic announcements directly through our
                platform.
              </p>
            </div>
          </div>

          {/* Right Animation */}
          <div className="flex-1 flex items-center justify-center bg-white/20">
            <img
              className="w-3/4 h-[500px] lg:w-full object-contain"
              src="https://i.ibb.co.com/N6TWnB1F/college-students.gif"
              alt="University Notice Animation"
            />
          </div>
        </div>
      </section>

      {/* Announcements & Highlights Section
      <section className="md:container mx-auto mb-28">
        <h2 className="text-my-primary font-bold text-4xl md:text-5xl text-center mb-12">
          Announcements & Highlights
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 p-4">
          
          <div className="flex lg:basis-3/5 bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-2xl p-8 justify-between items-center shadow-lg hover:scale-105 transition">
            <div className="space-y-6">
              <p className="italic font-bold text-white">
                Get the Latest Academic Notices, Exam Schedules & Result Updates Instantly!
              </p>
              <a href="/notices">
                <button className="px-9 py-3 bg-white text-[#2e3192] font-semibold rounded-lg shadow-md hover:bg-gray-100">
                  View All Notices
                </button>
              </a>
              <h2 className="text-4xl text-white font-light">
                Stay <span className="font-bold">Informed</span> Always
              </h2>
            </div>
            <div>
              <img
                className="w-full h-[300px]"
                src="https://i.ibb.co.com/0RLyRjh5/fruit-basket-rafiki.png"
                alt="Academic Updates Illustration"
              />
            </div>
          </div>

      
          <div className="lg:basis-2/5 flex bg-gradient-to-r from-[#3f51b5] via-[#5c6bc0] to-[#2e3192] rounded-2xl p-8 justify-between items-center shadow-lg hover:scale-105 transition">
            <div className="space-y-6">
              <p className="italic font-bold text-white">
                Explore the Latest University Events, Seminars & Cultural Programs.
              </p>
              <a href="/events">
                <button className="px-9 py-3 bg-white text-[#2e3192] font-semibold rounded-lg shadow-md hover:bg-gray-100">
                  Explore Events
                </button>
              </a>
              <h2 className="text-4xl text-white font-light">
                Don’t Miss <span className="font-bold">What’s Next!</span>
              </h2>
            </div>
            <div>
              <img
                className="w-full h-[250px]"
                src="https://i.ibb.co.com/C52F3Wt7/Discount-amico.png"
                alt="Event Updates Illustration"
              />
            </div>
          </div>
        </div>
      </section>

      Newsletter / Subscription Section
      <section className="mx-4 mb-24">
        <div className="md:container mx-auto bg-gradient-to-r from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] rounded-3xl p-8 lg:p-16 shadow-lg">
          <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8">
           
            <div>
              <img
                src="https://i.ibb.co.com/0ptkNrV2/vegetable-busket.png"
                alt="Email Notification Illustration"
                className="w-56 lg:w-72"
              />
            </div>

           
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Subscribe for Updates!
              </h2>
              <p className="text-gray-100 md:text-lg">
                Get notified instantly whenever new university notices, exam results, or
                event announcements are published.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  className="flex-1 py-4 px-6 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3f51b5] outline-none"
                  type="text"
                  placeholder="Enter your email..."
                />
                <button className="px-8 py-4 bg-[#3f51b5] hover:bg-[#2e3192] text-white font-semibold rounded-lg shadow-md transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* FAQ Section */}





    </main>
  );
};

export default AboutPage;
