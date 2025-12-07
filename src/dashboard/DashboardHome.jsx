import React from 'react';
import Loading from '../components/Loading'
import useUserRole from '../hooks/useUserRole';
import AdminDashboard from './layoutDashboard/AdminDashboard';
import VendorDashboard from './layoutDashboard/VendorDashboard';
import Forbidden from '../pages/Forbidden';


const DashboardHome = () => {
    const { role, roleLoading } = useUserRole();

    if (roleLoading) {
        return <Loading></Loading>
    }

    else if(role === 'teacher'){
        return <VendorDashboard></VendorDashboard>
    }
    else if(role ==='admin'){
        return <AdminDashboard></AdminDashboard>
    }
    else {
        return <Forbidden></Forbidden>
    }

};

export default DashboardHome;