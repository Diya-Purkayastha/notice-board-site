import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slide } from 'react-awesome-reveal';

const Slider = () => {
  return (
    <div className="w-full h-[80vh] group relative">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {/* ✅ Slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-[500px] md:h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://www.rtm-aktu.edu.bd/images/gallery/20220421121754.jpg')",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl px-6 text-white">
              <Slide direction="up" cascade damping={0.15} triggerOnce delay={300}>
                <h1 className="text-3xl md:text-5xl font-light leading-tight">
                  Welcome to <br />
                  <span className="font-bold">RTM AKTU Notice Board</span>
                </h1>

                <ul className="space-y-2 text-base mt-4">
                  <li>📢 Get instant access to official university notices</li>
                  <li>📅 Stay updated with academic and exam schedules</li>
                  <li>🏛 Department-wise categorized announcements</li>
                  <li>⚡ Real-time notifications for important updates</li>
                </ul>

                <Slide direction="down" cascade damping={0.15} triggerOnce>
                  <button className="bg-white text-black px-6 py-3 mt-6 hover:bg-gray-200 rounded-md">
                    VIEW LATEST NOTICES
                  </button>
                </Slide>
              </Slide>
            </div>
          </div>
        </SwiperSlide>

        {/* ✅ Slide 2 */}
        <SwiperSlide>
          <div
            className="relative h-[500px] md:h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://www.rtm-aktu.edu.bd/images/gallery/20220421122555.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl px-6 text-white">
              <Slide direction="up" cascade damping={0.15} triggerOnce delay={300}>
                <h1 className="text-3xl md:text-5xl font-light leading-tight">
                  Streamlined Communication <br />
                  <span className="font-bold">For Students & Faculty</span>
                </h1>

                <ul className="space-y-2 text-base mt-4">
                  <li>🎓 Easy access to department-specific news</li>
                  <li>🧾 Download important circulars and PDFs</li>
                  <li>🔔 Get notified when new notices are approved</li>
                  <li>✅ Verified updates directly from the admin panel</li>
                </ul>

                <Slide direction="down" cascade damping={0.15} triggerOnce>
                  <button className="bg-white text-black px-6 py-3 mt-6 hover:bg-gray-200 rounded-md">
                    EXPLORE NOTICES
                  </button>
                </Slide>
              </Slide>
            </div>
          </div>
        </SwiperSlide>

        {/* ✅ Slide 3 */}
        <SwiperSlide>
          <div
            className="relative h-[500px] md:h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage:
                "url('https://www.rtm-aktu.edu.bd/images/gallery/20220421121019.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl px-6 text-white">
              <Slide direction="up" cascade damping={0.15} triggerOnce delay={300}>
                <h1 className="text-3xl md:text-5xl font-light leading-tight">
                  Transparent Updates <br />
                  <span className="font-bold">Approved by University Admins</span>
                </h1>

                <ul className="space-y-2 text-base mt-4">
                  <li>🛡 Admins verify and approve every notice</li>
                  <li>📂 Filter by category: Events, Results, Admissions</li>
                  <li>📱 Access the board anytime, from any device</li>
                  <li>💡 Empowering digital communication across campus</li>
                </ul>

                <Slide direction="down" cascade damping={0.15} triggerOnce>
                  <button className="bg-white text-black px-6 py-3 mt-6 hover:bg-gray-200 rounded-md">
                    BROWSE ALL NOTICES
                  </button>
                </Slide>
              </Slide>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
