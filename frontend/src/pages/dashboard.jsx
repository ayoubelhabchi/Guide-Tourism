import React from 'react';
import Sidebar from '../components/dashboardGuides/sideBar';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden relative top-20">
      <Sidebar />
      <main className="flex-1 px-6 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
