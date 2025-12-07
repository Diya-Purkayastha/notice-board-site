import React from 'react';
import { NavLink, Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='flex flex-col md:flex-row min-h-screen'>

            {/* Left Side - Forms */}
            <div className='flex-1'>
                <Outlet />
            </div>

            {/* Right Side - Welcome Section */}
            <div className="flex-1 relative overflow-hidden text-base-content">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2e3192] via-[#3f51b5] to-[#5c6bc0] opacity-95 z-0"></div>

                {/* Decorative blob */}
                <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full top-20 right-20 blur-3xl z-0"></div>

                {/* Text content */}
                <div className="relative z-10 flex items-center justify-center h-full px-6 py-12 text-center text-white">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                            Welcome to RTM Al-Kabir Notice Board
                        </h1>
                        <p className="text-lg leading-relaxed opacity-90">
                            Stay updated with the latest university notices, events, and announcements — all in one digital hub.
                        </p>
                        <p className="text-sm opacity-80">
                            Accessible anytime, anywhere. Students, faculty, and staff can manage notices quickly and efficiently.
                        </p>
                        <NavLink to='/'>
                            <button className='btn bg-white text-[#2e3192] hover:bg-[#3f51b5] hover:text-white border-none shadow-lg'>
                                Back to Home
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
