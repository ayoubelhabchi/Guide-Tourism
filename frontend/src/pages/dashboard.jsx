import React from 'react';
import Sidebar from '../components/dashboardGuides/sideBar';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/dashboardGuides/topBar';

function Dashboard() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar className="w-full" /> {/* TopBar with full width */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar className="" /> {/* Sidebar with fixed width */}
        <main className="flex-1 px-6 overflow-auto pb-4 pt-2 bg-slate-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
