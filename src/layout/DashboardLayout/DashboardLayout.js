import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/shared/Header/Header';
import { AuthContext } from '../../contexts/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Header></Header>
            <div style={{ borderTop: '1px solid #000' }} className="row mx-0">
                <div style={{ backgroundColor: '#000', color: '#fff' }} className="col-12 col-md-2">
                    {user && <h1 className='mt-3' style={{ color: '#D4A977', fontWeight: '300', letterSpacing: '2px' }}>{user?.displayName}</h1>}
                    <NavLink to="/dashboard" style={{ textDecoration: 'none' }}><div style={{ letterSpacing: '1px', backgroundColor: '#313131', borderRadius: '5px' }} className='px-2 py-2 mt-4 text-white mb-2'>All User</div></NavLink>
                    <NavLink to="/dashboard/allAdmin" style={{ textDecoration: 'none' }}><div style={{ letterSpacing: '1px', backgroundColor: '#313131', borderRadius: '5px' }} className='px-2 py-2 text-white'>All Admin</div></NavLink>
                </div>
                <div className="col-12 col-md-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;